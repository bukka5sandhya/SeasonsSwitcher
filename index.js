let seasonSmallImageELe = document.getElementById("seasonSmallImage");
let seasonMediumImageEle = document.getElementById("seasonMediumImage");

let springSmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

let summerSmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

let autumnSmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let winterSmallImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImg = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springButton(){
    seasonSmallImageELe.src = springSmallImg;
    seasonMediumImageEle.src= springMediumImg;
}
function summerButton(){
   seasonSmallImageELe.src= summerSmallImg;
    seasonMediumImageEle.src= summerMediumImg;
}
function autumnButton(){
   seasonSmallImageELe.src= autumnSmallImg;
   seasonMediumImageEle.src= autumnMediumImg;
}
function winterButton(){
    seasonSmallImageELe.src=winterSmallImg;
    seasonMediumImageEle.src=winterMediumImg;
}