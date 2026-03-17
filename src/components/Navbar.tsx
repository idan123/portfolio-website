"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === "he" ? "en" : "he";
    router.replace(pathname, { locale: next });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">
          Job<span className="text-accent">Tap</span>
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLocale}
            className="text-xs text-muted hover:text-foreground transition-colors"
          >
            {locale === "he" ? "EN" : "HE"}
          </button>
        </div>
      </div>
    </nav>
  );
}
