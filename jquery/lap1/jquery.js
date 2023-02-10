let slider = setInterval(slideShow, 1000);

let count = 0;
function slideShow() {
    if (count == 5) {
        count = 0;
        $(".slider img").css({display: "none"});
        $($(".slider img")[count]).css({display: "block"});
        count++;
    } else {
        $(".slider img").css({display: "none"});
        $($(".slider img")[count]).css({display: "block"});
        count++;
    }
}

$(".stop-btn").on("click", function () {
    clearInterval(slider);
});

$(".list-sec .col .img-1").on("click", function () {
    $(".list-sec .col .text.num1").toggleClass("active");
})

$(".list-sec .col .img-2").on("click", function () {
    $(".list-sec .col .text.num2").toggleClass("active");
})

$(".list-sec .col .img-3").on("click", function () {
    $(".list-sec .col .text.num3").toggleClass("active");
})