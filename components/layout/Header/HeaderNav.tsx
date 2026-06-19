import Link from "next/link";
import { navigationItems, whatsappLink } from "@/data/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type HeaderNavProps = {
  mobile?: boolean;
  onLinkClick?: () => void;
};

export function HeaderNav({ mobile = false, onLinkClick }: HeaderNavProps) {
  if (mobile) {
    return (
      <nav className="flex flex-1 flex-col px-6 py-10">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onLinkClick}
            className="rounded-lg px-2 py-4 text-lg font-semibold text-emerald-900 transition-colors hover:bg-emerald-950/5 hover:text-rose-600 text-[15px]"
          >
            {item.label}
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
          className="inline-flex items-center px-1.5 py-1 text-[15px] font-semibold cursor-pointer group"
        >
          <span className="text-emerald-950 transition-colors hover:text-rose-600">
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
