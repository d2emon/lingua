import familiesList from './data/families-list.json';
import families from './data/families.json';

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

const getFamilies = () => new Promise(async (resolve) => {
  await pause(1500);
  return resolve(familiesList);
});

const getFamily = familyId => new Promise(async (resolve) => {
  await pause(1500);
  if (!familyId) return undefined;
  return resolve(families[familyId]);
});

export const fetchFamilies = () => getFamilies()
  .then(data => data.map((name, id) => ({
    id: id + 1,
    name,
    children: [],
  })));

export const fetchFamily = familyId => getFamily(familyId)
  .then(data => ({
    id: familyId,
    children: [],
    ...data,
  }))
  .then((data) => {
    console.log(familyId, data)
    return data;
  });

export const fetchSubgroups = item => fetchFamilies()
  .then((groups) => {
    if (!item) return undefined;
    if (!item.id) return undefined;

    // const group = groups.find(it => it.id === item.id);
    return getFamily(item.id)
      .then((result) => {
        console.log(result);
        if (!result) return {};
        return result;
      })
      .then(data => ({
        ...data,
        id: item.id,
        name: item.name,
      }))
      .then((result) => {
        if (item.id !== 7) return [];
        return [
          result,
          {
            id: 1,
            name: 'Индоевропейские языки',
            children: [],
          },
          {
            id: 2,
            name: "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
          {
            id: 3,
            name: "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771",
              "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
              }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
              "name": "Deckow-Crist",
              "catchPhrase": "Proactive didactic contingency",
              "bs": "synergize scalable supply-chains"
            }
          },
        ];
      });
  });
