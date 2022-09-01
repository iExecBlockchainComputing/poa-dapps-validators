FROM node:10-alpine AS build

RUN apk add --no-cache git python make g++

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
# TODO /!\ add this file ??
# COPY nginx/spa.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
