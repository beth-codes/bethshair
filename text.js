//IMAGE SLIDER FUNCTION
var slides = document.querySelectorAll('#image-slider .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

//READ MORE FUNCTION
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "More";
        moreText.style.display = "none"
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Less";
        moreText.style.display = "inline";

    }
}

// //DTOP DOWN MENU
// var dropDown = document.querySelectorAll(".drop-down-menu");
// dropDown.addEventListener("mouseover",  )

function displayFunction() {
   var dropDown = document.querySelectorAll(".drop-down-menu");
   if (dropDown.style.display === "none") {
       dropDown.style.display = "block";
   } else {
       dropDown.style.display = "none";
   }
}
   

