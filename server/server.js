const next = require("next");
const express = require("express");
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mongoose.connect('mongodb+srv://portfolio:portfolio@todo-oo9wu.mongodb.net/<dbname>?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true})
.then(()=> console.log('Database Connected'))
.catch((err)=> console.log(err))

app.prepare().then(() => {
  const app = express();
  app.use(express.json({extended:false}));

  app.use('/api/v1',require('../routes/api/secret'));

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.use((err,req,res,next)=>{
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title:'Unauthorized', detail:'Unauthorized access!'});
    }
  })

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port" + PORT);
  });
});
