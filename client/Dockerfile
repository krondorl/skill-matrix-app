FROM node:20.18.0-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tsconfig.json vite.config.* ./
COPY src ./src
COPY public ./public

RUN npm run build

FROM node:20.18.0-alpine AS runner
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

RUN npm install -g serve

CMD ["serve", "-s", "dist"]
