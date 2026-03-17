"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Brief() {
  const t = useTranslations("brief");

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          className="space-y-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg text-foreground">{t("line1")}</p>
          <p className="text-base sm:text-lg text-muted">{t("line2")}</p>
          <p className="text-xs text-muted/60 pt-4">{t("line3")}</p>
        </motion.div>
      </div>
    </section>
  );
}
