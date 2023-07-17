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