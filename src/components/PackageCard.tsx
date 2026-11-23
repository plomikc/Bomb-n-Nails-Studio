"use client";

import { useEffect, useRef, useState } from "react";

export type PackageCardData = {
  id: string;
  name: string;
  description: string;
  includes: string[];
  duration: string;
  price: string;
  image?: string;
};

type Props = {
  pkg: PackageCardData;
  onSelect?: (id: string) => void;
};

function ArrowUpRight() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Placeholder() {
  return (
    <div className="bn-placeholder" aria-hidden="true">
      <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#B18597" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <rect x="25" y="4" width="14" height="17" rx="3" fill="#FFF0F0" />
        <rect x="28" y="21" width="8" height="6" fill="#FFF0F0" />
        <rect x="15" y="27" width="34" height="31" rx="9" fill="#F9C4D2" />
        <path d="M23 36v8" />
      </svg>
    </div>
  );
}

export default function PackageCard({ pkg, onSelect }: Props) {
  const [imgFailed, setImgFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setImgFailed(true);
  }, [pkg.image]);

  const showImage = Boolean(pkg.image) && !imgFailed;

  return (
    <div className="bn-card">
      <div className="bn-card-inner">
        <div className="bn-box">
          <div className="bn-imgBox">
            {showImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img ref={imgRef} src={pkg.image} alt={`Paquete ${pkg.name}`} onError={() => setImgFailed(true)} />
            ) : (
              <Placeholder />
            )}
          </div>
          <div className="bn-icon">
            <a href="#citas" className="bn-iconBox" aria-label={`Elegir paquete ${pkg.name}`} onClick={() => onSelect?.(pkg.id)}>
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </div>
      <div className="bn-content">
        <h3>{pkg.name}</h3>
        <p>{pkg.description}</p>
        <ul>
          {pkg.includes.map((item, i) => (
            <li key={item} className={`bn-tag-${(i % 3) + 1}`}>{item}</li>
          ))}
        </ul>
        <div className="bn-meta">
          <span>{pkg.duration}</span>
          <strong>{pkg.price}</strong>
        </div>
      </div>
    </div>
  );
}
