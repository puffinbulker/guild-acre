export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunnyyadav-guildacre/",
    ariaLabel: "Open Guild Acre on LinkedIn",
  },
  {
    label: "Google Business",
    href: "https://share.google/iSO6qOd79wlTebdV8",
    ariaLabel: "Open Guild Acre Google Business Profile",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/guildacre/",
    ariaLabel: "Open Guild Acre on Instagram",
  },
  {
    label: "WhatsApp Business",
    href: "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20connect%20with%20the%20private%20land%20intelligence%20desk.",
    ariaLabel: "Open Guild Acre WhatsApp Business",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/gildacre",
    ariaLabel: "Open Guild Acre Facebook Page",
  },
] as const;

export const SOCIAL_PROFILE_URLS = SOCIAL_LINKS.map((link) => link.href);
