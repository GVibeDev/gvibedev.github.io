export type EcosystemChannelId =
  | 'github'
  | 'youtube'
  | 'newsletter'
  | 'itch'
  | 'steam'
  | 'kickstarter'
  | 'patreon';

export type EcosystemChannel = {
  id: EcosystemChannelId;
  label: string;
  url: string | null;
  visible: boolean;
  category: 'development' | 'discovery' | 'community' | 'distribution' | 'crowdfunding';
  description: string;
  descriptionIt: string;
};

export type SupportEndpointKind = 'donate-page' | 'paypal-me';

export const ecosystemConfig = {
  release: {
    version: '0.23',
    milestone: 'Commercial / Crowdfunding Foundation',
  },

  contact: {
    email: 'gvibedev@gmail.com',
  },

  support: {
    provider: 'paypal',
    enabled: false,
    endpointKind: 'donate-page' as SupportEndpointKind,
    url: null as string | null,
    qrAsset: null as string | null,
  },

  analytics: {
    provider: 'plausible',
    enabled: false,
    siteDomain: 'gvibedev.cc',
    scriptSrc: null as string | null,
  },

  channels: [
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/GVibeDev',
      visible: true,
      category: 'development',
      description: 'Repositories, source code, project history and issue tracking.',
      descriptionIt: 'Repository, codice sorgente, cronologia dei progetti e segnalazione issue.',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      url: null,
      visible: false,
      category: 'discovery',
      description: 'Video, demonstrations and tutorials.',
      descriptionIt: 'Video, dimostrazioni e tutorial.',
    },
    {
      id: 'newsletter',
      label: 'Newsletter / Community',
      url: null,
      visible: false,
      category: 'community',
      description: 'Direct project updates and community communication.',
      descriptionIt: 'Aggiornamenti diretti sui progetti e comunicazione community.',
    },
    {
      id: 'itch',
      label: 'itch.io',
      url: null,
      visible: false,
      category: 'distribution',
      description: 'Independent release and download channel.',
      descriptionIt: 'Canale indipendente per release e download.',
    },
    {
      id: 'steam',
      label: 'Steam',
      url: null,
      visible: false,
      category: 'distribution',
      description: 'Future game distribution channel when a real store presence exists.',
      descriptionIt: 'Futuro canale di distribuzione quando esisterà una presenza reale sullo store.',
    },
    {
      id: 'kickstarter',
      label: 'Kickstarter',
      url: null,
      visible: false,
      category: 'crowdfunding',
      description: 'Future crowdfunding channel when a real campaign exists.',
      descriptionIt: 'Futuro canale di crowdfunding quando esisterà una campagna reale.',
    },
    {
      id: 'patreon',
      label: 'Patreon',
      url: null,
      visible: false,
      category: 'crowdfunding',
      description: 'Future recurring support channel if it becomes useful.',
      descriptionIt: 'Futuro canale di supporto ricorrente se diventerà utile.',
    },
  ] satisfies EcosystemChannel[],
} as const;

export function getVisibleChannels() {
  return ecosystemConfig.channels.filter((channel) => channel.visible && Boolean(channel.url));
}

export function getVisibleChannelsByCategory(category: EcosystemChannel['category']) {
  return getVisibleChannels().filter((channel) => channel.category === category);
}

export function getChannel(id: EcosystemChannelId) {
  return ecosystemConfig.channels.find((channel) => channel.id === id) ?? null;
}
