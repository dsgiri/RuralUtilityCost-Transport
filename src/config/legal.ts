export const USE_LOCAL_PREVIEW = false; // Set to false to enforce canonical main domain URLs on subdomains

export const LEGAL_CONFIG = {
  about: USE_LOCAL_PREVIEW ? "/about" : "https://ruralutilitycost.com/about",
  portfolio: USE_LOCAL_PREVIEW ? "/portfolio" : "https://ruralutilitycost.com/portfolio",
  contact: USE_LOCAL_PREVIEW ? "/contact" : "https://ruralutilitycost.com/contact",
  privacyPolicy: USE_LOCAL_PREVIEW ? "/privacy-policy" : "https://ruralutilitycost.com/privacy-policy",
  termsOfUse: USE_LOCAL_PREVIEW ? "/terms-of-use" : "https://ruralutilitycost.com/terms-of-use",
  disclaimer: USE_LOCAL_PREVIEW ? "/disclaimer" : "https://ruralutilitycost.com/disclaimer",
};

export const FOOTER_LINKS = [
  { label: 'About Us', href: LEGAL_CONFIG.about },
  { label: 'Portfolio', href: LEGAL_CONFIG.portfolio },
  { label: 'Contact Us', href: LEGAL_CONFIG.contact },
  { label: 'Privacy Policy', href: LEGAL_CONFIG.privacyPolicy },
  { label: 'Terms of Use', href: LEGAL_CONFIG.termsOfUse },
  { label: 'Disclaimer', href: LEGAL_CONFIG.disclaimer },
];
