FROM node:carbon

WORKDIR /usr/www

ENV NODE_ENV=development

COPY package*.json ./

RUN npm install

COPY ./ /usr/www/

ENV DEBUG=1
ENV HOST=0.0.0.0
EXPOSE 8091

# ENTRYPOINT [ "npm", "run", "serve"]
# ENTRYPOINT vue-cli-service serve --port 8091
