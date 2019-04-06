import showdown from 'showdown';

const converter = new showdown.Converter();

export const markdown2html = markdown => converter.makeHtml(markdown);
