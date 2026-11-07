import type { Metadata } from "next";
import { InsightsIndex, PageShell, pageMetadata } from "@/components/page-views";
import { articles } from "@/lib/pages";

const title = "المقالات — أنظمة النمو والأتمتة وتوليد العملاء";
const lead = "مقالات قصيرة وعملية عن أنظمة النمو والأتمتة وتوليد العملاء للشركات في السعودية والإمارات، بأرقام موثّقة وحدود واضحة.";

export const metadata: Metadata = pageMetadata("ar", "/insights", {
  title,
  description: lead,
  eyebrow: "Insights",
  answer: lead,
  blocks: [],
});

export default function Page() {
  return (
    <PageShell lang="ar" switchPath="/insights">
      <InsightsIndex lang="ar" items={articles} title={title} lead={lead} />
    </PageShell>
  );
}
