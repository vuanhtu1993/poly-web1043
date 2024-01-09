// Khai bao doi tuong
let sinhvien = {
    name: "Hoàng Long",
    age: 22,
    heigh: 170,
    study: function() {
        console.log("toi dang hoc js co ban")
    }
}

let manhinh = {
    width: window.innerWidth,
    heigh: window.innerHeight,
    color: screen.colorDepth,
    pixel: screen.pixelDepth,
    close: function() {
        window.close()
    },
    showInformation: function(type) {
        if(type == "screen") {
            document.querySelector("body").innerHTML = "Kích thước màn hình " + manhinh.width + "x" + manhinh.heigh
        } else if(type == "color") {
            document.querySelector("body").innerHTML = "Độ sâu màu: " + manhinh.color
        }
    }
}