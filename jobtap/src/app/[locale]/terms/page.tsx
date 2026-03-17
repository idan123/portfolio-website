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
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24">
        <a
          href={`/${locale}`}
          className="text-sm text-accent hover:underline mb-8 inline-block"
        >
          {isHe ? "← חזרה לדף הבית" : "← Back to Home"}
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          {isHe ? "תנאי שימוש" : "Terms of Service"}
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p>
            {isHe
              ? "עדכון אחרון: מרץ 2026"
              : "Last updated: March 2026"}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "1. קבלת התנאים" : "1. Acceptance of Terms"}
          </h2>
          <p>
            {isHe
              ? "בשימוש בשירות JobTap, אתם מסכימים לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אנא אל תשתמשו בשירות."
              : "By using the JobTap service, you agree to these terms of service. If you do not agree to these terms, please do not use the service."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "2. תיאור השירות" : "2. Service Description"}
          </h2>
          <p>
            {isHe
              ? "JobTap מספק פלטפורמה לחיבור בין עסקים הזקוקים לברמנים לבין ברמנים מקצועיים המחפשים הזדמנויות עבודה."
              : "JobTap provides a platform connecting businesses in need of bartenders with professional bartenders seeking work opportunities."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "3. תשלומים" : "3. Payments"}
          </h2>
          <p>
            {isHe
              ? "JobTap עשויה לגבות עמלות שירות כפי שיפורט מעת לעת."
              : "JobTap may charge service fees as detailed from time to time."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "4. אחריות המשתמש" : "4. User Responsibilities"}
          </h2>
          <p>
            {isHe
              ? "המשתמשים אחראים לספק מידע מדויק ועדכני."
              : "Users are responsible for providing accurate and current information."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "5. הגבלת אחריות" : "5. Limitation of Liability"}
          </h2>
          <p>
            {isHe
              ? "JobTap משמש כפלטפורמת חיבור בלבד. איננו צד ישיר להסכמי העבודה בין עסקים לברמנים. השירות מסופק \"כמו שהוא\" ללא אחריות מפורשת או משתמעת."
              : "JobTap serves as a connection platform only. We are not a direct party to employment agreements between businesses and bartenders. The service is provided \"as is\" without express or implied warranties."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "6. ביטול והפסקת שירות" : "6. Cancellation and Termination"}
          </h2>
          <p>
            {isHe
              ? "המשתמש רשאי להפסיק את השימוש בשירות בכל עת. JobTap שומרת לעצמה את הזכות להשעות או לבטל חשבון שמפר את תנאי השימוש."
              : "Users may stop using the service at any time. JobTap reserves the right to suspend or terminate accounts that violate these terms of service."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "7. שינויים בתנאים" : "7. Changes to Terms"}
          </h2>
          <p>
            {isHe
              ? "JobTap רשאית לעדכן תנאים אלה מעת לעת. המשך השימוש מהווה הסכמה לתנאים המעודכנים."
              : "JobTap may update these terms from time to time. Continued use constitutes agreement to the updated terms."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "8. דין חל" : "8. Governing Law"}
          </h2>
          <p>
            {isHe
              ? "תנאי שימוש אלה כפופים לדיני מדינת ישראל."
              : "These terms of service are governed by the laws of the State of Israel."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "יצירת קשר" : "Contact"}
          </h2>
          <p>contact@jobtap.co.il</p>
        </div>
      </div>
    </div>
  );
}
