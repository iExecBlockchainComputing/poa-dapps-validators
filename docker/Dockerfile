FROM node:16-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --silent

COPY . ./
RUN npm run build

# Use Nginx for production
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/spa.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
