import { PortfolioData } from "@/data";
import Link from "next/link";

export default function Page() {
  return (

    <main className="grid md:grid-cols-2 bg-black md:gap-4 md:p-0 p-6">
      <div className="md:overflow-y-hidden md:p-16">
        <p className="text-[#D3BD44] font-extrabold md:text-[50px] text-3xl leading-none ">
          Hi, I&apos;m Nnamdi.
        </p>
        <div className="flex md:gap-5 gap-2  md:text-sm text-[10px] text-gray-400 my-2">
          <p className="underline">Software Engineer</p>
          <p className="underline">Community Preacher</p>
          <p className="underline">Writer</p>
        </div>
        <p className="my-8 text-gray-400">
          I&apos;m a proficient and forward-thinking software engineer,
          specializing in pioneering innovative products and solutions,
          particularly within the frontend ecosystem.
        </p>
        <p className="my-8 text-gray-400">
          In addition to my technical expertise, I devote time to documenting my
          learning journey by researching and crafting articles on frontend
          technologies. You can find my insights shared on platforms such as
          Hashnode, as well as my experiences on Medium.
        </p>
        <div>
          <div className="flex gap-6 text-gray-400 md:pt-12">
            {PortfolioData.map((portfolio) => (
              <div key={portfolio.id} className="">
                <Link
                  href={portfolio.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {portfolio.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:h-screen md:w-5/6 md:overflow-y-auto no-scrollbar scrollBar md:pt-14 pt-6">
        {/* <FeatureProject />
    <Articles /> */}
        {/* <FeatureProject />
        <FeatureProject /> */}
      </div>
    </main>
  );
}