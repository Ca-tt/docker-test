import express from 'express';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';
import indexRoute from './route/route.js';

const app = express();
const port = 5000;
const liveReloadServer = livereload.createServer();


liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLiveReload());
app.use(express.urlencoded({ extended: true })); // for req.body parsing

app.set('views', './views');
app.set('view engine', 'pug');

app.use(indexRoute);

app.listen(port, () => {
  console.log(`the app is running on port:${port} NodeJS server
    http://localhost:${port}`)
})