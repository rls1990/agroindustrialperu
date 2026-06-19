type HeaderMobileButtonProps = {
  onOpen: () => void;
  isOpen: boolean;
};

export function HeaderMobileButton({
  onOpen,
  isOpen,
}: HeaderMobileButtonProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-950/10 bg-white text-emerald-800 md:hidden hover:bg-gray-200 cursor-pointer"
      aria-label="Abrir menú"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <span className="flex flex-col gap-1.5">
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
        <span className="block h-0.5 w-5 rounded-full bg-current" />
      </span>
    </button>
  );
}
