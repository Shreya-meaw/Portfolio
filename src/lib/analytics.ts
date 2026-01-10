import ReactGA from 'react-ga4';

/**
 * Google Analytics Configuration
 * 
 * To enable tracking:
 * 1. Go to https://analytics.google.com/
 * 2. Create a GA4 property (or use existing one)
 * 3. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Replace the MEASUREMENT_ID below with your actual ID
 * 5. Deploy your site - tracking will work automatically!
 * 
 * What's being tracked:
 * - Page views (automatic on route changes)
 * - Hire Me form submissions
 * - Contact form submissions  
 * - Project clicks (GitHub & Demo links)
 * - Social media link clicks
 * - Project filter changes
 * - Resume downloads
 */
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = (path: string, title: string) => {
  ReactGA.send({ hitType: 'pageview', page: path, title });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

// Conversion tracking events
export const trackHireMeSubmit = () => {
  logEvent('Conversion', 'hire_me_form_submit', 'Hire Me Form');
};

export const trackContactSubmit = () => {
  logEvent('Conversion', 'contact_form_submit', 'Contact Form');
};

export const trackProjectClick = (projectName: string) => {
  logEvent('Engagement', 'project_click', projectName);
};

export const trackBlogClick = (blogTitle: string) => {
  logEvent('Engagement', 'blog_click', blogTitle);
};

export const trackSocialClick = (platform: string) => {
  logEvent('Engagement', 'social_click', platform);
};

export const trackDownloadResume = () => {
  logEvent('Conversion', 'resume_download', 'Resume Download');
};

export const trackFilterChange = (filterType: string) => {
  logEvent('Engagement', 'project_filter', filterType);
};
