import families from './families.json';
import languages from './languages.json';

// const PAUSE_TIME = 1500;
// const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const FAMILY_TAXONS = {
  0: 'макросемья',
  1: 'семья',
  2: 'подсемья',
  3: 'надветвь',
  4: 'зона',
  5: 'подзона',
  6: 'ветвь',
  7: 'подветвь',
  8: 'группа',
  9: 'подгруппа',
  10: 'подподгруппа',
  11: 'микрогруппа',
};
const LANGUAGE_TAXONS = {
  12: 'язык, кластер',
  13: 'наречие, язык',
  14: 'диалект',
  15: 'говор',
};


const id2slug = (familyId) => {
  if (familyId === 7) return  'indoeuropeic';
  return familyId;
};
const getFamily = slug => families.find(family => family.slug === slug);
const getChildren = slug => families.filter(family => family.parent === slug);
const getChildrenLanguages = slug => languages.filter(language => language.group === slug);

const makeFamily = data => ({
  id: data.slug,
  children: [],
  ...data,
});

const loadFamilies = () => new Promise(resolve => resolve(families.map(makeFamily)));
const loadFamily = slug => new Promise(resolve => resolve(getFamily(slug)));

const getSubfamilies = slug => loadFamilies()
  .then(data => data.filter(family => family.parent === slug));

export default {
  getFamilies: () => getSubfamilies(),
  getFamily: familyId => loadFamily(familyId)
    .then((data) => {
      console.log(familyId);
      if (!data) return null;

      const children = getChildren(data.slug)
        .map(makeFamily)
        .concat(getChildrenLanguages(data.slug));

      const taxon = FAMILY_TAXONS[data.level];
      return {
        id: familyId,
        // name: item.name,
        ...data,
        children,
        taxon
      };
    }),
};
