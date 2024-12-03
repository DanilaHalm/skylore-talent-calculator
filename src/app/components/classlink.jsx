'use client'
 
import { usePathname } from "next/navigation";
import Link from "next/link";

const ClassLink = async ({ class_link }) => {
  const pathname = usePathname()
  const isActive = pathname === `/${class_link.toLowerCase()}` ? "active_class" : ""
 
  return (
    <div className={`w-14 h-14 ${class_link}-bg isActive border-2 bg-cover bg-no-repeat bg-center rounded-full`}>
      <Link className="w-14 h-14 block rounded-full" href={`/${class_link.toLowerCase()}`}>
        
        
      </Link>
    </div>
  );
};

export default ClassLink;
