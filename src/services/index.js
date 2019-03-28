import db from './data';

const logResponse = (method) => (data) => {
  console.log(method, data);
  return data;
};


export const fetchFamilies = () => db.getFamilies()
  .then(logResponse('fetchFamilies'));

export const fetchFamily = familyId => db.getFamily(familyId)
  .then(logResponse('fetchFamily'));

export const fetchSubgroups = item => db.getFamilies()
  .then(logResponse('fetchSubgroups'))
  .then((groups) => {
    if (!item) return undefined;
    return db.getFamily(item.slug);
  })
  .then(logResponse('fetchSubgroups.Family'))
  .then((family) => {
    const result = [];
    if (item.id === 7) result.push({
      ...family,
      children: undefined,
    });
    if (!family || !family.children) return [];
    return [
      ...result,
      ...family.children,
    ];
  });
