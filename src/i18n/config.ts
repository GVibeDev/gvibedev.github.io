export const supportedLocales = ['en', 'it'] as const;
export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'en';

export const localeMeta = {
  en: { htmlLang: 'en', ogLocale: 'en_US', label: 'English', shortLabel: 'EN' },
  it: { htmlLang: 'it', ogLocale: 'it_IT', label: 'Italiano', shortLabel: 'IT' },
} as const;

const translatedEnglishRoutes = new Set([
  '/',
  '/projects/',
  '/web-apps/',
  '/tools/',
  '/worlds/',
  '/biggitykot/',
  '/manifesto/',
  '/about/',
  '/contact/',
  '/support/',
  '/projects/arena-rubra-digital/',
  '/projects/arena-rubra-board-game/',
  '/projects/arena-rubra-card-composer/',
  '/projects/unum-sunt/',
  '/projects/unum-sunt-sprite-studio/',
  '/projects/rubra-composer/',
  '/projects/rubra-image-forge/',
  '/projects/bw-survivors/',
  '/projects/manuale-llm/',
]);

function normalizePath(pathname: string) {
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname !== '/' && !pathname.endsWith('/')) pathname += '/';
  return pathname;
}

export function getLocaleFromPath(pathname: string): Locale {
  const path = normalizePath(pathname);
  return path === '/it/' || path.startsWith('/it/') ? 'it' : 'en';
}

export function getEnglishPath(pathname: string) {
  const path = normalizePath(pathname);
  if (path === '/it/') return '/';
  if (path.startsWith('/it/')) return normalizePath(path.slice(3));
  return path;
}

export function hasItalianEquivalent(pathname: string) {
  return translatedEnglishRoutes.has(getEnglishPath(pathname));
}

export function getEquivalentPath(pathname: string, targetLocale: Locale) {
  const english = getEnglishPath(pathname);
  if (!translatedEnglishRoutes.has(english)) return null;

  if (targetLocale === 'en') return english;
  if (english === '/') return '/it/';
  return `/it${english}`;
}

export function getNavigationPath(englishPath: string, locale: Locale) {
  const normalized = normalizePath(englishPath);
  if (locale === 'it' && translatedEnglishRoutes.has(normalized)) {
    return getEquivalentPath(normalized, 'it') ?? normalized;
  }
  return normalized;
}
