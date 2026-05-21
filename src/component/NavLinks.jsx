'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children, className }) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`
        ${className}
        ${isActive ? "border-b-2 border-blue-700 text-blue-700" : ""}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
