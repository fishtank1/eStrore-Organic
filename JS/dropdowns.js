let dd = $(".faq-1 div:eq(0)");
let flag = false;

$(".faq-1").click(function() {
    if(flag) {
        dd.style("display", "none");
    } else {
        dd.style("display", "flex");
    }
});