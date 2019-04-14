import axios from 'axios';
import config from './config';
import { markdown2html } from '../helpers';

const Axios = axios.create({ baseURL: config.baseURL });

export const fetchFamilies = () => Axios
  .get('languages/groups')
  .then(({ data }) => data.groups);

export const fetchFamily = slug => Axios
  .get(`languages/subgroups/${slug || ''}`)
  .then(({ data }) => data.groups);

export const fetchSubgroups = item => item && Axios
  .get(`languages/group/${item.slug}`)
  .then(({ data }) => data.groups);

export const fetchSlangs = () => Axios
  .get('slangs')
  .then(({ data }) => data.slangs);

export const fetchSlang = slug => Axios
  .get(`slangs/${slug}`)
  .then(({ data }) => data.slang)
  .then(({ text, appendix, ...slang }) => ({
    ...slang,
    text: text && markdown2html(text),
    appendix: appendix && markdown2html(appendix),
  }));

export const fetchPhrases = () => Axios
  .get('translations')
  .then(({ data }) => data.translations);

export const fetchTranslation = slug => Axios
  .get(`translations/${slug}`)
  .then(({ data }) => data.translations)
  .then(({ text, appendix, ...translation }) => ({
    ...translation,
    text: text && markdown2html(text),
    appendix: appendix && markdown2html(appendix),
  }));
