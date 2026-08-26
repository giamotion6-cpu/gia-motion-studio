export interface NavigationItem {
  label: string;
  href: string;
}

export interface Service {
  number: string;
  slug: string;
  title: string;
  short: string;
  description: string;
  tags: readonly string[];
  image: string;
  video?: string;
  videoLabel?: string;
}

export interface FeaturedProject {
  number: string;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  accent: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  text: string;
}

export interface TrustedClient {
  name: string;
  logo?: string;
}

export interface TrustedClientsGroup {
  title: string;
  items: readonly TrustedClient[];
}

export interface LegacyProject {
  title: string;
  category: string;
  description: string;
  originalImageName: string;
}

export interface LegacyArticle {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  originalImageName: string;
  author: string;
}

export interface LegacyValue {
  title: string;
  description: string;
}

export interface LegacyTeamRole {
  role: string;
  description: string;
  originalImageName: string;
}
