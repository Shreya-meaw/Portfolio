import { Github, Linkedin, Mail, Phone, Instagram } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { 
    icon: Github, 
    href: "https://github.com/Shreya-meaw", 
    label: "Visit GitHub Profile" 
  },
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/shreya-singh-a14868303/", 
    label: "Visit LinkedIn Profile" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/shreyasinghofficial.827/", 
    label: "Visit Instagram Profile" 
  },
  { 
    icon: Mail, 
    href: "mailto:shreyasingh7297@gmail.com", 
    label: "Email Shreya Singh" 
  },
  { 
    icon: Phone, 
    href: "https://wa.me/8279948895", 
    label: "Chat on WhatsApp" 
  },
];
