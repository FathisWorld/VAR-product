function addSwipeEvent(theDom, eventName, handleEvent) {
    // console.log(theDom, eventName, handleEvent);
    var eStart = 0,
        eEnd = 0;

    theDom.addEventListener('touchstart', function(e) {
        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eStart = e.targetTouches[0].clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eStart = e.targetTouches[0].clientX;
                break;
            default:
                eStart = e.targetTouches[0].clientY;
                break;
        }
    }, false);

    theDom.addEventListener('mousedown', function(e) {
        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eStart = e.clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eStart = e.clientX;
                break;
            default:
                eStart = e.clientY;
                break;
        }
    }, false);

    theDom.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false)

    theDom.addEventListener('mousemove', function(e) {
        e.preventDefault();
    }, false)

    theDom.addEventListener('touchend', function(e) {

        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eEnd = e.changedTouches[0].clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eEnd = e.changedTouches[0].clientX;
                break;
            default:
                eEnd = e.changedTouches[0].clientY;
                break;
        }

        var moveVal = eEnd - eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal < 0 && moveAbsVal > 30 && eventName == "swipeUp") {
            // console.log("swipeUp");
            handleEvent();
        }

        // swipeDown
        if (moveVal > 0 && moveAbsVal > 30 && eventName == "swipeDown") {
            // console.log("swipeDown");
            handleEvent();
        }

        // swipeLeft
        if (moveVal < 0 && moveAbsVal > 30 && eventName == "swipeLeft") {
            // console.log("swipeLeft");
            handleEvent();
        }

        // swipeRight
        if (moveVal > 0 && moveAbsVal > 30 && eventName == "swipeRight") {
            // console.log("swipeRight");
            handleEvent();
        }

    }, false);

    theDom.addEventListener('mouseup', function(e) {

        switch (eventName) {
            case "swipeDown" | "swipeUp":
                eEnd = e.clientY;
                break;
            case "swipeLeft" | "swipeRight":
                eEnd = e.clientX;
                break;
            default:
                eEnd = e.clientY;
                break;
        }

        var moveVal = eEnd - eStart;
        var moveAbsVal = Math.abs(moveVal);

        // swipeUp
        if (moveVal < 0 && moveAbsVal > 30 && eventName == "swipeUp") {
            // console.log("swipeUp");
            handleEvent();
        }

        // swipeDown
        if (moveVal > 0 && moveAbsVal > 30 && eventName == "swipeDown") {
            // console.log("swipeDown");
            handleEvent();
        }

        // swipeLeft
        if (moveVal < 0 && moveAbsVal > 30 && eventName == "swipeLeft") {
            // console.log("swipeLeft");
            handleEvent();
        }

        // swipeRight
        if (moveVal > 0 && moveAbsVal > 30 && eventName == "swipeRight") {
            // console.log("swipeRight");
            handleEvent();
        }

    }, false);
}

let swipe = document.querySelector(".g-17");
let product = document.querySelector(".product");
let kind = document.querySelector(".kind");
let xl = document.querySelector(".xl");
let xlspan = document.querySelectorAll(".xl span");
let price = document.querySelector(".price-g");
let heart = document.querySelector(".hart .white")
let heartd = document.querySelector(".hart")
let imred = document.querySelector(".hart .red");
let bag = document.querySelector(".bag");
let bagimg = document.querySelector(".bag img");
let right = document.querySelector(".right");
let ggg = document.querySelector(".g-17");

addSwipeEvent(swipe, "swipeDown", function() {
    kind.classList.add("kindactive");
    xl.classList.add("xlactive");
    price.classList.add("priceactive");
    heartd.classList.add("hartactive");
    product.classList.add("proactive");
    bag.classList.add("bagactive");
    bagimg.classList.add("imbactive");
    right.classList.add("rightback");
    ggg.classList.add("g-17ggg");
    right.classList.remove("right");
    setInterval(back(), 4000)
});

function back() {
    bagimg.classList.add("imbactiveback");
    bagimg.classList.remove("imbactive");
    price.classList.remove("priceactive");
    price.classList.add("priceback");
}


heart.onclick = () => {
    heart.style.display = "none";
    imred.style.cssText = "position: absolute; width: 19px; height: 16.89px; cursor: pointer; display: block;"
}