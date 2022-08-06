const mongoose = require('mongoose');
const colors = require('colors');

const conn = mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
    
}).then(() => console.log(`database connected successfully`.magenta))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

module.exports = conn