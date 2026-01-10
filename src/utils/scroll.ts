/**
 * Scroll to a section with proper offset for fixed header
 * @param href - The section ID (e.g., "#about")
 * @param headerOffset - Offset in pixels for fixed header (default: 80)
 */
export const scrollToSection = (href: string, headerOffset: number = 80): void => {
  const element = document.querySelector(href);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Handle navigation click with route support
 * @param e - Click event
 * @param href - Target section ID
 * @param pathname - Current pathname
 * @param navigate - Navigate function from react-router
 */
export const handleSectionNavigation = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
  href: string,
  pathname: string,
  navigate: (path: string) => void
): void => {
  e.preventDefault();
  
  if (pathname !== '/') {
    navigate('/');
    setTimeout(() => {
      scrollToSection(href);
    }, 150);
  } else {
    scrollToSection(href);
  }
};
