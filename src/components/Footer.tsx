"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
        <a
          href={`mailto:${t("email")}`}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          {t("email")}
        </a>

        <div className="flex items-center gap-4">
          <a
            href={`/${locale}/privacy`}
            className="text-xs text-muted/60 hover:text-foreground transition-colors"
          >
            {t("privacy")}
          </a>
          <a
            href={`/${locale}/terms`}
            className="text-xs text-muted/60 hover:text-foreground transition-colors"
          >
            {t("terms")}
          </a>
        </div>

        <span className="text-xs text-muted/40">{t("rights")}</span>
      </div>
    </footer>
  );
}
