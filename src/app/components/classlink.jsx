"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const ClassLink = ({ class_link }) => {
  const pathname = usePathname();

  return (
    <div
      className={`w-14 h-14 ${class_link}-bg ${
        pathname === "/" + class_link.toLowerCase() + "?skills=0000" ? "" : "grayscale"
      } border-2 bg-cover bg-no-repeat bg-center rounded-full`}
    >
      <Link className="w-14 h-14 block rounded-full" href={`/${class_link.toLowerCase()}`}></Link>
    </div>
  );
};

export default ClassLink;
