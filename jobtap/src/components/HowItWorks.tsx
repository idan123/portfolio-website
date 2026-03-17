"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, Handshake, CreditCard } from "lucide-react";

const steps = [
  { key: "step1", icon: Send },
  { key: "step2", icon: Handshake },
  { key: "step3", icon: CreditCard },
] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              className="relative bg-surface border border-border rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-6">
                <step.icon size={24} />
              </div>
              <div className="absolute top-4 end-4 text-6xl font-bold text-border">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {t(`${step.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
