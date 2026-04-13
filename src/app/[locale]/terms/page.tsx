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

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          {isHe ? "תנאי שימוש — JobTap" : "Terms of Service — JobTap"}
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p>
            {isHe ? "עדכון אחרון: אפריל 2026" : "Last updated: April 2026"}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "1. אודות" : "1. About"}
          </h2>
          <p>
            {isHe
              ? "JobTap היא פלטפורמה לחיבור בין עסקים לצוותי אירועים דרך WhatsApp. השימוש בשירות מהווה הסכמה לתנאים אלה."
              : "JobTap is a platform for connecting businesses with event staff through WhatsApp. By using our service, you agree to these terms."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "2. כשירות" : "2. Eligibility"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "משתמשים חייבים להיות בני 18 ומעלה." : "Users must be 18 years or older."}</li>
            <li>{isHe ? "עסקים חייבים להחזיק רישום עסק ישראלי תקף (ח.פ)." : "Businesses must hold a valid Israeli business registration (ח.פ)."}</li>
            <li>{isHe ? "צוותי אירועים חייבים להחזיק מספר עוסק ישראלי תקף לצורך קבלת תשלומים." : "Event staff must hold a valid Israeli osek number to receive payments."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "3. איך זה עובד" : "3. How It Works"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>{isHe ? "עסקים" : "Businesses"}</strong>{" "}
              {isHe
                ? "מפרסמים בקשות משמרת. הפלטפורמה מתאימה אותם לצוותי אירועים זמינים."
                : "post shift requests. The platform matches them with available event staff."}
            </li>
            <li>
              <strong>{isHe ? "צוותי אירועים" : "Event staff"}</strong>{" "}
              {isHe
                ? "נרשמים, מקבלים הצעות משמרת ומאשרים משמרות."
                : "register, receive shift offers, and confirm shifts."}
            </li>
            <li>
              {isHe
                ? "תשלומים מעובדים דרך ספק תשלומים צד שלישי. פרטי כרטיס אשראי לעולם אינם מאוחסנים על ידי JobTap."
                : "Payments are processed through a third-party payment provider. Credit card data is never stored by JobTap."}
            </li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "4. תשלומים" : "4. Payments"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "צוותי אירועים מקבלים 100% מהתעריף המפורסם. ללא עמלות או ניכויים." : "Event staff receive 100% of the posted rate. No fees or deductions."}</li>
            <li>{isHe ? "עסקים משלמים את התעריף המפורסם בתוספת עמלת פלטפורמה (12% + מע\"מ על העמלה)." : "Businesses pay the posted rate plus a platform fee (12% + VAT on the fee)."}</li>
            <li>{isHe ? "תשלומים מוחזקים באמצעות הרשאה עד להשלמת המשמרת ואימותה." : "Payments are held via authorization until the shift is completed and verified."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "5. ביטולים" : "5. Cancellations"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "ביטולים מעל 12 שעות לפני המשמרת הם ללא עלות לשני הצדדים." : "Cancellations more than 12 hours before the shift are free for both parties."}</li>
            <li>{isHe ? "ביטולים מאוחרים עלולים לגרום לחיובים חלקיים או הגבלות זמניות." : "Late cancellations may result in partial charges or temporary restrictions."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "6. אימות מיקום" : "6. Location Verification"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "צוותי אירועים מתבקשים לשתף את מיקומם בתחילת ובסוף כל משמרת לצורך אימות נוכחות." : "Event staff are asked to share their location at the start and end of each shift for attendance verification."}</li>
            <li>{isHe ? "שיתוף המיקום נעשה דרך WhatsApp." : "Location sharing is done through WhatsApp."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "7. התנהגות משתמשים" : "7. User Conduct"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "משתמשים חייבים לספק מידע מדויק." : "Users must provide accurate information."}</li>
            <li>{isHe ? "שימוש לרעה, הונאה או אי-הגעות חוזרות עלולים לגרום להגבלת החשבון." : "Misuse, fraud, or repeated no-shows may result in account restrictions."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "8. אחריות" : "8. Liability"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>{isHe ? "JobTap מתווכת בין עסקים לצוותי אירועים. אנו לא צד להסכם העבודה." : "JobTap facilitates the connection between businesses and event staff. We are not a party to the work arrangement."}</li>
            <li>{isHe ? "JobTap אינה אחראית לאיכות העבודה, נזקים או סכסוכים בין הצדדים." : "JobTap is not liable for the quality of work, damages, or disputes between parties."}</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "9. פרטיות" : "9. Privacy"}
          </h2>
          <p>
            {isHe ? (
              <>ראו את <a href={`/${locale}/privacy`} className="text-accent hover:underline">מדיניות הפרטיות</a> שלנו לפרטים על איסוף מידע והגנה עליו.</>
            ) : (
              <>See our <a href={`/${locale}/privacy`} className="text-accent hover:underline">Privacy Policy</a> for details on data collection and protection.</>
            )}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "10. שינויים" : "10. Changes"}
          </h2>
          <p>
            {isHe
              ? "אנו עשויים לעדכן תנאים אלה מעת לעת. המשך השימוש בשירות מהווה הסכמה."
              : "We may update these terms from time to time. Continued use of the service constitutes acceptance."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "11. יצירת קשר" : "11. Contact"}
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
