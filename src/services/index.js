import axios from 'axios';
import config from './config';

const Axios = axios.create({ baseURL: config.baseURL });

const getGroups = ({ data }) => Promise.resolve(data.groups);

export const fetchFamilies = () => Axios
  .get('languages/groups')
  .then(getGroups);

export const fetchFamily = slug => Axios
  .get(`languages/subgroups/${slug || ''}`)
  .then(getGroups);

export const fetchSubgroups = item => item && Axios
  .get(`languages/group/${item.slug}`)
  .then(getGroups);

export const fetchSlangs = () => Axios
  .get('slangs')
  .then(({ data }) => Promise.resolve(data.slangs));

export const fetchSlang = slug => Axios
  .get(`slangs/${slug}`)
  .then(({ data }) => Promise.resolve(data.slang));
