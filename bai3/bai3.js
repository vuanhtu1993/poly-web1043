// Vong lap
// FOR
// Xác định địa chỉ
var ul = document.querySelector("ul")
var sum = 0
for(var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        sum = sum + i
        // Tạo phần tử <li> bằng javascript
        var li = document.createElement("li")
        li.innerHTML = i
        // Thêm <li> vào cuối thẻ <ul>
        ul.appendChild(li)
    }
}

