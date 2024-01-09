// Khai bao mang du lieu
var articles_arr = [
  "Localisation and Translation on the Web",
  "Comparing Node JavaScript to JavaScript in the Browser",
  "Responsible JavaScript",
  "Beginner JavaScript Notes",
  "JavaScript Operator Lookup"
]

// Khai bao DOM
var searchBtn = document.querySelector('.search')
var closeBtn = document.querySelector(".close-btn")
var modal = document.querySelector(".modal")
var input = document.querySelector('#modal-search-input')
var btn_close = document.querySelector(".modal-close")
var articles = document.querySelector("#articles")

function search() {
  var search = input.value
  filter(search)
}

input.onkeyup = function (event) {
  var text = event.target.value
}

document.onkeydown = function (e) {
  if (e.keyCode == 13) {
    var search = input.value
    filter(search)
  }
}

btn_close.onclick = function () {
  modal.style.display = "none"
}

searchBtn.onclick = function () {
  modal.style.display = "block"
}

function render(arr, search = "") {
  // Dữ liệu
  // DOM
  // clear
  console.log(search);
  articles.innerHTML = ""
  for (var i = 0; i < arr.length; i++) {
    // Tạo h2
    var h2 = document.createElement('h2')
    let str = ""
    const index = arr[i].toLowerCase().indexOf(search.toLowerCase())
    console.log(index);
    if (index > -1) {
      str = arr[i].substring(0, index) + "<span class='highlight'>" + arr[i].substring(index, index + search.length) + "</span>" + arr[i].substring(index + search.length)
    } else {
      str = arr[i]
    }
    h2.innerHTML = str

    articles.appendChild(h2)
  }
}

render(articles_arr)

function filter(search) {
  var new_arr = articles_arr.filter(function (article) {
    // Chạy điều kiện lọc
    if (article.toLowerCase().includes(search.toLowerCase())) {
      return true
    }
    return false
  })

  render(new_arr, search)
}
