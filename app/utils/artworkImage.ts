/** Адрес картинки через наш прокси (server/api/iiif) или null, если у картины нет изображения. */
export function getArtworkImageUrl(imageId: string | null, size: ImageSize): string | null {
  // если imageId нет → null, иначе `/api/iiif/${imageId}/${size}`
  if (!imageId) return null
  return `/api/iiif/${imageId}/${size}`
}
