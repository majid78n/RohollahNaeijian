import { getCollection } from "astro:content";

const byDateDesc = (a: Date, b: Date) => b.getTime() - a.getTime();

export async function getPublications() {
  const items = await getCollection("publications");
  return items.sort((a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title));
}

export async function getProjects() {
  const items = await getCollection("projects", ({ data }) => !data.draft);
  return items.sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || byDateDesc(a.data.date, b.data.date));
}

export async function getNews() {
  const items = await getCollection("news");
  return items.sort((a, b) => byDateDesc(a.data.date, b.data.date));
}

export async function getEducation() {
  const items = await getCollection("education");
  return items.sort((a, b) => byDateDesc(a.data.start, b.data.start));
}

export async function getExperience() {
  const items = await getCollection("experience");
  return items.sort((a, b) => byDateDesc(a.data.start, b.data.start));
}

export const formatMonth = (d: Date) =>
  d.toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" });
