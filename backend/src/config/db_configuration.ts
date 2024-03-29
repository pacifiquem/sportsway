const mongoose = require('mongoose');
const colors = require('colors');

const conn = mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
    
}).then(() => console.log(`database connected successfully`))
  .catch((error: any) => {
    console.log(error);
    process.exit(1);
  });

module.exports = conn