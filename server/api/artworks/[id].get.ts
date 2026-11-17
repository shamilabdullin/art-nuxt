// GET /api/artworks/:id — одна картина (BFF над artic.edu: браузер туда не пускают).

import { FetchError } from 'ofetch'

const ARTWORK_ID_PATTERN = /^[1-9]\d*$/

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id || !ARTWORK_ID_PATTERN.test(id)) {
    throw createError({ status: 404, statusText: 'Artwork not found' })
  }

  try {
    const response = await aicFetch<ApiSingleResponse<ArtworkDetails>>(`artworks/${id}`, {
      query: { fields: ARTWORK_DETAILS_FIELDS },
    })

    return response.data
  } catch (error) {
    if (error instanceof FetchError && error.status === 404) {
      throw createError({ status: 404, statusText: 'Artwork not found' })
    }
    throw createError({ status: 502, statusText: 'Art Institute API error' })
  }
})
