import CatalogCard from "@/components/CatalogCard";
import { siteConfig } from "@/config/site";

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-surface px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{siteConfig.catalog.title}</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {siteConfig.catalog.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.catalog.examples.map((item) => (
            <CatalogCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
