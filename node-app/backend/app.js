import express from 'express';
import indexRoute from './route/route.js';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

let app = express();
let port = 5000;

const liveReloadServer = livereload.createServer();

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());
app.use(express.urlencoded({ extended: true }))

app.use(indexRoute);

app.set('views', './views');
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`the app is running on port:${port} NodeJS server
    http://localhost:${port}`)
})