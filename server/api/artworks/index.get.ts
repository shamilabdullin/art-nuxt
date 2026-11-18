// GET /api/artworks?limit=12&page=1 — список картин (BFF над artic.edu: браузер туда не пускают).

const PUBLIC_DOMAIN_WITH_IMAGE = {
  query: {
    bool: { must: [{ term: { is_public_domain: true } }, { exists: { field: 'image_id' } }] },
  },
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = parsePositiveInt('limit', query.limit, 12, 100)
  const page = parsePositiveInt('page', query.page, 1)

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
        params: JSON.stringify(PUBLIC_DOMAIN_WITH_IMAGE),
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
