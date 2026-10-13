import { responsibilities } from '@/lib/positioning'

export default function PracticeAreas() {
  return (
    <section>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        What the role is for
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {responsibilities.map((item) => (
          <li key={item.title} className="border border-border bg-card px-5 py-5">
            <h3 className="font-display text-2xl font-medium">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
