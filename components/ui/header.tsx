"use client";

import { motion } from 'framer-motion';
import Link from "next/link";

const Header = () => {

  return (
    <header className=" bg-background flex justify-between items-center  p-4 fixed top-0 left-0 right-0 z-10 bg-opacity-70 md:px-28 md:py-12 ">
      <Link href={"/"} className="cursor-pointer">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="dark:text-[#D3BD44] text-black text-3xl  leading-none font-caveat"
        >
          Nnamdi A.
        </motion.p>
      </Link>
      <div className="flex items-center gap-4">
        {/* <nav className="md:grid grid-cols-3 md:gap-6 gap-3 cursor-pointer">
          {NavData.map((nav) => (
            <AnimatedLink
              key={nav.id}
              href={nav.href}
              isActive={pathname === nav.href}
              className="ml-3 md:ml-0 font-dancing-script"
            >
              {nav.name}
            </AnimatedLink>
          ))}
        </nav> */}
        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

export default Header;
