FROM node:alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY . .

RUN yarn build

FROM node:alpine AS production

WORKDIR /app

ENV NODE_ENV production
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"


COPY --from=base /app/next.config.js ./
COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", ".next/standalone/server.js"]
