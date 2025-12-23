FROM node:20.19.0-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20.19.0-alpine AS production

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

EXPOSE 3003

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3003', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["serve", "-s", "dist", "-l", "3003"]
