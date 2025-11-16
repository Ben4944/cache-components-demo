"use cache";

import { cacheLife } from "next/cache";
import { getPageBySlugCached } from "@/data/pages";
import { DynamicPage } from "@/components/dynamic-page";

export default async function CachedDataPage(props: PageProps<"/cached-data/[slug]">) {
  cacheLife("days");

  const { slug, page } = await getPageBySlugCached(
    props.params.then((p) => p.slug)
  );

  return <DynamicPage slug={slug} page={page} />;
}
