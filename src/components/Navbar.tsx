"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { PopButton } from "@/components/ui/pop-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition hover:bg-surface-light"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[85vw] max-w-sm bg-background p-0">
            <SheetHeader className="border-b border-border/60 px-6 py-5">
              <SheetTitle className="text-left text-xl font-serif text-foreground">
                {siteConfig.name}
              </SheetTitle>
            </SheetHeader>
            <nav className="flex h-full flex-col px-6 py-6">
              <ul className="flex flex-1 flex-col gap-2">
                {siteConfig.navItems.map((item) => (
                  <li key={item.href}>
                    {item.label === "Horario" ? (
                      <div className="rounded-2xl px-4 py-3 text-base text-foreground">
                        <button
                          type="button"
                          onClick={() => handleNavigate(item.href)}
                          className="w-full text-left font-medium"
                        >
                          Horario
                        </button>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {siteConfig.schedule}
                        </p>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleNavigate(item.href)}
                        className="w-full rounded-2xl px-4 py-3 text-left text-base font-medium text-foreground transition hover:bg-surface-light"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border/60 pt-6">
                <PopButton
                  type="button"
                  className="mb-6 w-full"
                  onClick={() => handleNavigate("#citas")}
                >
                  Agendar cita
                </PopButton>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <a href="#inicio" className="font-serif text-lg font-semibold text-foreground sm:text-xl">
          {siteConfig.name}
        </a>
        <div className="h-10 w-10" aria-hidden="true" />
      </div>
    </header>
  );
}
