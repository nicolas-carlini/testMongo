const mongoose = require('mongoose');

const uri =
  "mongodb+srv://nicolas:tkiGFGfVdyBvF18E@cluster0-qnsci.gcp.mongodb.net/PHPNGINX?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db=>{
    console.log('DataBase is connected')
})