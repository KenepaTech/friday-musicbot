FROM node:18 AS build
 WORKDIR /app
 COPY . /app
 COPY --from=mwader/static-ffmpeg:5.1.2 /ffmpeg /ffmpeg
 #RUN npm install --package-lock-only
 RUN npm install
 RUN apt update && \
     apt install -y ffmpeg 
 RUN npm i @discordjs/opus
 RUN npm i node-opus

FROM gcr.io/distroless/nodejs18
WORKDIR /app
COPY --from=build /app /app
COPY --from=build /ffmpeg /bin/
USER nonroot
CMD [ "index.js" ]
