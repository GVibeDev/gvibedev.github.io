import itPages from './it-pages.json';

export type LocalizedContentPage = {
  route: string;
  title: string;
  description: string;
  image: string;
  stylesheets: string[];
  inlineStyles: string[];
  content: string;
};

export const italianContentPages = itPages as Record<string, LocalizedContentPage>;

export function getItalianContentPage(key: string): LocalizedContentPage {
  const page = italianContentPages[key];
  if (!page) {
    throw new Error(`Missing Italian content page: ${key}`);
  }
  return page;
}
