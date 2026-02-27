import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const SONGS_DIR = path.join(process.cwd(), "content", "songs");
const SERVICES_DIR = path.join(process.cwd(), "content", "services");

export type Song = {
  slug: string;
  title: string;
  html: string;
};

export type Service = {
  title: string;
  date?: string;
  items: Array<{ type: "song"; slug: string; title?: string }>;
};

export function getSongSlugs(): string[] {
  return fs
    .readdirSync(SONGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getSongBySlug(slug: string): Promise<Song> {
  const fullPath = path.join(SONGS_DIR, `${slug}.md`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: String(data.title ?? slug),
    html: htmlContent,
  };
}

export function getService(name: string): Service {
  const fullPath = path.join(SERVICES_DIR, `${name}.json`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw) as Service;
}