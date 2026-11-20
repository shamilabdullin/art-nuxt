// GET /api/artworks?limit=12&page=1 — список картин (BFF над artic.edu: браузер туда не пускают).

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = parsePositiveInt('limit', query.limit, 12, 100)
  const page = parsePositiveInt('page', query.page, 1)
  const artistId =
    query.artistId === undefined ? undefined : parsePositiveInt('artistId', query.artistId, 1)

  const must: Record<string, unknown>[] = [
    { term: { is_public_domain: true } },
    { exists: { field: 'image_id' } },
  ]
  if (artistId) must.push({ term: { artist_id: artistId } })

  if (page * limit > AIC_MAX_RESULTS)
    throw createError({
      status: 400,
      statusText: `page * limit must not exceed ${AIC_MAX_RESULTS}`,
    })

  try {
    const response = await aicFetch<ApiListResponse<ArtworkSummary>>('artworks/search', {
      query: {
        fields: ARTWORK_SUMMARY_FIELDS,
        limit,
        page,
        params: JSON.stringify({ query: { bool: { must } } }),
      },
    })

    return {
      artworks: response.data,
      page: response.pagination.current_page,
      totalPages: Math.min(response.pagination.total_pages, Math.floor(AIC_MAX_RESULTS / limit)),
    }
  } catch {
    throw createError({ status: 502, statusText: 'Art Institute API error' })
  }
})
