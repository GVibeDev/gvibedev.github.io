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
};

export const ecosystemConfig = {
  release: {
    version: '0.19',
    milestone: 'Support Infrastructure + Growth Foundation',
  },

  contact: {
    email: 'gvibedev@gmail.com',
  },

  support: {
    provider: 'paypal',
    enabled: false,
    url: null as string | null,
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
    },
    { id: 'youtube', label: 'YouTube', url: null, visible: false, category: 'discovery' },
    { id: 'newsletter', label: 'Newsletter / Community', url: null, visible: false, category: 'community' },
    { id: 'itch', label: 'itch.io', url: null, visible: false, category: 'distribution' },
    { id: 'steam', label: 'Steam', url: null, visible: false, category: 'distribution' },
    { id: 'kickstarter', label: 'Kickstarter', url: null, visible: false, category: 'crowdfunding' },
    { id: 'patreon', label: 'Patreon', url: null, visible: false, category: 'crowdfunding' },
  ] satisfies EcosystemChannel[],
} as const;

export function getVisibleChannels() {
  return ecosystemConfig.channels.filter((channel) => channel.visible && channel.url);
}

export function getChannel(id: EcosystemChannelId) {
  return ecosystemConfig.channels.find((channel) => channel.id === id) ?? null;
}
