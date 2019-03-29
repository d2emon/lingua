import families from './families.json';
import languages from './languages.json';

// const PAUSE_TIME = 1500;
// const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

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
        .map(child => ({
          id: child.slug,
          children: [],
          ...child,
        }))
        .concat(getChildrenLanguages(data.slug));
      console.log(children);
      return {
        id: familyId,
        // name: item.name,
        ...data,
        children,
      };
    }),
};
