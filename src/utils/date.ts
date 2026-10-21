export function getYearFromDate(date: string): number {
  const year = date.trim().match(/^\d{4}/)?.[0]

  if (!year) {
    throw new RangeError(`Invalid CV date: "${date}"`)
  }

  return Number(year)
}
