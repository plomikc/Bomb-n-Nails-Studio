"use client";

import PackageCard from "@/components/PackageCard";
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
        <div className="bn-packages">
          <div className="bn-grid">
            {siteConfig.packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={{
                  id: pkg.id,
                  name: pkg.name,
                  description: pkg.description,
                  includes: [...pkg.includes],
                  duration: pkg.duration,
                  price: pkg.price,
                  image: pkg.image,
                }}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
