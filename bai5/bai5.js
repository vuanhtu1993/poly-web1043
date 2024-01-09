console.log(document)
document.querySelector("h1").innerHTML = "Document Object Model"
document.querySelector("h1").style.backgroundColor = "red"
document.querySelector("h1").style.textAlign = "center"
document.querySelector("h1").style.color = "white"
// 1. Mô phỏng toàn bộ code HTML thành đối tượng document
// 2. Có thể truy cập vào phần từ cụ thể và thay đổi nội dung, cấu trúc của phần từ đó
// 3. Element Node - Attr Node, content Node
// 4. Sử dụng Javascript để tạo node
// Khai báo DOM
var ol = document.querySelector("ol")
var li = document.createElement('li')
li.innerHTML = "Tuấn"
ol.appendChild(li)