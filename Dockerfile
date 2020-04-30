FROM node:12.3-alpine
WORKDIR /usr/src/app

RUN mkdir -p ./client/src
RUN mkdir -p ./client/public

COPY package*.json .
COPY client/package*.json ./client

COPY *.js .

COPY client/src/* ./client/src/
COPY client/public/* ./client/public/

RUN npm install -g nodemon \
  && npm install \
  && cd client \
  && npm install \
  && npm run build

ENV PORT 5000
ENV NODE_ENV=production

EXPOSE $PORT

ENTRYPOINT ["nodemon", "server.js"]