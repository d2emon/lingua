import defaultLanguages from './default.json';
import satemLanguages from "./satem.json";

import taxons from './taxons.json';

export default Promise.resolve(
  [].concat(
    defaultLanguages,
    // centumLanguages,
    satemLanguages,
  ).map(language => ({
    language: true,
    taxon: taxons[language.level],
    link: `/language/${language.slug}`,
    ...language,
  })),
);
