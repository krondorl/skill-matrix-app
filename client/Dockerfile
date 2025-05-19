FROM node:23.11.1-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "run", "preview"]
