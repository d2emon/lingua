import axios from 'axios';

const baseUrl = '//127.0.0.1:4000/languages';
const Axios = axios.create({
  baseUrl,
});

const getGroups = ({ data }) => Promise.resolve(data.groups);

export const fetchFamilies = () => Axios
  .get(`${baseUrl}/groups`)
  .then(getGroups);

export const fetchFamily = (groupId) => Axios
  .get(`${baseUrl}/subgroups/${groupId || ''}`)
  .then(getGroups);

export const fetchSubgroups = (item) => item && Axios
  .get(`${baseUrl}/group/${item.slug}`)
  .then(getGroups);
