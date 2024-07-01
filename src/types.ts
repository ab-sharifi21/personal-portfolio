export interface Socials {
  id: number;
  name: string;
  url: string;
  icon: any;
}

export interface ContactInfo {
  id: number;
  name: string;
  url: string;
  value: string;
  icon: any;
}

export interface ExperienceInfo {
  id: number;
  year: string | number;
  post: string;
  company: Company;
  bgColor: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  description: string;
}

export interface Company {
  name: string;
  url: string;
}
