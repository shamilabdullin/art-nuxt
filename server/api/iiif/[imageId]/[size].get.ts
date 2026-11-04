// GET /api/iiif/:imageId/:size — картинка из IIIF artic.edu через наш сервер.
// IIIF стоит за Cloudflare: запрос из браузера (<img>) получает 403 со страницей проверки,
// а <img> не умеет слать заголовок AIC-User-Agent — поэтому картинку запрашивает сервер.

const IMAGE_ID_PATTERN = /^[0-9a-f-]{36}$/i
const ONE_YEAR = 60 * 60 * 24 * 365

function isImageSize(value: string): value is ImageSize {
  return Object.hasOwn(IMAGE_SIZE, value)
}

export default defineEventHandler(async (event) => {
  const imageId = getRouterParam(event, 'imageId')
  const size = getRouterParam(event, 'size')

  if (!imageId || !IMAGE_ID_PATTERN.test(imageId) || !size || !isImageSize(size)) {
    throw createError({ status: 404, statusText: 'Image not found' })
  }

  try {
    const image = await aicFetch(`/${imageId}/full/${IMAGE_SIZE[size]},/0/default.jpg`, {
      baseURL: IIIF_BASE_URL,
      responseType: 'blob',
    })

    if (!image.type.startsWith('image/')) throw new Error('Not an image')

    setResponseHeader(
      event,
      'Cache-Control',
      `public, max-age=${ONE_YEAR}, s-maxage=${ONE_YEAR}, immutable`,
    )
    return image
  } catch {
    throw createError({ status: 502, statusText: 'Image unavailable' })
  }
})
