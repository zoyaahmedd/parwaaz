import Link from "next/link";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#opportunities", label: "Opportunities" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-brand">Parwaaz</span>
          <span className="font-urdu text-sm text-muted" lang="ur" dir="rtl">
            پرواز
          </span>
        </Link>

        {/* Section links: hidden on small phones to keep the bar clean */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brand">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#get-started"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}
