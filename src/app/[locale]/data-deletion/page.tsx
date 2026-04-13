import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion — JobTap",
};

export default async function DataDeletionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const isHe = locale === "he";

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
        <a
          href={`/${locale}`}
          className="text-sm text-accent hover:underline mb-8 inline-block"
        >
          {isHe ? "← חזרה לדף הבית" : "← Back to Home"}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {isHe ? "מחיקת מידע — JobTap" : "Data Deletion — JobTap"}
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p>
            {isHe
              ? "לבקשת מחיקת המידע שלך, שלח הודעה אל:"
              : "To request deletion of your data, send a message to:"}
          </p>
          <p className="text-foreground font-semibold">support@jobtap.co.il</p>
          <p>
            {isHe
              ? "כלול את מספר הטלפון שלך ואנו נמחק את כל המידע האישי המשויך לחשבונך תוך 30 יום."
              : "Include your phone number and we will delete all personal data associated with your account within 30 days."}
          </p>
          <p>
            JOBTAP CONNECT LTD
          </p>
        </div>
      </div>
    </div>
  );
}
