"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/lib/cn";

export default function NavLink({
  href,
  children,
}: React.ComponentProps<typeof Link>) {
  const currentPathname = usePathname();
  const isActive = currentPathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "block rounded bg-stone-100 p-3 text-stone-950 hover:bg-stone-200 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-800",
        isActive && "text-indigo-500 dark:text-indigo-500"
      )}
    >
      {children}
    </Link>
  );
}
