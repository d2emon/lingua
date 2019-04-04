import defaultLanguages from './languages.json';
import taxons from './taxons.json';

export default Promise.resolve(
  defaultLanguages.map(language => ({
    ...language,
    taxon: taxons[language.level],
  })),
);
