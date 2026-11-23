"use client";

import { FormEvent } from "react";
import { PopButton } from "@/components/ui/pop-button";
import { siteConfig } from "@/config/site";

type BookingProps = {
  selectedPackage: string;
  onPackageChange: (packageId: string) => void;
};

export default function Booking({ selectedPackage, onPackageChange }: BookingProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section id="citas" className="bg-surface px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{siteConfig.booking.title}</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {siteConfig.booking.description}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-foreground">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                placeholder="Tu teléfono"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="paquete" className="mb-2 block text-sm font-medium text-foreground">
                Paquete
              </label>
              <select
                id="paquete"
                name="paquete"
                value={selectedPackage}
                onChange={(e) => onPackageChange(e.target.value)}
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecciona un paquete</option>
                {siteConfig.packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} ({pkg.duration})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="fecha" className="mb-2 block text-sm font-medium text-foreground">
                Fecha
              </label>
              <input
                id="fecha"
                name="fecha"
                type="date"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="hora" className="mb-2 block text-sm font-medium text-foreground">
                Hora
              </label>
              <input
                id="hora"
                name="hora"
                type="time"
                className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <PopButton type="submit" className="mt-8 mb-2 w-full">
            Enviar solicitud
          </PopButton>
          <p className="mt-3 text-center text-sm text-muted-foreground">
            Formulario de ejemplo, sin funcionalidad por ahora.
          </p>
        </form>
      </div>
    </section>
  );
}
