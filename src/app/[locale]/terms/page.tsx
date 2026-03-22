import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — JobTap",
};

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isHe = locale === "he";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center px-6">
        <a
          href={`/${locale}`}
          className="text-sm text-accent hover:underline mb-12 inline-block"
        >
          {isHe ? "← חזרה לדף הבית" : "← Back to Home"}
        </a>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {isHe ? "תנאי שימוש" : "Terms of Service"}
        </h1>
        <p className="text-muted text-base">
          {isHe ? "בקרוב." : "Coming soon."}
        </p>
      </div>
    </div>
  );
}
