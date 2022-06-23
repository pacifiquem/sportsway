const express = require('express');
const dotenv = require('dotenv').config({path : './config/.env'});
const colors =  require('colors');
const app = express();



app.listen(process.env.PORT, () => {
    console.log(`server is at ${process.env.PORT}`.blue);
});