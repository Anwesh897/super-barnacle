var carousel, item

carousel = document.getElementsByClassName("carousel")[0]
item = document.getElementsByClassName("item")



//Showcasing images in carousel
function animate(x, y) {

    carousel.style.transform = "rotateY(-" + 36 * x + "deg)"
    for (let i = 0; i < item.length; i++) {
        item[i].style.transform = "rotateY(" + 36 * x + "deg)"
        item[i].style.backgroundImage = "url(" + "../Asset/" + (i + 1) + ".png" + ")";
        item[i].style.backgroundSize = "cover"
    }

    setTimeout(function () {
        if (x < y) {
            animate(x + 1, y)
        } else {
            function update() {
                console.log(x, y)
                animate(0, 9)
            } update()
        }
    }, 3000)
} animate(0, 9)