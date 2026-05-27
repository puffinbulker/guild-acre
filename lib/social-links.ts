export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/guild-acre",
    ariaLabel: "Open Guild Acre on LinkedIn",
  },
  {
    label: "Google Business",
    href: "https://www.google.com/maps/search/?api=1&query=Guild%20Acre%20Gurgaon%20Haryana",
    ariaLabel: "Open Guild Acre Google Business Profile",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/guildacre/",
    ariaLabel: "Open Guild Acre on Instagram",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@guildacre",
    ariaLabel: "Open Guild Acre on YouTube",
  },
  {
    label: "WhatsApp Business",
    href: "https://wa.me/919711667782?text=Hi%20Guild%20Acre%2C%20I%20want%20to%20connect%20with%20the%20private%20land%20intelligence%20desk.",
    ariaLabel: "Open Guild Acre WhatsApp Business",
  },
  {
    label: "Facebook Page",
    href: "https://www.facebook.com/guildacre",
    ariaLabel: "Open Guild Acre Facebook Page",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/guildacre",
    ariaLabel: "Open Guild Acre on X",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/guildacre/",
    ariaLabel: "Open Guild Acre on Pinterest",
  },
] as const;

export const SOCIAL_PROFILE_URLS = SOCIAL_LINKS.map((link) => link.href);
