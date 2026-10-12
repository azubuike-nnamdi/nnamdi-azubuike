'use server'

import { createTailoredPage } from '@/lib/cms'

export type TailorFormState = {
  url?: string
  error?: string
}

export async function saveTailoredPage(
  _previous: TailorFormState,
  formData: globalThis.FormData,
): Promise<TailorFormState> {
  const jobTitle = String(formData.get('jobTitle') ?? '').trim()
  const description = String(formData.get('description') ?? '').trim()

  if (jobTitle.length < 2) {
    return { error: 'Add the job title from the post.' }
  }

  if (description.length < 40) {
    return { error: 'Paste enough of the description to match existing work.' }
  }

  const page = await createTailoredPage({ jobTitle, description })
  return { url: `/for/${page.slug}` }
}
