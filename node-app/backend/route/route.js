import express from 'express';
import { existsSync } from 'node:fs';
import { readFile, appendFile } from 'node:fs/promises';

const router = express.Router();
const usersFile = './data/users.txt';

// index route
router.get('/', async (req, res) => {
  const data = await readFile(usersFile, 'utf-8');
  let users = data.split('\r\n');

  res.render('index', { users });
})

router.post('/', async (req, res) => {
  let newUser = req.body.text;
  if (existsSync(usersFile)) {
    await appendFile(usersFile, `\r\n${newUser}`);
  }
  res.redirect('/')
})

export default router;


// 1. rewrite this app to the fetch (rest) api standard