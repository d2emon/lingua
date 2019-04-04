import defaultLanguages from './languages.json';

const LANGUAGE_TAXONS = {
  12: 'язык, кластер',
  13: 'наречие, язык',
  14: 'диалект',
  15: 'говор',
};

const languages = Promise.resolve(
  defaultLanguages.map(language => ({
    ...language,
    taxon: LANGUAGE_TAXONS[language.level],
  })),
);

export default {
  // getAll: () => languages,
  byGroup: slug => languages
    .then(data => data.filter(item => item.group === slug)),
};
