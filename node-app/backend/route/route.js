import express from 'express';
let router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { content: `page res is ${ res.statusCode }` });
})

export default router;

// 1. Create file
// 2. Read the file and display it's data on page
// 3. Write to the file's end, don't erase existing data

// rewrite this app to the fetch (rest) api standard