import type { Locale } from './config';

export const communityCopy = {
  en: {
    eyebrow: 'Community & public channels',
    title: 'Follow the work where it is actually public.',
    lead:
      'GVibeDev does not maintain placeholder accounts. A channel appears here only when it exists, is public and is intended to be maintained.',
    activeEyebrow: 'Active now',
    activeTitle: 'Current public channels',
    activeBody:
      'These are the channels that are genuinely active today. Future discovery, community and distribution channels remain hidden until a real public endpoint exists.',
    futureEyebrow: 'Growth without clutter',
    futureTitle: 'More channels only when they have a job to do.',
    futureBody:
      'A new platform should solve a real need: discovery, tutorials, release distribution, community communication or crowdfunding. GVibeDev will not create empty accounts simply to fill a row of icons.',
    contact: 'Contact GVibeDev',
    support: 'Support GVibeDev',
  },
  it: {
    eyebrow: 'Community e canali pubblici',
    title: 'Segui il lavoro dove è davvero pubblico.',
    lead:
      'GVibeDev non mantiene account segnaposto. Un canale compare qui solo quando esiste, è pubblico ed è destinato a essere realmente mantenuto.',
    activeEyebrow: 'Attivi ora',
    activeTitle: 'Canali pubblici correnti',
    activeBody:
      'Questi sono i canali realmente attivi oggi. I futuri canali di discovery, community e distribuzione restano invisibili finché non esiste un endpoint pubblico reale.',
    futureEyebrow: 'Crescita senza rumore',
    futureTitle: 'Nuovi canali solo quando hanno una funzione reale.',
    futureBody:
      'Una nuova piattaforma deve risolvere un bisogno concreto: discovery, tutorial, distribuzione delle release, comunicazione community o crowdfunding. GVibeDev non creerà account vuoti soltanto per riempire una fila di icone.',
    contact: 'Contatta GVibeDev',
    support: 'Supporta GVibeDev',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function getCommunityCopy(locale: Locale) {
  return communityCopy[locale];
}
