"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";

export type CatalogItem = {
  id: string;
  collection: string;
  title: string;
  price: string;
  image?: string;
};

export type CatalogMore = {
  href: string;
  collection: string;
  title: string;
  note: string;
};

type Props = { items: CatalogItem[]; more?: CatalogMore };

type SlideEl = HTMLElement & { progress: number };

function Placeholder() {
  return (
    <svg className="co-card__shoe-img" viewBox="0 0 320 180" fill="none" aria-hidden="true">
      <rect x="40" y="40" width="170" height="100" rx="26" fill="#F9C4D2" stroke="#B18597" strokeWidth="4" />
      <rect x="62" y="64" width="80" height="52" rx="10" fill="#FFF0F0" opacity="0.8" />
      <path d="M210 64h26v52h-26z" fill="#FFF0F0" stroke="#B18597" strokeWidth="4" strokeLinejoin="round" />
      <rect x="236" y="44" width="62" height="92" rx="14" fill="#B18597" />
      <path d="M252 62v56" stroke="#FFF0F0" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg className="co-card__shoe-img" viewBox="0 0 320 180" fill="none" aria-hidden="true">
      <circle cx="160" cy="90" r="62" fill="#B18597" />
      <path
        d="M136 90h48M164 66l24 24-24 24"
        stroke="#FFF0F0"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export default function CatalogCarousel({ items, more }: Props) {
  const bgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const total = items.length + (more ? 1 : 0);
  const pad = (n: number) => String(n).padStart(2, "0");

  const handleProgress = (swiper: SwiperClass) => {
    swiper.slides.forEach((slideEl, index) => {
      const slide = slideEl as SlideEl;
      const progress = slide.progress;

      if (progress >= -1 && progress <= 1) {
        const rotateShoeMax = 15;
        const progressPositive = Math.abs(progress);

        const translateX = progress * -100;
        const rotateShoe = progressPositive * rotateShoeMax - rotateShoeMax;
        const textMaskY = progressPositive * 50;
        const scale = 1 - progressPositive * 0.2;
        const opacity = 0.5 - progressPositive * 0.5;

        const card = slide.querySelector<HTMLElement>(".co-card");
        const img = slide.querySelector<HTMLElement | SVGElement>(".co-card__shoe-img");
        const shadow = slide.querySelector<HTMLElement>(".co-card__shoe-shadow");

        if (card) card.style.transform = `scale(${scale})`;
        if (img) img.style.transform = `translate3d(${translateX}px, 0, 0) rotate(${rotateShoe}deg)`;
        if (shadow) shadow.style.transform = `translate3d(${translateX / 2}px, 0, 0)`;

        const bg = bgRefs.current[index];
        if (bg) bg.style.opacity = opacity.toFixed(2);

        slide.querySelectorAll<HTMLElement>(".co-text-mask span").forEach((t, i) => {
          t.style.transform = `translate3d(0, ${textMaskY * (i + 1)}px, 0)`;
        });
      }
    });
  };

  const handleSetTransition = (swiper: SwiperClass, speed: number) => {
    swiper.slides.forEach((slide, index) => {
      const card = slide.querySelector<HTMLElement>(".co-card");
      const img = slide.querySelector<HTMLElement | SVGElement>(".co-card__shoe-img");
      const shadow = slide.querySelector<HTMLElement>(".co-card__shoe-shadow");

      if (card) card.style.transition = `${speed}ms`;
      if (img) img.style.transition = `${speed}ms`;
      if (shadow) shadow.style.transition = `${speed}ms`;

      const bg = bgRefs.current[index];
      if (bg) bg.style.transition = `${speed}ms`;

      slide.querySelectorAll<HTMLElement>(".co-text-mask span").forEach((t) => {
        t.style.transition = `${speed}ms`;
      });
    });
  };

  const handleTouchEnd = (swiper: SwiperClass) => {
    const data = swiper.touchEventsData as unknown as { touchStartTime: number };
    const time = Date.now() - data.touchStartTime;
    const distance = Math.abs(swiper.touches.diff);
    const velocity = distance / time;
    const newSpeed = 1000 - velocity * 800;
    swiper.params.speed = Math.max(200, Math.min(1000, newSpeed));
  };

  const handleTransitionEnd = (swiper: SwiperClass) => {
    swiper.params.speed = 1000;
  };

  const external = more ? /^https?:/.test(more.href) : false;

  return (
    <>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={`bg-${i}`}
          ref={(el) => {
            bgRefs.current[i] = el;
          }}
          className={`co-background ${
            more && i === items.length ? "co-background--more" : `co-background--style-${i % 4}`
          }`}
          aria-hidden="true"
        />
      ))}

      <div className="co-carousel-wrap">
        <Swiper
          className="co-carousel"
          modules={[Navigation]}
          loop={false}
          watchSlidesProgress
          speed={1000}
          grabCursor
          navigation={{
            nextEl: ".co-nav__btn.next",
            prevEl: ".co-nav__btn.prev",
          }}
          onProgress={handleProgress}
          onSetTransition={handleSetTransition}
          onTouchEnd={handleTouchEnd}
          onTransitionEnd={handleTransitionEnd}
          onSlideChange={(s) => setActive(s.activeIndex)}
        >
          {items.map((item, i) => (
            <SwiperSlide key={item.id} className="co-carousel__slide">
              <div className={`co-card${i % 4 ? ` co-card--style-${i % 4}` : ""}`}>
                <div className="co-card__shoe">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img className="co-card__shoe-img" src={item.image} alt={item.title} />
                  ) : (
                    <Placeholder />
                  )}
                  <span className="co-card__shoe-shadow" />
                </div>
                <div className="co-card__info">
                  <div className="co-card__collection co-text-mask">
                    <span>{item.collection}</span>
                  </div>
                  <div className="co-card__title co-text-mask">
                    <span>{item.title}</span>
                  </div>
                  <div className="co-card__price co-text-mask">
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {more && (
            <SwiperSlide key="more" className="co-carousel__slide">
              <a
                className="co-card co-card--more"
                href={more.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div className="co-card__shoe">
                  <MoreIcon />
                </div>
                <div className="co-card__info">
                  <div className="co-card__collection co-text-mask">
                    <span>{more.collection}</span>
                  </div>
                  <div className="co-card__title co-text-mask">
                    <span>{more.title}</span>
                  </div>
                  <div className="co-card__price co-text-mask">
                    <span>{more.note}</span>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          )}
        </Swiper>

        <div className="co-nav">
          <button type="button" className="co-nav__btn prev" aria-label="Diseño anterior">
            <Chevron dir="left" />
          </button>
          <span className="co-nav__counter" aria-live="polite">
            {pad(active + 1)} / {pad(total)}
          </span>
          <button type="button" className="co-nav__btn next" aria-label="Diseño siguiente">
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </>
  );
}
