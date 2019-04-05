import defaultLanguages from './languages.json';
import taxons from './taxons.json';

export default Promise.resolve(
  defaultLanguages.map(language => ({
    language: true,
    taxon: taxons[language.level],
    link: `/language/${language.slug}`,
    ...language,
  })),
);
