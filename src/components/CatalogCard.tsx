import Image from "next/image";

type CatalogCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CatalogCard({ title, description, image }: CatalogCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border/60 bg-white/70 shadow-sm">
      <div className="relative aspect-[4/3] w-full bg-surface-light">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
