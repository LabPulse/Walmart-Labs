const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://walmartlabs:walmartlabs1234@ds135382.mlab.com:35382/tovia', (err) => {
    if (err) return console.log(err);
    console.log('connected to tovia\'s mlab\'s mongoDB')
})

const itemSchema = new Schema({
    user: String,
    message: String,
    passPhrase: String,
})

module.exports = mongoose.model('item', itemSchema);