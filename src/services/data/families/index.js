import defaultFamilies from './default.json';
import indoEuropeanFamilies from './indo-european.json';
import centumFamilies from './centum.json';
import satemFamilies from './satem.json';

import FAMILY_TAXONS from './taxons.json';
import history from './history';

import languages from '../languages';

const families = Promise.resolve(
  [].concat(
    defaultFamilies,
    indoEuropeanFamilies,
    centumFamilies,
    satemFamilies,
  ).map(family => ({
    id: family.slug,
    // name: item.name,
    children: [],
    history: history[family.slug],
    taxon: FAMILY_TAXONS[family.level],
    ...family,
  })),
);

const bySlug = slug => families
  .then(data => data.find(item => item.slug === slug));
const byParent = slug => families
  .then(data => data.filter(item => item.parent === slug));
const getChildren = (family) => {
  if (!family) return null;

  return Promise.all([
    byParent(family.slug),
    languages.byGroup(family.slug),
  ])
    .then(response => ({
      ...family,
      children: [].concat(...response),
    }));
}

export default {
  // getAll: () => families,
  bySlug,
  byParent,
  withChildren: slug => bySlug(slug).then(getChildren),
};
