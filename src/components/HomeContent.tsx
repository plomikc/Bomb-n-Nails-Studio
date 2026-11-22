"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Packages from "@/components/Packages";
import Booking from "@/components/Booking";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function HomeContent() {
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <main>
      <Hero />
      <Catalog />
      <Packages onSelectPackage={setSelectedPackage} />
      <Booking
        selectedPackage={selectedPackage}
        onPackageChange={setSelectedPackage}
      />
      <About />
      <Footer />
    </main>
  );
}
