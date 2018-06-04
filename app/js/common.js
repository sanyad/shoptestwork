$(document).ready(function() {

    $(".size-box a").on("click", function (e) {
        e.preventDefault();
        $(".size-box a").removeClass("active");
        $(this).addClass("active");
    });

    $(".color-box a").on("click", function (e) {
        e.preventDefault();
        $(".color-box a").removeClass("active");
        $(this).addClass("active");
    });

    $("#sharingBtn").on("click", function () {
        $(".social-sharing").toggleClass("active");
    });

    $(".collapse-sharing img").on("click", function () {
        $(".social-sharing").removeClass("active");
    });

    $('.slider-product').slick({
        infinite: true,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn')
    });

});

$(document).mouseup(function(e)
{
    var container = $(".social-sharing");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.removeClass("active");
    }
});