import { PopButton } from "@/components/ui/pop-button";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-background px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-mauve">
          Bienvenida
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          {siteConfig.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {siteConfig.hero.subtitle}
        </p>
        <div className="mt-10">
          <a href="#citas" className="inline-block">
            <PopButton type="button" className="mb-6 min-w-[220px]">
              {siteConfig.hero.ctaLabel}
            </PopButton>
          </a>
        </div>
      </div>
    </section>
  );
}
