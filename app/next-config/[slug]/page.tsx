"use cache";

import { cacheLife } from "next/cache";
import { getPageBySlug } from "@/data/pages";
import { DynamicPage } from "@/components/dynamic-page";

export default async function CfgPage(props: PageProps<"/next-config/[slug]">) {
  cacheLife("days");

  const { slug } = await props.params;

  const page = await getPageBySlug(slug);

  return <DynamicPage slug={slug} page={page} />;
}
