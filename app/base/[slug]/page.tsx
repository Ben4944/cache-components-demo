import { getPageBySlug } from "@/data/pages";
import { DynamicPage } from "@/components/dynamic-page";

export default async function BasePage(props: PageProps<"/base/[slug]">) {
  const { slug } = await props.params;

  const page = await getPageBySlug(slug);

  return <DynamicPage slug={slug} page={page} />;
}
