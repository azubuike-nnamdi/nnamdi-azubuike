const blob =
  'M198 16C262 2 308 58 316 128C326 214 286 286 214 322C148 356 62 348 28 286C-4 226 8 132 52 74C92 22 132 28 198 16Z'

export default function Portrait() {
  return (
    <svg
      viewBox="-12 -12 344 384"
      className="w-52 drop-shadow-[0_18px_28px_rgba(28,25,21,0.18)] sm:w-60 lg:w-full"
      role="img"
      aria-label="Portrait of Nnamdi Azubuike"
    >
      <defs>
        <clipPath id="portrait-blob">
          <path d={blob} />
        </clipPath>
      </defs>
      <image
        href="/img/portrait.jpg"
        x="-8"
        y="-64"
        width="336"
        height="460"
        clipPath="url(#portrait-blob)"
        preserveAspectRatio="xMidYMin slice"
      />
      <path d={blob} fill="none" stroke="#ffffff" strokeWidth="14" />
    </svg>
  )
}
