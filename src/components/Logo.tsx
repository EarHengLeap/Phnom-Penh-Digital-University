import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="Phnom Penh Digital University"
        className="cursor-pointer"
      />
    </Link>
  );
};

export default Logo;
