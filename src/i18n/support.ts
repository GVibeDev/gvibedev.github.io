import type { Locale } from './config';

export const supportCopy = {
  en: {
    eyebrow: 'Support GVibeDev',
    title: 'Independent work, voluntarily supported.',
    lead:
      'GVibeDev develops games, tools and creative projects independently. If you find the work useful or interesting, you can contribute voluntarily to future development.',
    body:
      'Support is optional. It does not unlock promised rewards, preferential access or special treatment. It simply helps create more room for development, testing, documentation and public releases.',
    cta: 'Support GVibeDev',
    unavailable: 'PayPal support will be enabled here when the public link is configured.',
    alternativeTitle: 'Support does not have to be financial.',
    alternativeBody:
      'Trying a project, reporting a useful bug, sharing a repository or following future public channels can be just as useful to an independent workshop.',
    transparencyTitle: 'What support means here',
    transparencyBody:
      'GVibeDev remains an independent workshop. This page is a voluntary support channel, not a store, subscription programme or crowdfunding campaign.',
  },
  it: {
    eyebrow: 'Supporta GVibeDev',
    title: 'Sviluppo indipendente, supporto volontario.',
    lead:
      'GVibeDev sviluppa in modo indipendente giochi, strumenti e progetti creativi. Chi trova utile o interessante il lavoro può contribuire volontariamente al suo sviluppo futuro.',
    body:
      'Il supporto è facoltativo. Non sblocca ricompense promesse, accessi preferenziali o trattamenti speciali. Serve semplicemente a creare più spazio per sviluppo, test, documentazione e release pubbliche.',
    cta: 'Supporta GVibeDev',
    unavailable: 'Il supporto tramite PayPal sarà attivato qui quando il link pubblico sarà configurato.',
    alternativeTitle: 'Il supporto non deve essere necessariamente economico.',
    alternativeBody:
      'Provare un progetto, segnalare un bug utile, condividere un repository o seguire i futuri canali pubblici può essere altrettanto utile per un laboratorio indipendente.',
    transparencyTitle: 'Cosa significa supporto qui',
    transparencyBody:
      'GVibeDev resta un laboratorio indipendente. Questa pagina è un canale di supporto volontario, non uno shop, un abbonamento o una campagna di crowdfunding.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function getSupportCopy(locale: Locale) {
  return supportCopy[locale];
}
