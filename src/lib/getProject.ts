import { projects } from '@/data/projects';

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}
