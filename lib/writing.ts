/** Shared by Payload and the site so note types stay in one place. */

export const writingSections = [
  { label: 'Note', value: 'note' },
  { label: 'Insight', value: 'insight' },
] as const

export const noteTypes = [
  { label: 'Technical', value: 'technical' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Delivery', value: 'delivery' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Product', value: 'product' },
] as const

export type WritingSection = (typeof writingSections)[number]['value']
export type NoteType = (typeof noteTypes)[number]['value']

export function noteTypeLabel(value?: string | null): string {
  return noteTypes.find((type) => type.value === value)?.label ?? 'Technical'
}

export function writingSection(value?: string | null): WritingSection {
  return value === 'insight' ? 'insight' : 'note'
}

const noteTypeValues = new Set<string>(noteTypes.map((type) => type.value))

export function asNoteType(value?: string | null): NoteType {
  return value && noteTypeValues.has(value) ? (value as NoteType) : 'technical'
}

/** Close missing spaces after sentence punctuation and the "server - side" hyphen. */
export function tidyNoteText(value: string): string {
  return value
    .replace(/([.!?])(?=[A-Za-z])/g, '$1 ')
    .replace(/\bserver\s+-\s+side\b/gi, 'server-side')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}
