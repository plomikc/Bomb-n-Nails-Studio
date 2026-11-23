import CatalogCarousel from "@/components/CatalogCarousel";
import { siteConfig } from "@/config/site";

export default function Catalog() {
  const items = siteConfig.catalog.examples.map((item, index) => ({
    id: String(index),
    collection: item.collection,
    title: item.title,
    price: item.price,
  }));

  return (
    <section
      id="catalogo"
      className="relative isolate overflow-hidden bg-surface px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">{siteConfig.catalog.title}</h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {siteConfig.catalog.description}
          </p>
        </div>
        <CatalogCarousel items={items} more={siteConfig.catalog.more} />
      </div>
    </section>
  );
}
