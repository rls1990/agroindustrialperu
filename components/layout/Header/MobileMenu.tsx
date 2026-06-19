import { HeaderBrand } from "./HeaderBrand";
import { HeaderNav } from "./HeaderNav";
import { X } from "lucide-react";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-60 md:hidden">
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <aside
        id="mobile-menu"
        className={`absolute right-0 top-0 flex h-full w-[min(92vw,340px)] flex-col overflow-y-auto bg-[#f7f6ef] shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
          <HeaderBrand fontSize="text-lg" />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[40px] text-emerald-950 cursor-pointer hover:bg-gray-200"
            aria-label="Cerrar menú"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <HeaderNav mobile onLinkClick={onClose} />
      </aside>
    </div>
  );
}
