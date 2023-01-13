import express from 'express';
import fs from 'node:fs';

let router = express.Router();

let usersFile = './data/users.txt';

// index route
router.get('/', (req, res) => {
  
  fs.readFile(usersFile, 'utf-8', (err, data) => {
    let users = [];
    users = data.split('\r\n');
    res.render('index', { content: `page res is ${res.statusCode}`, users: users });
  })
})

router.post('/', (req, res) => {
  let newUser = req.body.text;
  // console.log('req: ', newUser);
  
  fs.readFile(usersFile, 'utf-8', (err, data) => {
    fs.appendFile(usersFile, `\r\n${newUser}`, (err) => {

    })
  })
  res.redirect('/')
})


// get file
router.get('/file', (req, res) => {

  fs.readFile('./data/users.txt', 'utf-8', (err, data) => {

    fs.mkdir('./data/extra', () => {

      fs.writeFile('./data/extra/users-copy.txt', data, (error) => {
        error ? console.log(error) : null;
        console.log('writing a new file...');
      })

    })

    setTimeout(() => {
      if(fs.existsSync('./data/extra/users-copy.txt')) {
        fs.unlink('./data/extra/users-copy.txt', (err) => {
          err ? console.log(err) : null;
          console.log('delete the file....');
        })
      }
    }, 5000)

    setTimeout(() => {
      fs.rmdir('./data/extra/', (err) => {
        err ? console.log(err) : null;
        console.log('remove the directory....');
      })
    }, 8000)


  })

  res.send('');
})

export default router;

// 1. Create file
// 2. Read the file and display it's data on page
// 3. Write to the file's end, don't erase existing data

// rewrite this app to the fetch (rest) api standard