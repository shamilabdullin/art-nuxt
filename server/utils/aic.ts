import { AIC_USER_AGENT } from '~~/shared/utils/api'

export const aicFetch = $fetch.create({
  baseURL: API_BASE_URL,
  headers: { 'AIC-User-Agent': AIC_USER_AGENT },
})
