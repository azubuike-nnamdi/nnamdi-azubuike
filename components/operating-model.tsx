import { scope } from '@/lib/positioning'

export default function OperatingModel() {
  return (
    <section>
      <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">The portfolio</h2>
      <ul className="mt-8 border-t border-foreground/80">
        {scope.map((item) => (
          <li
            key={item.domain}
            className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-8"
          >
            <span className="font-display text-xl text-foreground">{item.domain}</span>
            <span className="text-sm leading-6 text-muted-foreground sm:text-base">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
