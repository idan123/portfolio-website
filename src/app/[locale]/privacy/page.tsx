import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — JobTap",
};

export default async function PrivacyPage({
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
          {isHe ? "מדיניות פרטיות — JobTap" : "Privacy Policy — JobTap"}
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p>
            {isHe
              ? "עדכון אחרון: אפריל 2026"
              : "Last updated: April 2026"}
          </p>
          <p>
            {isHe
              ? "JobTap (\"אנחנו\", \"החברה\") מפעילה פלטפורמה לאיוש אירועים דרך WhatsApp. מדיניות זו מסבירה אילו נתונים אנו אוספים, מדוע, וכיצד אנו מגנים עליהם."
              : "JobTap (\"we\", \"the company\") operates a platform for event staffing through WhatsApp. This policy explains what data we collect, why, and how we protect it."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "מידע שאנו אוספים" : "Data We Collect"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>{isHe ? "זהות:" : "Identity:"}</strong>{" "}
              {isHe
                ? "שם מלא, מספר טלפון, תאריך לידה, עיר מגורים."
                : "Full name, phone number, date of birth, home city."}
            </li>
            <li>
              <strong>{isHe ? "פרטי עסק:" : "Business details:"}</strong>{" "}
              {isHe
                ? "מספר עוסק, שם עסק, מספר מזהה לצרכי מס."
                : "Osek number (Israeli business ID), business name, tax ID."}
            </li>
            <li>
              <strong>{isHe ? "פרטי חשבון בנק:" : "Bank account details:"}</strong>{" "}
              {isHe ? "לצורך העברות תשלום." : "For payment transfers."}
            </li>
            <li>
              <strong>{isHe ? "נתוני מיקום:" : "Location data:"}</strong>{" "}
              {isHe
                ? "צ'ק-אין וצ'ק-אאוט במהלך משמרות, לצורך אימות נוכחות."
                : "Check-in and check-out during shifts, for attendance verification."}
            </li>
            <li>
              <strong>{isHe ? "פרטי הזמנה:" : "Booking details:"}</strong>{" "}
              {isHe
                ? "תאריכים, שעות, כתובות, סכומים."
                : "Dates, times, addresses, amounts."}
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "מדוע אנו אוספים מידע" : "Why We Collect It"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "התאמת עסקים לצוותי אירועים." : "Matching businesses with event staff."}</li>
            <li>{isHe ? "עיבוד תשלומים והנפקת חשבוניות." : "Processing payments and issuing invoices."}</li>
            <li>{isHe ? "אימות נוכחות במשמרות." : "Verifying attendance at shifts."}</li>
            <li>{isHe ? "תקשורת עם משתמשים דרך WhatsApp." : "Communicating with users via WhatsApp."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "אחסון והגנה" : "Storage and Protection"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "כל המידע מאוחסן בשרתים באיחוד האירופי." : "All data stored on servers in the European Union."}</li>
            <li>{isHe ? "שדות רגישים (מספר עוסק, פרטי בנק, מספרי מס) מוצפנים." : "Sensitive fields (osek number, bank details, tax IDs) are encrypted."}</li>
            <li>{isHe ? "פרטי כרטיס אשראי לעולם אינם מאוחסנים בשרתים שלנו — תשלומים מעובדים דרך ספק תשלומים צד שלישי." : "Credit card data is never stored on our servers — payments are processed through a third-party payment provider."}</li>
            <li>{isHe ? "חיבורי מסד נתונים מוצפנים (SSL)." : "Database connections are encrypted (SSL)."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "שיתוף עם צדדים שלישיים" : "Third-Party Sharing"}
          </h2>
          <p>
            {isHe
              ? "אנו משתפים מידע רק עם ספקי שירות הנדרשים להפעלת הפלטפורמה:"
              : "We share data only with service providers required to operate the platform:"}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>{isHe ? "ספק תשלומים" : "Payment provider"}</strong>{" — "}
              {isHe ? "לעיבוד תשלומים והעברות בנקאיות." : "for processing payments and bank transfers."}
            </li>
            <li>
              <strong>{isHe ? "ספק חשבוניות" : "Invoicing provider"}</strong>{" — "}
              {isHe ? "להנפקת קבלות וחשבוניות." : "for generating receipts and invoices."}
            </li>
            <li>
              <strong>Meta (WhatsApp)</strong>{" — "}
              {isHe ? "לתקשורת עם משתמשים." : "for communicating with users."}
            </li>
          </ul>
          <p>
            {isHe
              ? "אנו לא מוכרים, משכירים או משתפים מידע אישי עם צדדים שלישיים למטרות שיווק."
              : "We do not sell, rent, or share personal data with third parties for marketing purposes."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "הזכויות שלך" : "Your Rights"}
          </h2>
          <p>
            {isHe
              ? "בהתאם לחוקי הפרטיות החלים, תוכלו לבקש:"
              : "Under applicable privacy law, you may request:"}
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "גישה למידע האישי שלך." : "Access to your personal data."}</li>
            <li>{isHe ? "תיקון מידע לא מדויק." : "Correction of inaccurate data."}</li>
            <li>{isHe ? "מחיקת המידע שלך." : "Deletion of your data."}</li>
          </ul>
          <p>
            {isHe ? "יצירת קשר:" : "Contact:"} support@jobtap.co.il
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "עדכוני מדיניות" : "Policy Updates"}
          </h2>
          <p>
            {isHe
              ? "אנו עשויים לעדכן מדיניות זו מעת לעת. שינויים מהותיים יועברו בהודעה דרך WhatsApp."
              : "We may update this policy from time to time. Material changes will be communicated via WhatsApp."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "יצירת קשר" : "Contact"}
          </h2>
          <p>
            JOBTAP CONNECT LTD
            <br />
            support@jobtap.co.il
          </p>
        </div>
      </div>
    </div>
  );
}
