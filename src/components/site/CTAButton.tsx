import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackBeginCheckout, trackClickCTA } from "@/lib/analytics";

type Props = {
  children?: React.ReactNode;
  location: string;
  className?: string;
  size?: "md" | "lg" | "xl";
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
  xl: "h-16 px-8 text-base sm:text-lg",
};

export function CTAButton({
  children = "QUERO MEU SITE AGORA",
  location,
  className,
  size = "lg",
}: Props) {
  return (
    <Link
      to="/checkout"
      onClick={() => {
        trackClickCTA(location);
        trackBeginCheckout();
      }}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide text-primary-foreground gradient-brand",
        "shadow-[0_18px_45px_-18px_var(--brand)] transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-18px_var(--brand)] active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        sizes[size],
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
