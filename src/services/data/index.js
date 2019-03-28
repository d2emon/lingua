import familiesList from './families-list.json';
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

const loadFamilies = () => new Promise(resolve => resolve(familiesList));

const loadFamily = slug => new Promise(resolve => resolve(getFamily(slug)));

export default {
  getFamilies: () => loadFamilies()
    .then(data => data.map((name, id) => ({
      id: id + 1,
      slug: id2slug(id + 1),
      name,
      children: [],
    }))),
  getFamily: familyId => loadFamily(familyId)
    .then((data) => {
      if (!data) return null;
      const children = getChildren(data.slug).map(child => ({
        children: [],
        ...child,
      }));
      const childLang = getChildrenLanguages(data.slug);
      console.log(children, childLang, children + childLang);

      return {
        id: familyId,
        // name: item.name,
        ...data,
        children,
      };
    }),
};
