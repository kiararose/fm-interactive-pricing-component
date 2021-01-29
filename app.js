var $slider = $("#slider");
var $fill = $(".bar .fill");
var $views = $("#views");
var $price = $("#price");
var $pricemobile = $("#price-mobile");
var $toggle = $("#toggle");

$slider.on("input", setBar);
$slider.on("input", setPagePriceMonth);
$toggle.on("input", setPagePriceMonth);
setBar();
setPagePriceMonth();

function setBar() {
    $fill.css("width", $slider.val() - 10 + "%");
}

    /*
    - 10K pageviews / $8 per month
    - 50K pageviews / $12 per month
    - 100K pageviews / $16 per month
    - 500k pageviews / $24 per month
    - 1M pageviews / $36 per month
    */

function setPagePriceMonth() {
    let price;

    if ($slider.val() == 10) {
        $views.html($slider.val() + "K ");
        price = 8;
    } else if ($slider.val() == 35){
        $views.html( "50K ");
        price = 12;
    } else if ($slider.val() == 60){
        $views.html( "100K ");
        price = 16;
    } else if ($slider.val() == 85){
        $views.html( "500K ");
        price = 24;
    } else {
        $views.html( "1M ");
        price = 36;
    }

    if ($toggle.is(':checked')) {
        $price.html(`$${(price - (price * 25) / 100).toFixed(2)}`);
        $pricemobile.html(`$${(price - (price * 25) / 100).toFixed(2)}`);
    } else {
        $price.html(`$${price}.00`);
        $pricemobile.html(`$${price}.00`);
    }
}