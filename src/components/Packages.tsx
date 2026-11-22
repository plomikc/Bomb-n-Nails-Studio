"use client";

import { siteConfig } from "@/config/site";

type PackagesProps = {
  onSelectPackage: (packageId: string) => void;
};

export default function Packages({ onSelectPackage }: PackagesProps) {
  const handleSelect = (packageId: string) => {
    onSelectPackage(packageId);
    const booking = document.getElementById("citas");
    if (booking) {
      booking.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="paquetes" className="bg-background px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Paquetes</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            Elige el servicio ideal para consentir tus manos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteConfig.packages.map((pkg) => (
            <article
              key={pkg.id}
              className="flex h-full flex-col rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                <p className="mt-1 text-sm font-medium text-mauve">{pkg.duration}</p>
              </div>
              <ul className="mb-6 flex-1 space-y-2 text-sm text-foreground sm:text-base">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-5 text-2xl font-semibold text-foreground">{pkg.price}</p>
              <button
                type="button"
                onClick={() => handleSelect(pkg.id)}
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-mauve px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:text-base"
              >
                {pkg.ctaLabel}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
