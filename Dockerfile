FROM node:16.10.0 as base

WORKDIR /usr/src/app

RUN apt-get update || : && apt-get install python -y
RUN apt-get install ffmpeg -y
COPY package*.json ./


FROM base as test
RUN npm ci
COPY . .
RUN npm test


FROM base as prod
RUN npm ci
COPY . .
CMD [ "node", "server.js" ]





