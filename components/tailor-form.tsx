'use client'

import { saveTailoredPage, type TailorFormState } from '@/app/(frontend)/(root)/tailor/actions'
import Link from 'next/link'
import { useActionState } from 'react'

const initialState: TailorFormState = {}

export default function TailorForm() {
  const [state, action, pending] = useActionState(saveTailoredPage, initialState)

  return (
    <form action={action} className="mt-10 max-w-2xl space-y-6">
      <label className="block space-y-2">
        <span className="kicker">Job title</span>
        <input
          name="jobTitle"
          required
          minLength={2}
          maxLength={80}
          className="w-full border border-foreground/30 bg-transparent px-3 py-2 text-base outline-none focus:border-foreground"
        />
      </label>
      <label className="block space-y-2">
        <span className="kicker">Job description</span>
        <textarea
          name="description"
          required
          minLength={40}
          rows={12}
          className="w-full border border-foreground/30 bg-transparent px-3 py-2 text-base leading-7 outline-none focus:border-foreground"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="btn btn-o disabled:opacity-50"
      >
        {pending ? 'Preparing the page…' : 'Prepare a page'}
      </button>
      {state.error ? <p className="text-sm text-muted-foreground">{state.error}</p> : null}
      {state.url ? (
        <p className="text-sm">
          Share{' '}
          <Link href={state.url} className="underline underline-offset-4">
            {state.url}
          </Link>
        </p>
      ) : null}
    </form>
  )
}
