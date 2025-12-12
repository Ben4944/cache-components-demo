"use cache";

import { cacheLife } from "next/cache";
import { getPageBySlugCached } from "@/data/pages";
import { DynamicPage } from "@/components/dynamic-page";

export default async function CachedDataPage(
  props: PageProps<"/cached-data/[slug]">
) {
  cacheLife("days");

  const params = await props.params;

  const page = await getPageBySlugCached(params.slug);

  return <DynamicPage slug={params.slug} page={page} />;
}
