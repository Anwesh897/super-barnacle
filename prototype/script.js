var inputValue = document.getElementById("inputValue");

inputValue.onchange = function () {
    console.log(inputValue.value)
}

var valueChanger = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", ""]
/// Function to render more number of div
var carousel, create, item;

inputValue.onchange = function render() {
    carousel = document.getElementsByClassName("carousel")[0];
    for (let i = 0; i < inputValue.value; i++) {
        create = document.createElement("div")
        create.setAttribute("class", `${valueChanger[i]}`)
        create.style.transform = `rotateY(${120 * i}deg) translateZ(150px) rotateY(-${120 * i}deg)`

        item = document.createElement("div")
        item.setAttribute("class", "item")
        item.style.background = "rgba(94, 17, 17, 0.514)"

        create.append(item)
        carousel.append(create)
    }

}