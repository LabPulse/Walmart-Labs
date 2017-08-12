const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://walmartlabs:walmartlabs1234@ds117929.mlab.com:17929/walmartlabs', (err) => {
    if (err) return console.log(err);
    console.log('connected to tovia\'s mlab\'s mongoDB')
})

const itemSchema = new Schema({
    user: String,
    name: String,
    itemId: Number,
    mediumImage: String,
    msrp: Number,
    salePrice: Number,
    categoryPath: String,
    standardShipRate: Number,
    upc: String,
    isTwoDayShippingEligible: Boolean,
})

module.exports = mongoose.model('item', itemSchema);