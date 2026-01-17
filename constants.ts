import { 
  Gamepad2, 
  PenTool, 
  Music, 
  Monitor, 
  Terminal, 
  Youtube, 
  MessageSquare, 
  Facebook,
  Layout,
  Code,
  Clapperboard,
  Layers,
  Image as ImageIcon,
  Frame,
  Sparkles,
  Scissors
} from 'lucide-react';
import { Profile, SkillCategory, Interest, SkillItem } from './types';

export const PROFILE: Profile = {
  name: "Md. Ashiqul Islam Ashik",
  dob: "12 October 2007",
  address: "Kazi Para Rd, Dhaka 1219, Bangladesh",
  batch: "BD HSC 27 Batch",
  bio: "A versatile student of BD HSC 27 Batch with a passion for creative digital media, system optimization, and technology. Bridging the gap between artistic vision and technical execution.",
  email: "mdashik24x7@gmail.com"
};

export const CREATIVE_CONCEPTS: SkillItem[] = [
  { name: "Video Editing", level: 85, icon: Scissors },
  { name: "Photo Editing", level: 60, icon: ImageIcon },
  { name: "UX/UI Design", level: 60, icon: Layout },
];

export const CREATIVE_SOFTWARE: SkillItem[] = [
  { name: "Premiere Pro", level: 85, icon: Clapperboard },
  { name: "Photoshop", level: 70, icon: Layers },
  { name: "Figma", level: 70, icon: Frame },
  { name: "Illustrator", level: 50, icon: PenTool },
  { name: "After Effects", level: 40, icon: Sparkles },
];

// Based on Bangladesh HSC 2025-2026 Curriculum standards
// HSC ICT typically covers HTML structure, basic styling, and C programming fundamentals (loops, arrays, functions).
export const TECHNICAL_SKILLS: SkillCategory = {
  title: "Programming & Tech",
  skills: [
    { name: "MS Office", level: 100, icon: Monitor },
    { name: "HTML", level: 85, icon: Code }, // Estimated based on HSC curriculum mastery
    { name: "C Language", level: 75, icon: Terminal }, // Estimated based on HSC curriculum mastery
    { name: "Python", level: 20, icon: Terminal }, // Adjusted for visibility
    { name: "CSS", level: 15, icon: Code }, // Adjusted for visibility (Basics)
  ]
};

export const SYSTEM_SKILLS: string[] = [
  "System Optimization, Diagnostics & Security",
  "Any OS or Software Installation",
  "Kernel Management",
  "Hardware Troubleshooting"
];

export const SOCIAL_MANAGEMENT: SkillItem[] = [
  { name: "YouTube", level: 100, icon: Youtube },
  { name: "Discord", level: 100, icon: MessageSquare },
  { name: "Facebook", level: 70, icon: Facebook },
];

export const INTERESTS: Interest[] = [
  { name: "Gaming", icon: Gamepad2, description: "Competitive and immersive story-driven experiences." },
  { name: "Writing", icon: PenTool, description: "Expressing thoughts and tech reviews through text." },
  { name: "Music", icon: Music, description: "Finding rhythm in noise, enjoying diverse genres." },
];