FROM node:12.3-alpine
WORKDIR /usr/src/app

RUN mkdir -p ./client/src
RUN mkdir -p ./client/public

COPY ts*.json ./
COPY package*.json ./
COPY client/package*.json ./client

COPY src/*.ts ./src/

COPY client/src/* ./client/src/
COPY client/public/* ./client/public/

RUN npm install -g nodemon \
  && npm install \
  && npm run build-ts \
  && cd client \
  && npm install \
  && npm run build

ENV PORT 5000
ENV NODE_ENV=production

EXPOSE $PORT

ENTRYPOINT ["npm", "run", "server"]