import { Page } from "@/data/pages";

export function DynamicPage({ slug, page }: { slug: string; page: Page }) {
  return (
    <div>
      <h1>DynamicPage</h1>
      <p>Slug: {slug}</p>
      <p>Title: {page.title}</p>
      <p>Content: {page.content}</p>
    </div>
  );
}
