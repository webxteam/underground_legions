FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i -g typescript ts-node

RUN npm i

RUN tsc

CMD npm run prod
