import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لتطبيق تقارير Google Search Console وموقع emadmstfa.com.",
  alternates: {
    canonical: "/ar/privacy",
    languages: { "en-US": "/privacy", ar: "/ar/privacy" },
  },
};

const sections = [
  {
    title: "المعلومات التي نصل إليها",
    body: "عند تفويض تطبيق Emad Search Console Reporting، يستخدم التطبيق صلاحية القراءة فقط في Google Search Console للوصول إلى المواقع المتاحة لحسابك وبيانات أدائها، مثل النقرات ومرات الظهور والتواريخ وعبارات البحث والصفحات والدول والأجهزة. لا يستطيع التطبيق تعديل مواقع Search Console أو بياناتها.",
  },
  {
    title: "كيفية استخدام المعلومات",
    body: "تُستخدم المعلومات التي جرى الوصول إليها فقط لإعداد تقارير خاصة عن أداء البحث والتحليلات وأعمال الرصد المرتبطة بها بناءً على طلب المستخدم المفوَّض. ولا تُستخدم للإعلانات أو إنشاء ملفات تعريف أو لأي أغراض غير مرتبطة بالخدمة.",
  },
  {
    title: "التخزين والأمان",
    body: "تُخزَّن بيانات اعتماد OAuth والتقارير المُنشأة في أنظمة مقيّدة الوصول، وتُستخدم إجراءات تقنية وتنظيمية معقولة لحمايتها. ومع ذلك، لا توجد وسيلة تخزين إلكترونية تضمن الأمان المطلق.",
  },
  {
    title: "مشاركة البيانات وبيعها",
    body: "لا تُباع بيانات مستخدمي Google. ولا تُشارك مع أطراف ثالثة إلا مع مزوّدي الخدمات اللازمين لتشغيل التطبيق، أو بناءً على توجيه المستخدم، أو عندما يفرض القانون ذلك. ولا يجوز لمزوّدي الخدمة معالجة البيانات إلا لتقديم الخدمة المطلوبة، مع التزامات مناسبة بالسرية والأمان.",
  },
  {
    title: "الاحتفاظ والحذف",
    body: "يُحتفظ ببيانات اعتماد OAuth والتقارير فقط للمدة اللازمة لتقديم خدمة التقارير أو الوفاء بالالتزامات القانونية. يمكنك طلب حذف بيانات الاعتماد والتقارير المخزنة في أي وقت عبر البريد الإلكتروني أدناه، وتتم معالجة الطلب خلال مدة معقولة.",
  },
  {
    title: "خياراتك",
    body: "يمكنك إلغاء وصول التطبيق في أي وقت من إعدادات أمان حساب Google. يؤدي إلغاء الوصول إلى إيقاف الاسترجاع المستقبلي، لكنه لا يحذف تلقائيًا التقارير التي أُنشئت سابقًا؛ تواصل معنا لطلب حذفها.",
  },
  {
    title: "سياسة بيانات مستخدمي خدمات Google API",
    body: "يتوافق استخدام التطبيق للمعلومات الواردة من واجهات Google API ونقلها مع سياسة بيانات مستخدمي خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود.",
  },
];

export default function ArabicPrivacyPage() {
  return (
    <>
      <header className="border-b border-cream/10 bg-ink/90">
        <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
          <Link href="/ar" className="flex items-center gap-3">
            <Image src="/mark.svg" alt="عماد عبدالله المصطفى" width={36} height={36} className="h-9 w-9" unoptimized />
            <span className="text-sm font-semibold text-cream">عماد عبدالله المصطفى</span>
          </Link>
          <Link href="/privacy" className="rounded-full border border-cream/15 px-3.5 py-2 text-xs font-semibold text-cream/85 transition-colors hover:border-gold/40 hover:text-gold">
            English
          </Link>
        </div>
      </header>

      <main id="main-content" className="flex-1 py-16 md:py-24">
        <article className="shell max-w-4xl">
          <span className="chip"><span className="dot" /> الخصوصية</span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-cream md:text-5xl">سياسة الخصوصية</h1>
          <p className="mt-4 text-sm text-muted">تاريخ النفاذ: 5 أكتوبر 2026</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-cream/85">
            توضّح هذه السياسة كيفية تعامل عماد عبدالله المصطفى مع المعلومات من خلال موقع emadmstfa.com وتطبيق Emad Search Console Reporting.
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-cream">{section.title}</h2>
                <p className="mt-3 leading-8 text-muted">{section.body}</p>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold text-cream">التواصل</h2>
              <p className="mt-3 leading-8 text-muted">
                للأسئلة المتعلقة بالخصوصية أو طلبات الحذف، راسلنا عبر{" "}
                <a className="text-gold underline underline-offset-4" href="mailto:emadmstfa@gmail.com">emadmstfa@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-cream">تعديلات السياسة</h2>
              <p className="mt-3 leading-8 text-muted">قد تُحدَّث هذه السياسة عند تغير الخدمة أو المتطلبات القانونية، وسيُعدَّل تاريخ النفاذ أعلاه عند نشر تغييرات جوهرية.</p>
            </section>
          </div>
        </article>
      </main>

      <footer className="border-t border-cream/10 py-8">
        <div className="shell flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} عماد عبدالله المصطفى.</p>
          <Link href="/ar" className="transition-colors hover:text-gold">الرئيسية</Link>
        </div>
      </footer>
    </>
  );
}
