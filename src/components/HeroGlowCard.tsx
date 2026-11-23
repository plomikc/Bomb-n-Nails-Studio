import Image from "next/image";
import styles from "./HeroGlowCard.module.css";

export default function HeroGlowCard() {
  return (
    <div className={styles.card}>
      <span className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <Image
          src="/hero/hero-placeholder.svg"
          alt="Diseño destacado de Bombón Nails Studio"
          width={400}
          height={500}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}
