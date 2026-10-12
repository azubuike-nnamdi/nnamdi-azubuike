import Image from 'next/image'

export default function Portrait() {
  return (
    <div className="art">
      <div className="blob" />
      <div className="pic">
        <Image
          src="/img/portrait.jpg"
          alt="Portrait of Nnamdi Azubuike"
          fill
          priority
          sizes="(max-width: 640px) 280px, 360px"
        />
      </div>
    </div>
  )
}
