import type { Metadata } from "next";
import { InsightsIndex, PageShell, pageMetadata } from "@/components/page-views";
import { articles } from "@/lib/pages";

const title = "Insights — growth systems, automation and lead generation";
const lead = "Short, practical articles on growth systems, automation and lead generation for companies in Saudi Arabia and the UAE, with documented figures and stated limits.";

export const metadata: Metadata = pageMetadata("en", "/insights", {
  title,
  description: lead,
  eyebrow: "Insights",
  answer: lead,
  blocks: [],
});

export default function Page() {
  return (
    <PageShell lang="en" switchPath="/insights">
      <InsightsIndex lang="en" items={articles} title={title} lead={lead} />
    </PageShell>
  );
}
