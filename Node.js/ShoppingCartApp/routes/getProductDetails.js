var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var productDetails = { pdata : [
        {
            id : "1",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            shortDescription : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. ...",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "2",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "3",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "4",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "5",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "6",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "7",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "8",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "9",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "10",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "11",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "12",
            Category : "Mens",
            title : "BLACK JACQUARD BLAZER",
            description : "Elevate your wardrobe with this Black Jacquard Blazer, where classic meets contemporary. Crafted with a subtle jacquard pattern, it offers just the right amount of texture and refinement, making it perfect for evening occasions or smart-casual settings. Tailored to perfection, this blazer exudes sophistication while providing a comfortable fit. Pair it with tailored trousers or dark jeans for an effortlessly stylish look.",
            price : 14000,
            discountPercent : 10,
            mainImage : "../images/black_jacquard_blazer-1.webp",
            imageList : ["../images/black_jacquard_blazer-2.webp",
                "../images/black_jacquard_blazer-3.webp",
                "../images/black_jacquard_blazer-4.webp",
                "../images/black_jacquard_blazer-5.webp",
                "../images/black_jacquard_blazer-6.webp",
                "../images/black_jacquard_blazer-7.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane Care guide",
                "Color" : "Black",
                "Closure" : "Button",
                "Collar Type" : "Notched Lapel",
                "Length" : "Regular",
                "Pattern" : "Self Design",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
    ]};

    res.send(JSON.stringify(productDetails));
});

module.exports = router;
