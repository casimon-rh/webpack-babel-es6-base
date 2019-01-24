FROM node:8 AS build
WORKDIR /usr/src/app
COPY package.json* .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine AS deploy
WORKDIR /usr/src/app
COPY --from=build --chown=nginx:nginx /usr/src/app/assets ./assets
COPY --from=build --chown=nginx:nginx /usr/src/app/favicon.ico /usr/src/app/index.html /usr/src/app/dist/bundle.js /usr/src/app/dist/bundle.css /usr/src/app/entrypoint.sh /usr/src/app/*.conf ./
EXPOSE 80

ENTRYPOINT [ "/bin/sh","entrypoint.sh" ]