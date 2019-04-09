FROM node:lts-alpine as build-stage

WORKDIR /usr/www

COPY package.json ./
COPY package*.json ./

RUN npm install

COPY . .
# COPY ./babel.config.js ./
# COPY ./public ./
# COPY ./src ./

ENV DEBUG=1
ENV HOST=0.0.0.0
EXPOSE 8080

ENTRYPOINT [ "npm", "run", "serve"]
