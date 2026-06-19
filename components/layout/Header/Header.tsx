"use client";

import { useEffect, useRef, useState } from "react";
import { HeaderBrand } from "./HeaderBrand";
import { HeaderMobileButton } from "./HeaderMobileButton";
import { HeaderNav } from "./HeaderNav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (openFrameRef.current) {
      window.cancelAnimationFrame(openFrameRef.current);
      openFrameRef.current = null;
    }

    setIsMounted(true);
    openFrameRef.current = window.requestAnimationFrame(() => {
      setIsOpen(true);
      openFrameRef.current = null;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      closeTimerRef.current = null;
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
      if (openFrameRef.current) {
        window.cancelAnimationFrame(openFrameRef.current);
        openFrameRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f6ef]/95 backdrop-blur">
        <div className="mx-auto flex h-22 w-full max-w-7xl items-center justify-between px-6 lg:px-0">
          <HeaderBrand />
          <HeaderNav />
          <HeaderMobileButton onOpen={openMenu} isOpen={isOpen} />
        </div>
      </header>

      {isMounted ? <MobileMenu isOpen={isOpen} onClose={closeMenu} /> : null}
    </>
  );
}
