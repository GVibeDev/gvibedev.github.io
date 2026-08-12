import { ecosystemConfig, getChannel } from './ecosystem';

export type CommercialProviderId =
  | 'paypal-support'
  | 'itch'
  | 'steam'
  | 'kickstarter'
  | 'patreon';

export type CommercialAction =
  | 'support'
  | 'download'
  | 'wishlist'
  | 'buy'
  | 'back'
  | 'follow';

export type CommercialEndpoint = {
  provider: CommercialProviderId;
  url: string;
  external: true;
};

export function resolveCommercialEndpoint(provider: CommercialProviderId): CommercialEndpoint | null {
  if (provider === 'paypal-support') {
    const support = ecosystemConfig.support;
    if (!support.enabled || !support.url) return null;

    return {
      provider,
      url: support.url,
      external: true,
    };
  }

  const channelId =
    provider === 'itch'
      ? 'itch'
      : provider === 'steam'
        ? 'steam'
        : provider === 'kickstarter'
          ? 'kickstarter'
          : 'patreon';

  const channel = getChannel(channelId);
  if (!channel?.visible || !channel.url) return null;

  return {
    provider,
    url: channel.url,
    external: true,
  };
}

export function commercialProviderIsActive(provider: CommercialProviderId) {
  return Boolean(resolveCommercialEndpoint(provider));
}
