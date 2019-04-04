import families from './families';

// const PAUSE_TIME = 1500;
// const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  getFamilies: () => families.byParent(),
  getFamily: slug => families.withChildren(slug),
};
