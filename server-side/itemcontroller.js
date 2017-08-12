const Item = require("./database");
const itemController = {};

itemController.createItem = (req, res, next) => {
    console.log('you are now in userController.createItem function')
    Item.create(req.body, (err, user) => {
        if (err) return res.send(false);
        else {
            res.status(200);
            req.body.user = user.user;
            req.body.name = user.name;
            req.body.itemId = user.itemId;
            req.body.mediumImage = user.mediumImage;
            req.body.msrp = user.msrp;
            req.body.salePrice = user.salePrice;
            req.body.categoryPath = user.categoryPath;
            req.body.standardShipRate = user.standardShipRate;
            req.body.upc = user.upc;
            req.body.isTwoDayShippingEligible = user.isTwoDayShippingEligible;
            next();
        }
    })
}

itemController.getItem = (req, res, next) => {
    console.log('you are now in userController.getItem function')
    console.log(req.body)
    User.findOne(req.body.itemId, (err, user) => {
        if (err) return res.send(false);
        else{
            res.status(200);
            res.send(user)
        }
    })
}

module.exports = itemController;