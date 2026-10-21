/* ---------------------------------------------------------------------------
   src/data/siteData.js
   ALL WEBSITE COPY AND CONTENT LIVES HERE — one file to edit when the client
   wants to change a service, a FAQ answer, a phone number or a nav link.
   Components import from here and stay purely presentational.
--------------------------------------------------------------------------- */

/* Company identity + contact details (supplied by the client) */
export const company = {
  name: "Cretapex",
  tagline: "Your Growth, Our Strategy",
  phone: "+8801309584595",
  phoneHref: "tel:+8801309584595",
  email: "cretapex.agency@gmail.com",
  emailHref: "mailto:cretapex.agency@gmail.com",
  address: "Dhaka, Bangladesh",
  hours: "Sat–Thu, 10:00–19:00 (GMT+6)",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/Cretapex",
      icon: "facebook",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/cretapex/posts/?feedView=all",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/cretapex/",
      icon: "instagram",
    },
  ],
};

/* Top navigation — each href is an on-page anchor */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];
/* The nine service cards. `preview` picks which mini illustration is drawn
   inside the card (see components/ServicePreviews.jsx). */
export const services = [
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Social media marketing for Facebook and Instagram, including management, content planning and community growth.",
    preview: "chart",
    points: ["Page management", "Content planning", "Community growth"],
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Performance marketing with Meta Ads, Facebook Ads, Instagram Ads and Google Ads that reach the right customers and deliver measurable results.",
    preview: "chart",
    points: [
      "Meta, Facebook & Instagram Ads",
      "Google Ads",
      "Tracking & reporting",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "SEO services that help your business get found on search, from keyword research to technical fixes and local visibility.",
    preview: "chart",
    points: ["Keyword research", "Technical & on-page SEO", "Local SEO"],
  },
  {
    id: "web",
    title: "Web Design & Development",
    description:
      "Professional web design and development creating responsive, SEO-friendly, modern websites built around your business.",
    preview: "code",
    points: ["Responsive websites", "SEO-friendly builds", "Modern UI design"],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description:
      "Graphic design for social media posts, Facebook ads, Instagram content, banners and promotional materials.",
    preview: "wireframe",
    points: ["Social media posts", "Ad creatives", "Banners & promotions"],
  },
  {
    id: "branding",
    title: "Brand Identity & Logo Design",
    description:
      "Brand identity and logo design for professional logos, visual identities and brand guidelines that keep every touchpoint consistent.",
    preview: "shapes",
    points: ["Logo design", "Visual identity", "Brand guidelines"],
  },
  {
    id: "events",
    title: "Event Planning & Management",
    description:
      "Event planning and management for corporate events, seminars, launches and promotional activations, handled from concept to execution.",
    preview: "timeline",
    points: [
      "Corporate events",
      "Seminars & launches",
      "Promotional activations",
    ],
  },
  {
    id: "video",
    title: "Video Production & Editing",
    description:
      "Video production and editing for reels, social media videos, promotional ads and brand videos your audience watches to the end.",
    preview: "timeline",
    points: ["Reels & short-form", "Promotional ads", "Brand videos"],
  },
  {
    id: "motion",
    title: "Motion Graphics",
    description:
      "Motion graphics and animation for social media, ads, promotional videos and brand visuals that explain ideas quickly.",
    preview: "shapes",
    points: ["Social media animation", "Ad & promo motion", "Brand visuals"],
  },
];

/* The four "Why Cretapex" rows in the About / advantage section.
   `icon` must match a name in components/Icons.jsx. */
export const advantages = [
  {
    id: "one-team",
    icon: "layers",
    title: "One team, every discipline",
    text: "Development, design, marketing and video under one roof, so nothing gets lost between agencies.",
  },
  {
    id: "global",
    icon: "globe",
    title: "Built for a global audience",
    text: "We work across time zones and deliver work that meets international standards.",
  },
  {
    id: "quality",
    icon: "check",
    title: "Quality you can verify",
    text: "Every deliverable is reviewed, tested and documented before it reaches you.",
  },
  {
    id: "growth",
    icon: "rocket",
    title: "Focused on your growth",
    text: "We measure success by results for your business, not by hours billed.",
  },
];

/* The five delivery phases shown in the process timeline */
export const processSteps = [
  {
    id: 1,
    title: "Discovery",
    text: "We dig into your goals, users and constraints so every later decision is grounded in reality.",
  },
  {
    id: 2,
    title: "Architecture",
    text: "We map the blueprint — systems, interfaces and workflows engineered to scale from day one.",
  },
  {
    id: 3,
    title: "Design",
    text: "Interfaces and brand assets are designed, reviewed with you, and locked before a line of code is written.",
  },
  {
    id: 4,
    title: "Build & test",
    text: "Short build cycles with working demos, so you see progress every week instead of at the end.",
  },
  {
    id: 5,
    title: "Launch & grow",
    text: "We ship, monitor and keep improving — support, analytics and iteration after go-live.",
  },
];

/* Numbers strip under the hero */
export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "40+", label: "Clients worldwide" },
  { value: "6", label: "In-house disciplines" },
  { value: "98%", label: "Client retention" },
];

/* Accordion content */
export const faqs = [
  {
    q: "Do you handle all services in-house?",
    a: "Yes. Our in-house team covers development, security, design, marketing and video, so your whole project stays under one roof and one point of contact.",
  },
  {
    q: "Do you work with international clients?",
    a: "We do. Most of our work is for clients outside Bangladesh. We overlap with your working hours and keep everything documented in writing.",
  },
  {
    q: "What happens after my project launches?",
    a: "Every launch includes a handover, documentation and a support window. After that you can move to a monthly retainer for maintenance and new features.",
  },
  {
    q: "How do you protect my company's data?",
    a: "We sign an NDA before kickoff, work on least-privilege access, encrypt credentials, and run a security review before anything goes to production.",
  },
  {
    q: "How quickly can you start a new project?",
    a: "Discovery usually begins within a week of the first call. Smaller scopes can start sooner — tell us your deadline and we will be honest about whether we can hit it.",
  },
];

/* Options shown in the contact form's "service" dropdown */
export const contactTopics = services.map((s) => s.title);
