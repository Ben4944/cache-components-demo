import { cacheLife } from "next/cache";
import { notFound } from "next/navigation";

export interface Page {
  title: string;
  content: string;
}

const PAGES: Record<string, Page> = {
  "test-1": {
    title: "Test 1",
    content: "This is the content of test 1",
  },
  "test-2": {
    title: "Test 2",
    content: "This is the content of test 2",
  },
  "test-3": {
    title: "Test 3",
    content: "This is the content of test 3",
  },
  "test-4": {
    title: "Test 4",
    content: "This is the content of test 4",
  },
};

export async function getPagesForPrerender() {
  return Object.keys(PAGES).slice(0, 2);
}

export async function getPageBySlug(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const page = PAGES[slug];

  if (!page) {
    notFound();
  }

  return page;
}

export async function getPageBySlugCached(slug: string) {
  "use cache";
  cacheLife("days");

  const page = await getPageBySlug(slug);
  return page;
}
