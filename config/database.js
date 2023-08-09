const mongoose = require('mongoose');
require('dotenv').config();

const connectDB =  () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology : true,
    }).then(console.log('Db Connection established'))
    .catch( (err) => {
        console.log(err);
        process.exit(1);
    })
}

module.exports = connectDB;