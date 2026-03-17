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

        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
          {isHe ? "מדיניות פרטיות" : "Privacy Policy"}
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted text-sm leading-relaxed">
          <p>
            {isHe
              ? "עדכון אחרון: מרץ 2026"
              : "Last updated: March 2026"}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "1. מידע שאנו אוספים" : "1. Information We Collect"}
          </h2>
          <p>
            {isHe
              ? "JobTap אוסף מידע שאתם מספקים ישירות בעת השימוש בשירות שלנו, כולל שם, מספר טלפון, ומידע מקצועי רלוונטי. אנו משתמשים במידע זה אך ורק לצורך חיבור בין עסקים לברמנים ועיבוד תשלומים."
              : "JobTap collects information you provide directly when using our service, including name, phone number, and relevant professional information. We use this information solely to connect businesses with bartenders and process payments."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "2. שימוש במידע" : "2. Use of Information"}
          </h2>
          <p>
            {isHe
              ? "אנו משתמשים במידע שנאסף כדי: לספק ולשפר את השירות שלנו, לעבד תשלומים, לתקשר אתכם בנוגע להזדמנויות עבודה, ולעמוד בדרישות החוק."
              : "We use collected information to: provide and improve our service, process payments, communicate with you about job opportunities, and comply with legal requirements."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "3. שיתוף מידע" : "3. Information Sharing"}
          </h2>
          <p>
            {isHe
              ? "אנו לא מוכרים את המידע האישי שלכם. אנו משתפים מידע רק כנדרש לספק את השירות (למשל, חיבור בין עסקים לברמנים) או כנדרש על פי חוק."
              : "We do not sell your personal information. We share information only as needed to provide the service (e.g., connecting businesses with bartenders) or as required by law."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "4. אבטחת מידע" : "4. Data Security"}
          </h2>
          <p>
            {isHe
              ? "אנו מיישמים אמצעי אבטחה סבירים כדי להגן על המידע האישי שלכם מפני גישה, שינוי או חשיפה בלתי מורשית."
              : "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure."}
          </p>

          <h2 className="text-lg font-semibold text-foreground">
            {isHe ? "5. יצירת קשר" : "5. Contact Us"}
          </h2>
          <p>
            {isHe
              ? "לשאלות בנוגע למדיניות הפרטיות שלנו, ניתן לפנות אלינו בכתובת: contact@jobtap.co.il"
              : "For questions about our privacy policy, please contact us at: contact@jobtap.co.il"}
          </p>
        </div>
      </div>
    </div>
  );
}
