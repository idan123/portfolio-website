"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bell, CalendarCheck, Wallet, Clock } from "lucide-react";

const benefits = [
  { key: "offers", icon: Bell },
  { key: "choose", icon: CalendarCheck },
  { key: "paid", icon: Wallet },
  { key: "flexible", icon: Clock },
] as const;

export default function ForBartenders() {
  const t = useTranslations("forBartenders");

  return (
    <section id="for-bartenders" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.key}
              className="bg-surface border border-border rounded-xl p-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <b.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t(`benefits.${b.key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`benefits.${b.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
