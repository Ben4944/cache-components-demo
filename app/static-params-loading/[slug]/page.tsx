"use cache";

import { cacheLife } from "next/cache";
import { getPageBySlug, getPagesForPrerender } from "@/data/pages";
import { DynamicPage } from "@/components/dynamic-page";

export async function generateStaticParams() {
  const pages = await getPagesForPrerender();
  return pages.map((slug) => ({ slug }));
}

export default async function StaticParamsLoadingPage(props: PageProps<"/static-params-loading/[slug]">) {
  cacheLife("days");

  const { slug } = await props.params;

  const page = await getPageBySlug(slug);

  return <DynamicPage slug={slug} page={page} />;
}
