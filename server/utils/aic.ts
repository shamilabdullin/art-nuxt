export const aicFetch = $fetch.create({
  baseURL: API_BASE_URL,
  headers: { 'AIC-User-Agent': AIC_USER_AGENT },
})

/** API отдаёт не больше 1000 результатов: при page × limit > 1000 отвечает 403. */
export const AIC_MAX_RESULTS = 1000
