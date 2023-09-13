
var render, para;
var content = ["Do not go gentle into that good night",
    "Old age should burn and rave at close of day",
    "Rage Rage against the dying of the light"]

render = document.getElementsByClassName("render")[0]

console.log(render)

function write(x, y) {
    console.log(x, y)
    if (x < y) {
        para = document.createElement("h3")
        render.append(para)
        para.innerHTML = content[x]
        write(x + 1, y)
    }
    /// erase after everything is written
    // else {
    //     setTimeout(function () {
    //         render.innerHTML = ""
    //     }, 1000)
    // }
} write(0, 3)