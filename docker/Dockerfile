# Stage 1: Build the application
FROM node:16-alpine AS build

# Install build dependencies, including Python
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application code and build the project
COPY . ./
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# Copy the build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration
COPY nginx/spa.conf /etc/nginx/conf.d/default.conf

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
