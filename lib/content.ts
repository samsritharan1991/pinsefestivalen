import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const SONGS_DIR = path.join(process.cwd(), "content", "songs");
const TEXTS_DIR = path.join(process.cwd(), "content", "texts");
const SERVICES_DIR = path.join(process.cwd(), "content", "services");

export type Song = {
  slug: string;
  title: string;
  titleTranslation?: string;
  html: string;
  author?: string;
  singers?: string;
};

function parseSongTitle(
  raw: string,
  data: Record<string, unknown>
): { title: string; titleTranslation?: string } {
  const explicit = data.titleTranslation ?? data.title_no;
  if (explicit) {
    const parenMatch = raw.match(/^(.+?)\s+\([^)]+\)\s*$/);
    return {
      title: parenMatch ? parenMatch[1].trim() : raw,
      titleTranslation: String(explicit),
    };
  }

  const slashMatch = raw.match(/^(.+?)\s+\/\s+(.+?)(?:\s+\((\d+)\))?\s*$/);
  if (slashMatch) {
    return {
      title: slashMatch[1].trim(),
      titleTranslation: slashMatch[2].trim(),
    };
  }

  const parenMatch = raw.match(/^(.+?)\s+\(([^)]+)\)\s*$/);
  if (parenMatch && !/^\d+$/.test(parenMatch[2].trim())) {
    return {
      title: parenMatch[1].trim(),
      titleTranslation: parenMatch[2].trim(),
    };
  }

  return { title: raw };
}

export type ServiceItem =
  | { type: "song"; slug: string; title?: string; titleTranslation?: string; singers?: string; icon?: string }
  | { type: "heading"; slug: string; title: string; icon?: string }
  | { type: "text"; slug: string; content: string; description?: string; vippsNumber?: string; icon?: string }
  | { type: "list"; slug: string; items: string[]; icon?: string };

export type Service = {
  title: string;
  date?: string;
  items: ServiceItem[];
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

  const rawTitle = String(data.title ?? slug);
  const { title, titleTranslation } = parseSongTitle(rawTitle, data);

  return {
    slug,
    title,
    titleTranslation,
    html: htmlContent,
    author: data.author ? String(data.author) : undefined,
    singers: data.singers ? String(data.singers) : undefined,
  };
}

export async function getTextContentBySlug(slug: string): Promise<string> {
  const fullPath = path.join(TEXTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return "";

  const file = fs.readFileSync(fullPath, "utf8");
  const processed = await remark().use(html).process(file);
  return processed.toString();
}

export function getService(name: string): Service {
  const fullPath = path.join(SERVICES_DIR, `${name}.json`);
  const raw = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(raw) as Service;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getServiceItemSlugs(serviceName: string = "today"): string[] {
  const service = getService(serviceName);
  return service.items.map((item) => item.slug);
}

export async function getServiceItemBySlug(slug: string, serviceName: string = "today"): Promise<ServiceItem> {
  const service = getService(serviceName);
  const item = service.items.find((i) => i.slug === slug);
  if (!item) throw new Error(`Item with slug "${slug}" not found`);
  return item;
}