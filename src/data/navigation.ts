export interface NavItem {
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Highlights" },
  // { href: "#testimonials", label: "Reviews" },

  // { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  // { href: "#hire", label: "Hire Me" },
];

export const footerQuickLinks: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Our Services" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Highlights" },
  // { href: "#testimonials", label: "Client Reviews" },
  // { href: "#pricing", label: "Pricing Plans" },
  // { href: "#hire", label: "Hire Me" },
  { href: "#blog", label: "Blog" },
];
