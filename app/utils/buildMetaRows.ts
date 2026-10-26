export interface MetaRow {
  label: string
  value: string
}

export function buildMetaRows(artwork: ArtworkDetails): MetaRow[] {
  const candidates: [string, string | null][] = [
    ['Автор', artwork.artist_display],
    ['Дата создания', artwork.date_display],
    ['Место создания', artwork.place_of_origin],
    ['Материал/техника', artwork.medium_display],
    ['Размеры', artwork.dimensions],
    ['Стиль', artwork.style_title],
    ['Классификация', artwork.classification_title],
    ['Отдел музея', artwork.department_title],
    ['Источник поступления', artwork.credit_line],
  ]

  return candidates
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([label, value]) => ({ label, value }))
}
