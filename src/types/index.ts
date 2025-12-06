export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href?: string;
  dropdown?: NavSubLink[];
}
