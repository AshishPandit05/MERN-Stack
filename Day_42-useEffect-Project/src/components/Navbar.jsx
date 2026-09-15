import { ShoppingCart } from "lucide-react";

export default function Navbar({ setIsCartOpen }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-1"
      >
        <a href="/" className="text-xl font-bold tracking-tight text-slate-900">
          Morden<span className="text-indigo-600">Style</span>
        </a>

        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
          <p
            onClick={() => {
              setIsCartOpen(false);
            }}
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Home
          </p>
          <p
            onClick={() => {
              setIsCartOpen(true);
            }}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart
          </p>
        </div>

        <a
          href="/login"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
