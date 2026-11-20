// GET /api/artists/:id — один художник

import { FetchError } from 'ofetch'
import { POSITIVE_INT_ID } from '~~/server/utils/query'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id || !POSITIVE_INT_ID.test(id)) {
    throw createError({ status: 404, statusText: 'Artist not found' })
  }

  try {
    const response = await aicFetch<ApiSingleResponse<ArtistDetails>>(`artists/${id}`, {
      query: { fields: ARTIST_DETAILS_FIELDS },
    })

    return response.data
  } catch (error) {
    if (error instanceof FetchError && error.status === 404) {
      throw createError({ status: 404, statusText: 'Artist not found' })
    }
    throw createError({ status: 502, statusText: 'Art Institute API error' })
  }
})
