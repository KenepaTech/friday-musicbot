FROM node:16.9.1

WORKDIR /usr/src/app

RUN apt-get update || : && apt-get install python -y
RUN apt-get install ffmpeg -y

COPY package*.json ./
RUN npm install --package-lock-only
RUN npm ci

COPY . .

CMD [ "node", "index.js" ]
