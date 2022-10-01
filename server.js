const express = require('express');
const mongodb = require('./db/connect');
const app = express();
const port = process.env.PORT;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err){
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    }
})


