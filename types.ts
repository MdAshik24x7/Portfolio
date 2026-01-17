import { LucideIcon } from 'lucide-react';

export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  description?: string;
}

export interface Profile {
  name: string;
  dob: string;
  address: string;
  batch: string;
  bio: string;
  email: string;
}

export interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}