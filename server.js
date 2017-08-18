'use strict';

const express = require('express')
const cors = require('cors')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})


// require and use "multer"...

const app = express()

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))

app.get('/', (req, res)=>{
     res.sendFile(process.cwd() + '/views/index.html')
  });

app.get('/hello', (req, res)=>{
  res.json({greetings: "Hello, API"})
});

// ----- API starts here

  app.post('/api/fileanalyse', upload.single('upfile'), (req,res)=>{
    res.json({
      "file-name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size
    })
  })

// ----- API ends here

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Node.js listening ...')
});
