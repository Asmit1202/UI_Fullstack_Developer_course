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
            rating : 5,
            details : {
                "Fabric" : "63% Polyester-Recycled,31% Viscose,6% Elastane",
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
            Category : "Womens",
            title : "Taylor Double Breasted Blazer",
            description : "Featuring a chic collarless design and refined modern tailoring, this blazer offers a sophisticated edge and flattering fitTailored, fit Soft woven fabrication, Collarless v-neckline, Darts at the bust and collar, Double-breasted design with single button closure, Welts at the hip, Button cuffs.",
            price : 8500,
            discountPercent : 10,
            mainImage : "../images/Taylor_double_breasted_blazer.jpg",
            imageList : ["../images/Taylor_double_breasted_blazer-1.jpg",
                "../images/Taylor_double_breasted_blazer-2.jpg",
                "../images/Taylor_double_breasted_blazer-3.jpg",
                "../images/Taylor_double_breasted_blazer-4.jpg",
                "../images/Taylor_double_breasted_blazer-5.jpg"
            ],
            rating : 4.5,
            details : {
                "Fabric" : "78% Polyester, 17% Viscose, 5% Elastane. Lining: 95% Polyester, 5% Elastane",
                "Color" : 28946720,
                "Closure" : "Button cuffs",
                "Collar Type" : "Collarless v-neckline, Darts at the bust and collar",
                "Length" : "Tailored Fit",
                "Pattern" : "chic collarless",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Tailored"
            } 
        },
        {
            id : "3",
            Category : "Kids",
            title : "Back Print Denim Jacket with Detachable Hood",
            description : "Enhance Mini's fashion sense with this jacket from the 11th Main collection, featuring a detachable hood, long sleeves, buttoned cuffs, patch pockets, Detachable hood, Back cartoon print and Patch pocket. A must-have addition to any little one's cool outlook day out!.",
            price : 2200,
            discountPercent : 32,
            mainImage : "../images/Back_Print_Denim_Jacket_with_Detachable_Hood.jpg",
            imageList : ["../images/Back_Print_Denim_Jacket_with_Detachable_Hood-1.jpg",
                "../images/Back_Print_Denim_Jacket_with_Detachable_Hood-2.jpg",
                "../images/Back_Print_Denim_Jacket_with_Detachable_Hood-3.jpg",
                "../images/Back_Print_Denim_Jacket_with_Detachable_Hood-4.jpg",
                "../images/Back_Print_Denim_Jacket_with_Detachable_Hood-5.jpg",
                "../images/Back_Print_Denim_Jacket_with_Detachable_Hood-6.jpg"
            ],
            rating : 4,
            details : {
                "Fabric" : "100% cotton",
                "Color" : "Denim",
                "Closure" : "buttoned cuffs",
                "Collar Type" : "detachable hood",
                "Length" : "Regular",
                "Pattern" : "Back cartoon print",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Regular"
            } 
        },
        {
            id : "4",
            Category : "Womens",
            title : "Shiloh Printed Midi Dress",
            description : "Featuring a fluidly moving drape and flattering cinch, this dress offers a refined take on femininity, Regular fit, Lightweight woven fabrication, Surplice neckline with hook and eye fastening, Long blouson sleeves, Button cuffs, Removable waist tie, Gathering through the bodice, Flowing midi skirt, Hanky hemline and Lined",
            price : 10000,
            discountPercent : 2,
            mainImage : "../images/shiloh_printed_midi_dress.jpg",
            imageList : ["../images/shiloh_printed_midi_dress-1.jpg",
                "../images/shiloh_printed_midi_dress-2.jpg",
                "../images/shiloh_printed_midi_dress-3.jpg",
                "../images/shiloh_printed_midi_dress-4.jpg"
            ],
            rating : 4,
            details : {
                "Fabric" : "100% Polyester",
                "Color" : 29163201,
                "Closure" : "Button cuffs",
                "Collar Type" : "Surplice neckline with hook and eye fastening",
                "Length" : "Size 8",
                "Pattern" : "Flowing midi skirt",
                "Sleeve" : "Long blouson sleeves",
                "Fit" : "Regular"
            } 
        },
        {
            id : "5",
            Category : "Mens",
            title : "Brown Nylon Jacket",
            description : "Make layering a stylish and dapper element in your outfit goals by opting for classy styles such as this casual jacket from SELECTED. Featuring a classic zipped closure, this piece offers style and comfort in great amounts, making it a must-have closet essential for all-season wear.",
            price : 9000,
            discountPercent : 50,
            mainImage : "../images/brown_nylon_jacket.webp",
            imageList : ["../images/brown_nylon_jacket-1.webp",
                "../images/brown_nylon_jacket-2.webp",
                "../images/brown_nylon_jacket-3.webp",
                "../images/brown_nylon_jacket-4.webp",
                "../images/brown_nylon_jacket-5.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "100% Nylon",
                "Color" : "Brown",
                "Closure" : "Zip",
                "Collar Type" : "Spread",
                "Length" : "Regular",
                "Pattern" : "Solid",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Regular"
            } 
        },
        {
            id : "6",
            Category : "Kids",
            title : "Babyhug Woven Full Sleeves Foil Printed Kurta Dhoti Set With Embroidery - Maroon",
            description : "Maroon Color Kurta With Gold Dhoti Pant Set Kurta design: Maroon color solid curved shapr kurta has A-line shape, Regular style, mandarin collar, long regular sleeves, 2 pockets, above knee length with straight hem, silk blend machine weave fabric. Pyjamas design: Gold color solid dhoti pant has an elasticated waistband and slip-on closure.",
            price : 1300,
            discountPercent : 22,
            mainImage : "../images/babyhug_woven_foli_printed_kurti_dhoti.webp",
            imageList : ["../images/babyhug_woven_foli_printed_kurti_dhoti-1.webp",
                "../images/babyhug_woven_foli_printed_kurti_dhoti-2.webp",
                "../images/babyhug_woven_foli_printed_kurti_dhoti-3.webp",
                "../images/babyhug_woven_foli_printed_kurti_dhoti-4.webp",
                "../images/babyhug_woven_foli_printed_kurti_dhoti-5.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "Polyester",
                "Color" : "Maroon",
                "Closure" : "Front Buttons",
                "Collar Type" : "Mandarin Collar/ Bandh Gala",
                "Length" : "Full Length",
                "Pattern" : "Embroidered, Foil Print",
                "Sleeve" : "Full Sleeves",
                "Fit" : "Regular"
            } 
        },
        {
            id : "7",
            Category : "Womens",
            title : "Courtney Belted Bardot Top",
            description : "A refined top with a flattering waist cinch and delicate embellishments, Fit and flare silhouette, Comfortable jersey fabrication, Bardot neckline with folded band, Long sleeves, Adjustable belt with embellished buckle, Back zip fastening and Lined.",
            price : 5800,
            discountPercent : 10,
            mainImage : "../images/Courtney_Belted_Bardot_Top.jpg",
            imageList : ["../images/Courtney_Belted_Bardot_Top-1.jpg",
                "../images/Courtney_Belted_Bardot_Top-2.jpg",
                "../images/Courtney_Belted_Bardot_Top-3.jpg",
                "../images/Courtney_Belted_Bardot_Top-4.jpg",
                "../images/Courtney_Belted_Bardot_Top-5.jpg"
            ],
            rating : 4,
            details : {
                "Fabric" : "93% Polyester, 7% Elastane. Lining: 95% Polyester, 5% Elastane",
                "Color" : "Black",
                "Closure" : "Back zip fastening",
                "Collar Type" : "Bardot neckline with folded band",
                "Length" : "Regular",
                "Pattern" : "Comfortable jersey",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Fit and flare"
            } 
        },
        {
            id : "8",
            Category : "Mens",
            title : "Black Cotton Knitted Shirt",
            description : "Men's black cotton knitted shirt from SELECTED HOMME.",
            price : 4000,
            discountPercent : 10,
            mainImage : "../images/Black_Cotton_Knitted_Shirt.webp",
            imageList : ["../images/Black_Cotton_Knitted_Shirt-1.webp",
                "../images/Black_Cotton_Knitted_Shirt-2.webp",
                "../images/Black_Cotton_Knitted_Shirt-3.webp",
                "../images/Black_Cotton_Knitted_Shirt-4.webp",
                "../images/Black_Cotton_Knitted_Shirt-5.webp",
                "../images/Black_Cotton_Knitted_Shirt-6.webp"
            ],
            rating : 3.5,
            details : {
                "Fabric" : "100% Cotton",
                "Color" : "Black",
                "Closure" : "Button-up front",
                "Collar Type" : "Spread",
                "Length" : "Regular",
                "Pattern" : "Solid",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "9",
            Category : "Womens",
            title : "Lydia Oversized Linen Shirt",
            description : "Her garment contains linen, a natural fibre. A comfortable, airy fabric, linen is known for its breathable nature and durability. Airy linen and statement print combine for this comfortable, oversized style that evokes dreamy holiday vibes, Oversized fit, Luxe linen fabrication, Classic collar, Patch pocket at the bust, Long cuffed sleeves, Button-through front and High-low hem.",
            price : 5400,
            discountPercent : 20,
            mainImage : "../images/lydia_oversized_linen_shirt.jpg",
            imageList : ["../images/lydia_oversized_linen_shirt-1.jpg",
                "../images/lydia_oversized_linen_shirt-2.jpg",
                "../images/lydia_oversized_linen_shirt-3.jpg",
                "../images/lydia_oversized_linen_shirt-4.jpg",
                "../images/lydia_oversized_linen_shirt-5.jpg"
            ],
            rating : 4,
            details : {
                "Fabric" : "100% Linen",
                "Color" : "Amalfi White",
                "Closure" : "Button-through front",
                "Collar Type" : "Classic collar",
                "Length" : "AU 8/XS",
                "Pattern" : "Airy linen and statement print",
                "Sleeve" : "Long cuffed sleeves",
                "Fit" : "Oversized"
            } 
        },
        {
            id : "10",
            Category : "Kids",
            title : "Babyhug Full Sleeves Stretchable Party Suit - Beige",
            description : "Get your little one party-ready with the stylish Babyhug Full Sleeves Stretchable Party Suit in Beige. This elegant ensemble is designed to keep your child comfortable while looking their absolute best for special occasions. Made from premium-quality stretchable fabric, this suit ensures unrestricted movement and a perfect fit.",
            price : 2300,
            discountPercent : 28,
            mainImage : "../images/babyhug_stretchable_party_suit.webp",
            imageList : ["../images/babyhug_stretchable_party_suit-1.webp",
                "../images/babyhug_stretchable_party_suit-2.webp",
                "../images/babyhug_stretchable_party_suit-3.webp",
                "../images/babyhug_stretchable_party_suit-4.webp",
                "../images/babyhug_stretchable_party_suit-5.webp",
            ],
            rating : 4.5,
            details : {
                "Fabric" : "Poly Blends",
                "Color" : "Beige",
                "Closure" : "Front-Buttons",
                "Collar Type" : "Collar Neck",
                "Length" : "Full Length",
                "Pattern" : "Plain",
                "Sleeve" : "Full Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "11",
            Category : "Mens",
            title : "Dark Green Slim Fit Henley T-shirt",
            description : "Men's Henley t-shirt made from premium quality fabric. Features contrast tipping around the collar and embroidered logo print on the chest. Style it with beige pants and sneakers for a smart-casual ensemble.",
            price : 3000,
            discountPercent : 50,
            mainImage : "../images/Dark_Green_Slim_Fit_Henley_T-shirt.webp",
            imageList : ["../images/Dark_Green_Slim_Fit_Henley_T-shirt-1.webp",
                "../images/Dark_Green_Slim_Fit_Henley_T-shirt-2.webp",
                "../images/Dark_Green_Slim_Fit_Henley_T-shirt-3.webp",
                "../images/Dark_Green_Slim_Fit_Henley_T-shirt-4.webp",
                "../images/Dark_Green_Slim_Fit_Henley_T-shirt-5.webp",
            ],
            rating : 4.5,
            details : {
                "Fabric" : "100% Cotton",
                "Color" : "Green",
                "Closure" : "Button",
                "Collar Type" : "Henley",
                "Length" : "Regular",
                "Pattern" : "Solid",
                "Sleeve" : "Short Sleeves",
                "Fit" : "Slim"
            } 
        },
        {
            id : "12",
            Category : "Kids",
            title : "Embroidered Blue Top And Flared Lehenga",
            description : "Top with embroidery and a front opening, Top with pleated armholes and hem, Flared lehenga with an elastic at the back of the waist and an adjustable drawstring adorned with multicolored fringe tassels and Embroidered lehenga with a side closure and frilly hem.",
            price : 7000,
            discountPercent : 2,
            mainImage : "../images/Embroidered_blue_lehenga.webp",
            imageList : ["../images/Embroidered_blue_lehenga-1.webp",
                "../images/Embroidered_blue_lehenga-2.webp",
                "../images/Embroidered_blue_lehenga-3.webp",
                "../images/Embroidered_blue_lehenga-4.webp",
                "../images/Embroidered_blue_lehenga-5.webp",
            ],
            rating : 3.5,
            details : {
                "Fabric" : "Viscose Silk",
                "Color" : "Blue",
                "Closure" : "Top closure is Front opening and Bottom closure is Side closuren",
                "Collar Type" : "V-neck",
                "Length" : "Regular",
                "Pattern" : "Embroidered ",
                "Sleeve" : "Sleeveless",
                "Fit" : "Slim"
            } 
        },
    ]};

    res.send(JSON.stringify(productDetails));
});

module.exports = router;
