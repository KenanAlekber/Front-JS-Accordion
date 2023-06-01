let question = document.querySelectorAll(".question");
let btn = document.querySelectorAll(".btn");
let texts = document.querySelectorAll(".hidden");


btn.forEach(button => {
    button.addEventListener("click", function () {

        if (button.classList[1] !== "open") {

            btn.forEach(b => {
                b.style.transform = "rotate(0)";
                b.classList.remove("open");
            })

            this.style.transform = "rotate(45deg)";
            texts.forEach(text => {
                text.classList.add("texts");
                text.classList.remove("show");
            })

            this.parentElement.nextElementSibling.classList.add("show");
            this.parentElement.nextElementSibling.classList.remove("texts");
            this.classList.add("open");
        }
        else {
            this.parentElement.nextElementSibling.classList.add("texts");
            this.parentElement.nextElementSibling.classList.remove("show");
            this.classList.remove("open");
            this.style.transform = "rotate(0)";
        }
    })
});