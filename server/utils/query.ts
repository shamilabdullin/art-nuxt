export function parsePositiveInt(
  name: string,
  value: unknown,
  fallback: number,
  max = Infinity,
): number {
  if (value === '' || typeof value === 'undefined') return fallback

  const number = Number(value)
  if (number < 1 || number > max || !Number.isInteger(number)) {
    throw createError({ status: 400, statusText: `Invalid ${name} expected a positive integer` })
  }

  return number
}

export const POSITIVE_INT_ID = /^[1-9]\d*$/
