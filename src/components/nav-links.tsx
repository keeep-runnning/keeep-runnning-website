"use client";

import { useEffect } from "react";
import { useMediaQuery, useToggle } from "usehooks-ts";
import NavLink from "./nav-link";
import CloseIcon from "./close-icon";
import HamburgerIcon from "./hamburger-icon";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Posts", path: "/posts" },
  { name: "Projects", path: "/projects" },
  { name: "Tags", path: "/tags" },
];

export default function NavLinks() {
  const [isOpen, toggle, setIsOpen] = useToggle(false);

  const isDesktopScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    if (isDesktopScreen) {
      setIsOpen(false);
    }
  }, [isDesktopScreen, setIsOpen]);

  return (
    <nav>
      {/* for mobile. */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={toggle}
          className="rounded bg-stone-100 p-3 text-stone-950 hover:bg-stone-200 dark:bg-stone-900 dark:text-stone-50 dark:hover:bg-stone-800"
        >
          {isOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <HamburgerIcon className="h-5 w-5" />
          )}
        </button>
        {isOpen ? (
          <div className="fixed inset-0 top-20 overflow-auto bg-stone-100 px-5 py-4 dark:bg-stone-900">
            <ul
              className="flex flex-col gap-y-4 font-bold"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <NavLink href={path}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* for desktop. */}
      <ul className="hidden md:flex md:gap-x-2 md:font-bold">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <NavLink href={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
