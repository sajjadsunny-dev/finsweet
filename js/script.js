let btnContainer = document.querySelector(".navbar");
let btns = btnContainer.querySelectorAll(".nav-link");
let btnsArr = Array.from(btns);

btnsArr.map((items) => {
    items.addEventListener("click", function () {
        let current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
});



// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function showSlides(n) {
//     let clientReviewId = document.querySelector("#client_review");
//     let slides = clientReviewId.querySelectorAll(".review");
//     let slidesArr = Array.from(slides);

//     if (n > slidesArr.length) {
//         slideIndex = 1;
//     }

//     if (n < 1) {
//         slideIndex = slidesArr.length;
//     }

//     slidesArr.map((items) => {
//         items.style.display = "none";

//     });

//     slidesArr[slideIndex - 1].style.display = "block";
// }