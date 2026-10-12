'use client'

import { noteTypeLabel, noteTypes, tidyNoteText } from '@/lib/writing'
import type { Article } from '@/lib/definitions'
import Link from 'next/link'
import { useMemo, useState, type ReactNode } from 'react'

type WritingIndexProps = {
  items: Article[]
  eyebrow: string
  title: string
  dek: string
  aside?: ReactNode
  empty: string
}

function formatNoteDate(value?: string) {
  if (!value) return ''
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function readMinutes(value?: string) {
  const minutes = value?.trim()
  if (!minutes) return ''
  return /min/i.test(minutes) ? minutes : `${minutes} min`
}

export default function WritingIndex({
  items,
  eyebrow,
  title,
  dek,
  aside,
  empty,
}: WritingIndexProps) {
  const [query, setQuery] = useState('')
  const [type, setType] = useState('all')

  const presentTypes = useMemo(() => {
    const found = new Set(items.map((item) => item.noteType || 'technical'))
    return noteTypes.filter((option) => found.has(option.value))
  }, [items])

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return items.filter((item) => {
      const itemType = item.noteType || 'technical'
      if (type !== 'all' && itemType !== type) return false
      if (!needle) return true
      const haystack = [item.title, item.desc, item.summary, noteTypeLabel(itemType)]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
      return haystack.includes(needle)
    })
  }, [items, query, type])

  return (
    <div className="fade-up">
      <p className="kicker">{eyebrow}</p>
      <h1 className="page-title mt-3">{title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">{dek}</p>
      {aside ? <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{aside}</p> : null}

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="filter-row" style={{ margin: 0 }}>
          <FilterButton active={type === 'all'} onClick={() => setType('all')}>
            All
          </FilterButton>
          {presentTypes.map((option) => (
            <FilterButton
              key={option.value}
              active={type === option.value}
              onClick={() => setType(option.value)}
            >
              {option.label}
            </FilterButton>
          ))}
        </div>
        <label className="block w-full border-b border-border sm:max-w-xs">
          <span className="sr-only">Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      {items.length === 0 ? (
        <p className="mt-10 max-w-xl text-muted-foreground">{empty}</p>
      ) : visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">Nothing matches that search.</p>
      ) : (
        <div className="note-grid">
          {visible.map((item) => {
            const href = item.href || item.uri || '#'
            const isExternal = item.kind !== 'full'
            const date = formatNoteDate(item.publishedAt || item.date)
            const minutes = readMinutes(item.readTime)

            return (
              <Link
                key={item.id}
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="card"
              >
                <p className="k">{item.noteTypeLabel || noteTypeLabel(item.noteType)}</p>
                <h2>{tidyNoteText(item.title)}</h2>
                {item.desc || item.summary ? (
                  <p className="line-clamp-3">{tidyNoteText(item.desc || item.summary || '')}</p>
                ) : null}
                {date || minutes ? (
                  <p>
                    {[date, minutes].filter(Boolean).join(' · ')}
                  </p>
                ) : null}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={active ? 'on' : undefined}
    >
      {children}
    </button>
  )
}
