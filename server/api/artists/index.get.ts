// GET /api/artists?limit=24&page=1 - список авторов

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = parsePositiveInt('limit', query.limit, 24, 100)
  const page = parsePositiveInt('page', query.page, 1)

  try {
    const response = await aicFetch<ApiListResponse<ArtistSummary>>('artists', {
      query: {
        fields: ARTIST_SUMMARY_FIELDS,
        limit,
        page,
      },
    })

    return {
      artists: response.data,
      page: response.pagination.current_page,
      totalPages: response.pagination.total_pages,
    }
  } catch {
    throw createError({ status: 502, statusText: 'Art Institute API error' })
  }
})
