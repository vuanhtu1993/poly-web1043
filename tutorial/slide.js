// Biến toàn cục
var slideIndex = 0
var interval

function slideShow() {
  var slides = document.querySelectorAll(".slide")
  // Reset
  if (slideIndex > slides.length - 1) {
    slideIndex = 0
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1
  }
  // Invisiable image
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[slideIndex].style.display = "block"
}

slideShow()

function next() {
  slideIndex = slideIndex + 1
  slideShow()
}

function previous() {
  slideIndex = slideIndex - 1
  slideShow()
}

function autoPlay() {
  interval = setInterval(function () {
    next()
  }, 2000)
}

function stop() {
  clearInterval(interval)
}
