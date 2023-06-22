import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-x-4 py-4 font-bold">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
