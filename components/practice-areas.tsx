import { responsibilities } from '@/lib/positioning'

export default function PracticeAreas() {
  return (
    <section>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
        What the role is for
      </h2>
      <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {responsibilities.map((item, index) => (
          <li key={item.title} className="border-t border-foreground/80 pt-4">
            <p className="text-xs tabular-nums text-muted-foreground">0{index + 1}</p>
            <h3 className="mt-3 font-display text-2xl font-medium">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
