import {
  BoxOpenIcon,
  CalendarDaysIcon,
  DropletIcon,
  LocationDotIcon,
  RulerCombinedIcon,
  SeedlingIcon,
} from "@/components/icons/ProductIcons";
import { Detail } from "@/data/products";

export function DetailIcon({
  icon,
  accent,
}: {
  icon: Detail["icon"];
  accent: string;
}) {
  const props = { className: "mt-1 h-4 w-4", color: accent };

  switch (icon) {
    case "location":
      return <LocationDotIcon {...props} />;
    case "calendar":
      return <CalendarDaysIcon {...props} />;
    case "seedling":
      return <SeedlingIcon {...props} />;
    case "ruler":
      return <RulerCombinedIcon {...props} />;
    case "droplet":
      return <DropletIcon {...props} />;
    case "box":
      return <BoxOpenIcon {...props} />;
    default:
      return null;
  }
}
