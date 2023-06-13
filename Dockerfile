#Step 1
## base image
FROM node:18 AS builder

RUN mkdir -p /tarot-server/app

WORKDIR /tarot-server/app

COPY . . 

RUN yarn install --network-timeout 1000000000

RUN yarn build:prod

#Step 2
## base image to ligh weight

FROM node:18-alpine

WORKDIR /tarot-server/app

ENV NODE_ENV=production

COPY --from=builder /tarot-server/app ./

CMD ["yarn", "start:prod"]