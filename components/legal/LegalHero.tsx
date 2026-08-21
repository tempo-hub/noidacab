import {
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

type Props = {
  title: string;
  description: string;
  type?: "about" | "terms" | "privacy";
};

const icons = {
  about: ShieldCheck,
  terms: FileText,
  privacy: LockKeyhole,
};

export default function LegalHero({
  title,
  description,
  type = "about",
}: Props) {
  const Icon = icons[type];

  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253, 166, 15, 0.2),transparent_35%)]" />

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-500 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
            <Icon className="h-4 w-4" />
            NoidaCab
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}