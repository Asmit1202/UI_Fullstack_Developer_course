var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var productData = {
    pData : [
      {
          imgUrl : "../public/images/download (4).jpg",
          name : "Mobile",
          price : 4500,
          discountPercent : 20,
          manufature : "One Plus",
          rating : 4.5,
      },
      {
          imgUrl : "../public/images/download (4).jpg",
          name : "Headset",
          price : 500,
          discountPercent : 30,
          manufature : "Boat",
          rating : 3.5,
      },
      {
          imgUrl : "../public/images/download (4).jpg",
          name : "Handwash",
          price : 20,
          discountPercent : 10,
          manufature : "dettiole",
          rating : 2,
      },
      {
          imgUrl : "../public/images/download (4).jpg",
          name : "DLSR Camera",
          price : 3200,
          discountPercent : 15,
          manufature : "Sony",
          rating : 2.5,
      }
  ]
  };

  res.send(JSON.stringify(productData));
});

module.exports = router;
