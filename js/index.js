const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elText = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
    evt.preventDelafault()

    if (elInput.value <= 0 || isNaN(elInput.value)) {
        elText.classList.add("result-danger");
        elText.textcontent = "Iltimos raqam kiriting! 🥶🥵😡";
        return;
    } else {
        elText.classList.remove("result-danger");
        elText.innerHTML = null
    }
})