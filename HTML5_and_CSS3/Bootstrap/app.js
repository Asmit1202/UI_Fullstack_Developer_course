var sliderImageList = [
    {
        imgUrl: "https://c4.wallpaperflare.com/wallpaper/219/157/180/ferrari-dino-246-gt-wallpaper-preview.jpg",
        title: "The Red Car",
        subtitle: "The Most Effordable Car of the Year"
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Wyt08zhzd_BfLJYjS5_04oF0qSeSDRfGQ&s",
        title: "The luxury Car",
        subtitle: "The Most Luxirous Car of the Year"
    },
    {
        imgUrl: "https://e1.pxfuel.com/desktop-wallpaper/349/575/desktop-wallpaper-tron-style-lamborghini-aventador-tron-cars-thumbnail.jpg",
        title: "The Stylish Car",
        subtitle: "The Most Stylish Car of the Year"
    },
    {
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvpIhSkgLER_DD_0vze_8BkB_d3xtO36Z0Vg&s",
        title: "The Sports Car",
        subtitle: "The Most Fatest Car of the Year"
    }
];

var slideImageTemplate = "";
document.addEventListener("DOMContentLoaded", () => {
    slideImageTemplate = Handlebars.compile($("#slideImageTemplate").html());
    sliderImageList.forEach((item, index) => {
        if (index == 0){
            item.activeClass = "active";
        }
        $(".carousel-inner").append(slideImageTemplate(item));
    });
})