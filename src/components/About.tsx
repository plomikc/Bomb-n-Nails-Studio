import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="quienes-somos" className="bg-background px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">{siteConfig.about.title}</h2>
        <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
          {siteConfig.about.text}
        </p>
      </div>
    </section>
  );
}
