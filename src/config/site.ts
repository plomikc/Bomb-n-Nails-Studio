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
        description:
          "Un acabado clásico y elegante con tonos rosados suaves para cualquier ocasión.",
        image: "/catalog/french-soft-pink.svg",
      },
      {
        title: "Glitter Mauve",
        description:
          "Brillo delicado con detalles en tono mauve para un look femenino y moderno.",
        image: "/catalog/glitter-mauve.svg",
      },
    ],
  },
  packages: [
    {
      id: "basico",
      name: "Básico",
      duration: "1 hora",
      includes: ["Gelish", "Limpieza"],
      price: "$---",
      ctaLabel: "Elegir este paquete",
    },
    {
      id: "estandar",
      name: "Estándar",
      duration: "2 horas",
      includes: ["Gelish", "Limpieza", "Diseño"],
      price: "$---",
      ctaLabel: "Elegir este paquete",
    },
    {
      id: "premium",
      name: "Premium",
      duration: "3 horas",
      includes: ["Gelish", "Limpieza", "Diseño", "Manicure"],
      price: "$---",
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
