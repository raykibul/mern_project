const mongoose = require("mongoose");
 
const DB = "MONGO_DB_ATLAS_CONNECTION_STRING";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName: 'mern_project',
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));