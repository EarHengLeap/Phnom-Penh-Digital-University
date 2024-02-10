"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { Button, buttonVariants } from "./ui/button";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { navData } from "@/constants";

const MobileNavLinks: React.FC<React.ComponentProps<typeof Popover.Button>> = ({
  children,
  ...props
}) => {
  const Component = props.as || "button";

  return (
    <Popover.Button
      as={Component}
      {...props}
      className={`block text-base leading-7 tracking-tight text-gray-700 ${
        props.className || ""
      }`}
    >
      {children}
    </Popover.Button>
  );
};

const Header = () => {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8 items-center">
          {/* Logo */}
          <div className="z-10 flex items-center gap-16">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="hidden lg:flex lg:gap-10 items-center">
            <NavLinks />
          </div>
          {/* Button */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard" passHref>
              {" "}
              {/* ! important here need to check here later */}
              <Button className="hidden lg:block">Login</Button>
            </Link>
            <Link href="/dashboard" passHref>
              {" "}
              {/* ! important here need to check here later */}
              <Button variant="outline" className="hidden lg:block">
                Register
              </Button>
            </Link>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {open ? (
                      <IoIosArrowUp className="text-2xl" />
                    ) : (
                      <TbMenu2 className="text-2xl" />
                    )}
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="
                            fixed
                            inset-0
                            z-0 
                            bg-gray-300/60
                            backdrop::blur
                          "
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLinks key={_id}>{title}</MobileNavLinks>
                            ))}
                          </div>

                          <div className="mt-8 flex flex-col gap-4">
                            <Link href="/dashboard" className={buttonVariants()}>
                              Login
                            </Link>

                            <Link href="/dashboard" className={buttonVariants({variant: "outline"})}>
                              
                            </Link>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
