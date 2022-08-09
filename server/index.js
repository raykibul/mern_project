const express = require('express');
 
require("./db/conn");
const cors = require("cors");
const router = require("./routes/router");
const UserModel = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

 
app.use(router);


const port = "3020"
const host ="127.0.0.1"
app.listen(port,host,()=>{
    console.log('server running: port 3001');
});

 