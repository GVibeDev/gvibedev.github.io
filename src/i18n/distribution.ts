import type { Locale } from './config';

export const distributionUi = {
  en: {
    eyebrow: 'Product hub',
    title: 'Distribution, documentation and release status.',
    currentVersion: 'Current version',
    groups: {
      current: 'Available now',
      development: 'In development',
      future: 'Future surface',
    },
    states: {
      available: 'Available',
      'on-page': 'On this page',
      'in-development': 'In development',
      planned: 'Planned',
      'not-published': 'Not published',
    },
    items: {
      play: 'Play',
      'starter-game': 'Starter Game',
      'full-edition': 'Full Edition',
      'community-depot': 'Community Depot',
      download: 'Download',
      documentation: 'Documentation',
      requirements: 'Requirements',
      tutorials: 'Tutorials',
      changelog: 'Changelog',
      github: 'GitHub',
      support: 'Support',
      cards: 'Cards',
      decks: 'Decks',
      maps: 'Maps',
    },
    actions: {
      open: 'Open',
      section: 'Open section',
      play: 'Play now',
      github: 'Open GitHub',
      support: 'Open Support',
    },
    commercialActions: {
      support: 'Support',
      download: 'Download',
      wishlist: 'Wishlist',
      buy: 'Buy',
      back: 'Back project',
      follow: 'Follow development',
    },
  },

  it: {
    eyebrow: 'Hub prodotto',
    title: 'Distribuzione, documentazione e stato delle release.',
    currentVersion: 'Versione corrente',
    groups: {
      current: 'Disponibile ora',
      development: 'In sviluppo',
      future: 'Superficie futura',
    },
    states: {
      available: 'Disponibile',
      'on-page': 'In questa pagina',
      'in-development': 'In sviluppo',
      planned: 'Previsto',
      'not-published': 'Non pubblicato',
    },
    items: {
      play: 'Gioca',
      'starter-game': 'Starter Game',
      'full-edition': 'Edizione completa',
      'community-depot': 'Community Depot',
      download: 'Download',
      documentation: 'Documentazione',
      requirements: 'Requisiti',
      tutorials: 'Tutorial',
      changelog: 'Changelog',
      github: 'GitHub',
      support: 'Supporto',
      cards: 'Carte',
      decks: 'Mazzi',
      maps: 'Mappe',
    },
    actions: {
      open: 'Apri',
      section: 'Apri sezione',
      play: 'Gioca ora',
      github: 'Apri GitHub',
      support: 'Apri Supporto',
    },
    commercialActions: {
      support: 'Supporta',
      download: 'Download',
      wishlist: 'Wishlist',
      buy: 'Acquista',
      back: 'Sostieni il progetto',
      follow: 'Segui lo sviluppo',
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export function getDistributionUi(locale: Locale) {
  return distributionUi[locale];
}
