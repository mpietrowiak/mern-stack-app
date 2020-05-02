# MERN stack

Ingredients:

* MongoDB
* Express
* React
* Node.js
* TypeScript

Uses Yarn.

## Development

For development, `docker-compose.dev.yml` is used to start the app together with MongoDB.
Create-react-app server is run and proxies API request to the backend server. File changes are watched: `.ts` files are compiled automatically to `.js` and frontend `.js` files and other assets are bundled automatically.

## Production

In production, the server is listening on 5000 and serves the compiled frontend and also responds to normal API requests.
You can build a docker image using `yarn build-image`.

## TODO:

* Implement react-router and some example routes
* Add GUI for the CRUD
* Check deployment on Heroku