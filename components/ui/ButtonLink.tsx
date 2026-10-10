import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1AA7A1] focus-visible:ring-offset-2";

  const styles = {
    primary:
      "bg-[#1AA7A1] text-white hover:-translate-y-0.5 hover:bg-[#158C87]",
    secondary:
      "border border-current bg-transparent hover:-translate-y-0.5 hover:bg-white/10",
    text: "px-0 hover:text-[#1AA7A1]",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
      <ArrowUpRight aria-hidden="true" size={17} />
    </Link>
  );
}
