"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, Heart } from "lucide-react";

const items = [
  { key: "marketplace", icon: Globe },
  { key: "builtin", icon: Heart },
] as const;

export default function WhyJobTap() {
  const t = useTranslations("whyJobTap");

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t("title")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              className="text-center sm:text-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t(`benefits.${item.key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t(`benefits.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
