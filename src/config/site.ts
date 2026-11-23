export const siteConfig = {
  name: "Bombón Nails Studio",
  description: "Estudio de manicura y uñas con un estilo dulce y delicado.",
  schedule: "Lunes a sábado: 09:00 – 15:00",
  navItems: [
    { label: "Inicio", href: "#inicio" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Paquetes", href: "#paquetes" },
    { label: "Citas", href: "#citas" },
    { label: "Quiénes somos", href: "#quienes-somos" },
    { label: "Horario", href: "#horario" },
  ],
  hero: {
    title: "Bombón Nails Studio",
    subtitle:
      "Realza tu estilo con manicuras delicadas, diseños únicos y un cuidado lleno de amor.",
    ctaLabel: "Agendar cita",
  },
  catalog: {
    title: "Catálogo",
    description: "Explora algunos de nuestros estilos favoritos.",
    examples: [
      {
        title: "French Soft Pink",
        collection: "Clásicos",
        price: "Desde $---",
        image: "/catalog/french-soft-pink.svg",
      },
      {
        title: "Glitter Mauve",
        collection: "Brillos",
        price: "Desde $---",
        image: "/catalog/glitter-mauve.svg",
      },
      {
        title: "Rose Petal",
        collection: "Románticos",
        price: "Desde $---",
        image: "/catalog/rose-petal.svg",
      },
      {
        title: "Blush Minimal",
        collection: "Minimal",
        price: "Desde $---",
        image: "/catalog/blush-minimal.svg",
      },
    ],
    more: {
      href: "https://instagram.com/",
      collection: "Catálogo completo",
      title: "Ver más diseños",
      note: "Síguenos en Instagram",
    },
  },
  packages: [
    {
      id: "basico",
      name: "Básico",
      description: "Un cuidado esencial para lucir uñas limpias y delicadas.",
      duration: "1 hora",
      includes: ["Gelish", "Limpieza"],
      price: "$---",
      image: "/packages/basico.jpg",
      ctaLabel: "Elegir este paquete",
    },
    {
      id: "estandar",
      name: "Estándar",
      description: "El equilibrio perfecto entre cuidado, color y diseño.",
      duration: "2 horas",
      includes: ["Gelish", "Limpieza", "Diseño"],
      price: "$---",
      image: "/packages/estandar.jpg",
      ctaLabel: "Elegir este paquete",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Una experiencia completa para consentir tus manos al máximo.",
      duration: "3 horas",
      includes: ["Gelish", "Limpieza", "Diseño", "Manicure"],
      price: "$---",
      image: "/packages/premium.jpg",
      ctaLabel: "Elegir este paquete",
    },
  ],
  booking: {
    title: "Citas",
    description:
      "Completa el formulario para solicitar tu cita. Nos pondremos en contacto contigo para confirmar.",
  },
  about: {
    title: "Quiénes somos",
    text:
      "En Bombón Nails Studio creemos que cada detalle cuenta. Creamos un espacio acogedor donde puedes consentirte, relajarte y lucir unas uñas hermosas que reflejen tu personalidad.",
  },
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
    { label: "Facebook", href: "https://facebook.com/", icon: "facebook" },
    { label: "TikTok", href: "https://tiktok.com/", icon: "tiktok" },
    { label: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
