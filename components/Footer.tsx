export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          <span className="font-semibold text-brand">Parwaaz</span>: helping Pakistani women take flight.
        </p>
        <a
          href="https://github.com/zoyaahmedd/parwaaz"
          className="transition-colors hover:text-brand"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </footer>
  );
}
