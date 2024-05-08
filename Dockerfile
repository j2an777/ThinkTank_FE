# Build stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18 AS build
WORKDIR /usr/src/app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm run build

# Run stage
FROM krmp-d2hub-idock.9rum.cc/goorm/node:18
WORKDIR /usr/src/app
COPY --from=build /usr/dist ./dist
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist"]


