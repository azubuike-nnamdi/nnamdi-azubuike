import Image from 'next/image'

export default function Portrait() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] justify-self-end max-[980px]:mx-auto max-[980px]:max-w-[440px]">
      <div className="absolute top-[16%] right-[8%] bottom-[6%] left-[14%] rounded-[48%_52%_46%_54%/56%_48%_52%_44%] bg-primary" />
      <div className="absolute top-[6%] right-[16%] bottom-[6%] left-[22%] overflow-hidden rounded-t-[200px] rounded-b-3xl border-[3px] border-[#111] bg-[#f4f1ec]">
        <Image
          src="/img/profile.jpg"
          alt="Portrait of Nnamdi Azubuike"
          fill
          priority
          sizes="(max-width: 640px) 280px, 360px"
          className="object-cover object-[center_18%]"
        />
      </div>
    </div>
  )
}
