
import React, { useState } from "react";
import { navData } from "@/constants/index";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <>
      {navData.map(({ _id, title, href }) => (
        <Link
          key={_id}
          href={href}
          className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-base text-gray-700 transition-colors"
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                className="absolute inset-0 rounded-lg bg-gray-100"
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
