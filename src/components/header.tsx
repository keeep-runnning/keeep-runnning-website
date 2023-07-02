import NavLinks from "./nav-links";
import ThemeToggleButton from "./theme-toggle-button";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between bg-stone-100 dark:bg-stone-900">
      <NavLinks />
      <ThemeToggleButton />
    </header>
  );
}
