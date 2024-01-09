// Khai bao DOM
var h1 = document.querySelector("h1")
var div = document.querySelector('div')
var img = document.querySelector('img')

// Array
var arrImage = ["./images/1.png", "./images/2.png", "./images/3.png"]


var i = 1
function changeImage() {
    img.src = "./images/" + i + ".png"
    // img.src = "./images/" + 1 + ".png"
    i = i + 1
    if (i > 3) {
        i = 1
    }
}

var timer = setInterval(function() {
    changeImage()
}, 1000)
