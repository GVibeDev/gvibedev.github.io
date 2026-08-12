import type { Locale } from './config';

export const ui = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      webApps: 'Web Apps',
      tools: 'Tools',
      worlds: 'Worlds',
      biggitykot: 'BiggityKot',
      manifesto: 'Manifesto',
      about: 'About',
      contact: 'Contact',
      community: 'Community',
      support: 'Support',
    },
    primaryNavigation: 'Primary navigation',
    mobileNavigation: 'Mobile navigation',
    footerNavigation: 'Footer navigation',
    menu: 'Menu',
    skip: 'Skip to content',
    workshop: 'Independent digital workshop.',
    footerNote: 'Games, tools, worlds and experiments built through human direction, iteration, testing and AI-assisted development.',
  },
  it: {
    nav: {
      home: 'Home',
      projects: 'Progetti',
      webApps: 'Web App',
      tools: 'Strumenti',
      worlds: 'Mondi',
      biggitykot: 'BiggityKot',
      manifesto: 'Manifesto',
      about: 'Chi sono',
      contact: 'Contatti',
      community: 'Community',
      support: 'Supporto',
    },
    primaryNavigation: 'Navigazione principale',
    mobileNavigation: 'Navigazione mobile',
    footerNavigation: 'Navigazione piè di pagina',
    menu: 'Menu',
    skip: 'Vai al contenuto',
    workshop: 'Laboratorio digitale indipendente.',
    footerNote: 'Giochi, strumenti, mondi ed esperimenti costruiti attraverso direzione umana, iterazione, test e sviluppo assistito dall’IA.',
  },
} as const satisfies Record<Locale, unknown>;

export function getUi(locale: Locale) {
  return ui[locale];
}
