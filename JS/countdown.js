// MAKE WHEN VIEWPORT REACHES SECTION WITH NUMBERS, CURRENTLY MADE ON PAGE IS LOADED

let curatedProduct1Max = 5000;
let curatedProduct2Max = 800;
let productCategoriesMax = 40;

let curatedProduct1Min = 4200;
let curatedProduct2Min = 0;
let productCategoriesMin = 0;


let curatedProduct1 = $(".g-2 h2");
let curatedProduct2 = $(".g-3 h2");
let productCategories = $(".g-4 h2");

$( document ).ready(function() {
    var interval1 = setInterval(() => {
        if((curatedProduct1Min >= curatedProduct1Max) && (curatedProduct2Min >= curatedProduct2Max))
        {
            clearInterval(interval1);
            curatedProduct1.html('5,000+');
            curatedProduct2.html('800+');
        }
        
        if(curatedProduct1Min != curatedProduct1Max) {
            curatedProduct1Min += 4;
        }

        if(curatedProduct2Min != curatedProduct2Max) {
            curatedProduct2Min += 4;
        }

        curatedProduct1.html(curatedProduct1Min + '+');
        curatedProduct2.html(curatedProduct2Min + '+');
    }, 10);

    var interval2 = setInterval(() => {
        if(productCategoriesMin >= productCategoriesMax)
        {
            clearInterval(interval2);
            productCategories.html('40+');
        }

        if(productCategoriesMin != productCategoriesMax) 
        {
            productCategoriesMin += 2;
        }

        productCategories.html(productCategoriesMin + '+');
    }, 101);
});