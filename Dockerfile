FROM node:12.16.3-alpine
WORKDIR /usr/src/app

COPY . .

RUN yarn \
  && yarn build

ENV PORT 5000
ENV NODE_ENV=production

EXPOSE $PORT

ENTRYPOINT ["yarn", "start"]