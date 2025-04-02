"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { NavData } from "@/data";
import { AnimatedLink } from "./animated-link";

const Header = () => {
  const pathname = usePathname();

  return (
    <main className="flex justify-between items-center md:p-8 p-4 fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-70">
      <Link href={"/"} className="cursor-pointer">
        <Image src="/nnamdi.svg" alt="logo" width={100} height={250} />
      </Link>
      <nav className="md:grid grid-cols-3 md:gap-6 gap-3 cursor-pointer">
        {NavData.map((nav) => (
          <AnimatedLink
            key={nav.id}
            href={nav.href}
            isActive={pathname === nav.href}
            className="ml-3 md:ml-0"
          >
            {nav.name}
          </AnimatedLink>
        ))}
      </nav>
    </main>
  );
};

export default Header;
