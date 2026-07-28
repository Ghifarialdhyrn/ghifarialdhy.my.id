import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export const NAVIGATION = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Tech Stack",
    href: "#stack",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    title: "GitHub",
    href: "https://github.com/yourusername",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: FaLinkedin,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/yourusername",
    icon: FaInstagram,
  },
  {
    title: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
] as const;

export const STATS = [
  {
    title: "Years Experience",
    value: 3,
    suffix: "+",
  },
  {
    title: "Projects",
    value: 30,
    suffix: "+",
  },
  {
    title: "Clients",
    value: 15,
    suffix: "+",
  },
  {
    title: "Tech Stack",
    value: 20,
    suffix: "+",
  },
] as const;

export const CTA = {
  resume: "/CV.pdf",
  email: "mailto:your@email.com",
};

export const SITE_CONFIG = {
  name: "Ghifar",

  role: "Fullstack Web Developer",

  location: "Indonesia",

  description:
    "I build responsive web applications, booking systems, admin dashboards, and payment integrations with React.js, Next.js, and TypeScript. Focused on scalable frontend architecture, REST API integration, and shipping production-ready products on Vercel and Netlify.",

  email: "ghifar@email.com",

  github: "https://github.com/yourusername",

  linkedin: "https://linkedin.com/in/yourusername",

  instagram: "https://instagram.com/yourusername",

  resume: "/CV.pdf",

  copyright: `© ${new Date().getFullYear()} Ghifar. All rights reserved.`,
} as const;
