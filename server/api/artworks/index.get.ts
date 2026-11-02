// GET /api/artworks?limit=12&page=1 — список картин (BFF над artic.edu: браузер туда не пускают).

import { aicFetch } from '~~/server/utils/aic'

function parsePositiveInt(value: unknown, fallback: number, max = Infinity): number {
  if (value === '' || typeof value === 'undefined') return fallback

  const number = Number(value)
  if (number < 1 || number > max || !Number.isInteger(number)) {
    throw createError({ status: 400, statusText: 'some error' })
  }

  return number
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = parsePositiveInt(query.limit, 12, 100)
  const page = parsePositiveInt(query.page, 1, 10)

  // TODO 1. Параметры: getQuery(event) → limit (целое 1–100, по умолчанию 12), page (целое ≥ 1, по умолчанию 1).
  //         Невалидные → throw createError({ status: 400, statusText: '…' })

  try {
    const response = await aicFetch<ApiListResponse<ArtworkSummary>>('artworks/search', {
      query: { fields: ARTWORK_SUMMARY_FIELDS, limit: limit, page: page, params: {} },
    })

    return {
      artworks: response.data,
      page: response.pagination.current_page,
      totalPages: response.pagination.total_pages,
    }
  } catch (e) {
    throw createError({ status: 503, statusText: '502 error' })
  }

  // TODO 2. Запрос: $fetch<ApiListResponse<ArtworkSummary>>('artworks/search', { … })
  //         baseURL, headers с AIC-User-Agent, query: fields, limit, page, params (фильтр — JSON-строкой).
  //         Ошибка artic.edu → throw createError({ status: 502, statusText: '…' })

  // TODO 3. Вернуть то, что нужно интерфейсу (главной — массив, списку в шаге 4 — ещё и пагинация).
})
