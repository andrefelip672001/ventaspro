import {
  Battery,
  Box,
  Car,
  CircleDot,
  Cog,
  DollarSign,
  Filter,
  Package,
  Plus,
  ShoppingCart,
  Waves,
  Wallet,
  Zap,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

const iconos: Record<string, ComponentType<LucideProps>> = {
  disc: CircleDot,
  cog: Cog,
  waves: Waves,
  zap: Zap,
  filter: Filter,
  car: Car,
  package: Package,
  plus: Plus,
  battery: Battery,
  box: Box,
  cart: ShoppingCart,
  dollar: DollarSign,
  wallet: Wallet,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = iconos[name] ?? Package;
  return <Cmp {...props} />;
}
