import { getCollection, getEntries, type CollectionEntry } from 'astro:content';

export const SHOW_DRAFTS = import.meta.env.DEV;

export async function services() {
  return (await getCollection('services')).sort((a, b) => a.data.order - b.data.order);
}

export async function projects() {
  return (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
}

/** Published articles, newest first. Drafts appear only in development. */
export async function articles() {
  return (await getCollection('insights', (a) => SHOW_DRAFTS || !a.data.draft)).sort(
    (a, b) => b.data.published.getTime() - a.data.published.getTime(),
  );
}

export async function articlesFor(match: (a: CollectionEntry<'insights'>) => boolean) {
  return (await articles()).filter(match);
}

export { getEntries };
