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
            "Category" : "Mens",
            "title" : "Green Cotton Knitted Shirt",
            "description" : "Add some extra comfort to your 9-to-5 wardrobe with our new cotton shirt. Knitted from a jersey fabrication made with cotton, it prioritises durability and flexibility while maintaining a formal look, courtesy of the cutaway collar. Wear it with anything from smart-casual chinos to your best two-piece suit.",
            "price" : 4000,
            "discountPercent" : 10,
            "mainImage" : "../images/Green_Cotton_Knitted_Shirt.webp",
            "imageList" : ["../images/Green_Cotton_Knitted_Shirt-1.webp",
                "../images/Green_Cotton_Knitted_Shirt-2.webp",
                "../images/Green_Cotton_Knitted_Shirt-3.webp",
                "../images/Green_Cotton_Knitted_Shirt-4.webp",
                "../images/Green_Cotton_Knitted_Shirt-5.webp",
                "../images/Green_Cotton_Knitted_Shirt-6.webp"
            ],
            "rating" : 4,
            "details" : {
                "Fabric" : "100% Cotton",
                "Color" : "Green",
                "Closure" : "Button-up front",
                "Collar Type" : "Spread",
                "Length" : "Regular",
                "Pattern" : "Solid",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
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
            "Category" : "Womens",
            "title" : "Harvey Notched Neck Satin Shirt",
            "description" : "With a comfortable feel and beautiful drape, this garment contains branded viscose fibre that is sourced from sustainably managed forests. LENZING™ ECOVERO™ is a trademark of Lenzing AG. A timeless shirt with a sophisticated satin lustre, Regular fit, Lustrous satin fabrication, Classic collar, Gold-tone, button-through front, Long sleeves with buttoned cuffs and 100% Viscose",
            "price" : 5400,
            "discountPercent" : 20,
            "mainImage" : "../images/Harvey_Notched_Neck_Satin_Shirt.jpg",
            "imageList" : ["../images/Harvey_Notched_Neck_Satin_Shirt-1.jpg",
                "../images/Harvey_Notched_Neck_Satin_Shirt-2.jpg",
                "../images/Harvey_Notched_Neck_Satin_Shirt-3.jpg",
                "../images/Harvey_Notched_Neck_Satin_Shirt-4.jpg",
                "../images/Harvey_Notched_Neck_Satin_Shirt-5.jpg"
            ],
            "rating" : 4.5,
            "details" : {
                "Fabric" : "100% Viscose",
                "Color" : "Black",
                "Closure" : "Button-through front",
                "Collar Type" : "Classic collar",
                "Length" : "Regular",
                "Pattern" : "Printed",
                "Sleeve" : "Long sleeves",
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
            "Category" : "Womens",
            "title" : "Lexi Self Knit Tank",
            "description" : "This comfortable tank top offers an elevated look with intricate striped knit patterns, Fitted silhouette, Patterned knit fabrication, High neckline and Slip-on stylee.",
            "price" : 4000,
            "discountPercent" : 5,
            "mainImage" : "../images/Lexi_Self_Knit_Tank.jpg",
            "imageList" : ["../images/Lexi_Self_Knit_Tank-1.jpg",
                "../images/Lexi_Self_Knit_Tank-2.jpg",
                "../images/Lexi_Self_Knit_Tank-3.jpg",
                "../images/Lexi_Self_Knit_Tank-4.jpg",
                "../images/Lexi_Self_Knit_Tank-5.jpg"
            ],
            "rating" : 4.5,
            "details" : {
                "Fabric" : "52% Viscose, 48% Polyamide",
                "Color" : "Black",
                "Closure" : "Slip-on stylee",
                "Collar Type" : "High neckline",
                "Length" : "Regular",
                "Pattern" : "Intricate striped knit",
                "Sleeve" : "Sleeveless design",
                "Fit" : "Silhouette"
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
            "Category" : "Mens",
            "title" : "Red Logo Text Print Cotton Polo",
            "description" : "Elevate your casual wardrobe with this Red Logo Text Print Cotton Polo. Crafted from premium cotton, this polo offers a refined yet slim fit, perfect for any occasion. The subtle logo text print adds a touch of sophistication, while the classic polo design ensures timeless style. Ideal for those who appreciate understated elegance, this piece effortlessly combines comfort with class.",
            "price" : 3700,
            "discountPercent" : 30,
            "mainImage" : "../images/Red_Logo_Text_Print_Cotton_Polo.webp",
            "imageList" : ["../images/Red_Logo_Text_Print_Cotton_Polo-1.webp",
                "../images/Red_Logo_Text_Print_Cotton_Polo-2.webp",
                "../images/Red_Logo_Text_Print_Cotton_Polo-3.webp",
                "../images/Red_Logo_Text_Print_Cotton_Polo-4.webp",
                "../images/Red_Logo_Text_Print_Cotton_Polot-5.webp",
                "../images/Red_Logo_Text_Print_Cotton_Polo-6.webp"
            ],
            "rating" : 4.5,
            "details" : {
                "Fabric" : "100% Cotton",
                "Color" : "Red",
                "Closure" : "Quarter-button placket",
                "Collar Type" : "Polo",
                "Length" : "Regular",
                "Pattern" : "Printed",
                "Sleeve" : "Long Sleeves",
                "Fit" : "Slim"
            } 
        },
    ]};

    res.send(JSON.stringify(productDetails));
});

module.exports = router;
