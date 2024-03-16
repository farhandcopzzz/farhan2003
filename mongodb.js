const mongoose = require('mongoose');
let compass_url = 'mongodb://localhost:27017/sampledb';
let mongodb_url ='mongodb+srv://farhan_dcopzzz:dcopzzz2003@cluster0.j8ucejg.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch(() => {
    console.log(err);
});
