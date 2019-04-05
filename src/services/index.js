import families from './families';

// const PAUSE_TIME = 1500;
// const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
const logResponse = (method) => (data) => {
  // console.log(method, data);
  return data;
};

export const fetchFamilies = () => families.byParent()
  .then(logResponse('fetchFamilies'));

export const fetchFamily = familyId => families.withChildren(familyId)
  .then(logResponse('fetchFamily'));

export const fetchSubgroups = item => families.byParent()
  .then(logResponse('fetchSubgroups'))
  .then(data => item && families.withChildren(item.slug))
  .then(logResponse('fetchSubgroups.Family'))
  .then(family => family && family.children);
