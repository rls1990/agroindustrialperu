import { HeaderBrand } from "./HeaderBrand";
import { HeaderNav } from "./HeaderNav";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
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
        className="absolute right-0 top-0 flex h-full w-[min(92vw,340px)] flex-col overflow-y-auto bg-[#f7f6ef]"
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
          <HeaderBrand />
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-emerald-950"
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <HeaderNav mobile onLinkClick={onClose} />
      </aside>
    </div>
  );
}
