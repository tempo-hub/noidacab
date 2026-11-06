import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center bg-slate-50 px-4 py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
          Error 404
        </p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          We couldn&apos;t find a page or route matching that URL.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
        >
          Return to homepage
        </Link>
      </div>
    </main>
  );
}
