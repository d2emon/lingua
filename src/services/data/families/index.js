import defaultFamilies from './default.json';
import indoEuropeanFamilies from './indo-european.json';
import centumFamilies from './centum.json';
import satemFamilies from './satem.json';

import taxons from './taxons.json';
import history from './history';

export default Promise.resolve(
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
    taxon: taxons[family.level],
    ...family,
  })),
);
