"use client";

import { useEffect, useState } from "react";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderMobileButton } from "./HeaderMobileButton";
import { HeaderNav } from "./HeaderNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f6ef]/95 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <HeaderBrand />
          <HeaderNav />
          <HeaderMobileButton onOpen={() => setIsOpen(true)} isOpen={isOpen} />
        </div>
      </header>

      {isOpen ? <MobileMenu onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
