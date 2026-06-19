"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, whatsappLink } from "@/data/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type HeaderNavProps = {
  mobile?: boolean;
  onLinkClick?: () => void;
};

export function HeaderNav({ mobile = false, onLinkClick }: HeaderNavProps) {
  const [activeHash, setActiveHash] = useState("");

  const scrollToTarget = (hash: string) => {
    const target =
      hash === "#inicio" ? document.documentElement : document.querySelector(hash);

    if (!(target instanceof HTMLElement || target instanceof HTMLHtmlElement)) {
      return;
    }

    const headerOffset = 72;
    const startY = window.scrollY;
    const targetY =
      hash === "#inicio"
        ? 0
        : target.getBoundingClientRect().top + window.scrollY - headerOffset;
    const distance = targetY - startY;
    const duration = 700;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const headerOffset = 72;

    const updateActiveSection = () => {
      const currentPoint = window.scrollY + window.innerHeight * 0.35 + headerOffset;

      let currentSection = sections[0];

      for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (sectionTop <= currentPoint && currentPoint < sectionBottom) {
          currentSection = section;
          break;
        }

        if (sectionTop <= currentPoint) {
          currentSection = section;
        }
      }

      setActiveHash(`#${currentSection.id}`);
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  if (mobile) {
    return (
      <nav className="flex flex-1 flex-col px-6 py-7">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(event) => {
              event.preventDefault();
              setActiveHash(item.href);
              scrollToTarget(item.href);
              onLinkClick?.();
            }}
            className={`rounded-lg px-2 py-4 text-[15px] font-semibold transition-colors hover:bg-emerald-950/5 hover:text-rose-600`}
          >
            <span
              className={
                activeHash === item.href
                  ? "text-rose-600"
                  : "text-emerald-900"
              }
            >
              {item.label}
            </span>
          </Link>
        ))}

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
          <span className="text-white">WhatsApp</span>
        </Link>
      </nav>
    );
  }

  return (
    <nav className="hidden items-center gap-11 md:flex">
      {navigationItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          onClick={(event) => {
            event.preventDefault();
            setActiveHash(item.href);
            scrollToTarget(item.href);
          }}
          className={`inline-flex items-center px-1.5 py-1 text-[15px] font-semibold transition-colors cursor-pointer`}
        >
          <span
            className={
              activeHash === item.href
                ? "text-rose-600"
                : "text-emerald-950 hover:text-rose-600"
            }
          >
            {item.label}
          </span>
        </Link>
      ))}

      <Link
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-3 my-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0 text-white" />
        <span className="text-white">WhatsApp</span>
      </Link>
    </nav>
  );
}
