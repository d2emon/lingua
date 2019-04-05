import axios from 'axios';
import config from './config';

const Axios = axios.create({ baseURL: config.baseURL });

const getGroups = ({ data }) => Promise.resolve(data.groups);

export const fetchFamilies = () => Axios
  .get('/groups')
  .then(getGroups);

export const fetchFamily = slug => Axios
  .get(`/subgroups/${slug || ''}`)
  .then(getGroups);

export const fetchSubgroups = item => item && Axios
  .get(`/group/${item.slug}`)
  .then(getGroups);
