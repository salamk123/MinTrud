// авторизация регистрация


let autButton = document.querySelector('.header__link__log');
let regButton = document.querySelector('.header__link__reg');
let force = document.querySelector('.force');
let regForm = document.querySelector('.reg');
let authForm = document.querySelector('.sign-up');


autButton.addEventListener("click", () => {
    force.classList.add('force__active');
    authForm.classList.add('sign-up__active');
    setTimeout(() => {
        authForm.classList.add('sign-up__anime')
    }, 100)
})


regButton.addEventListener("click", () => {
    force.classList.add('force__active');
    regForm.classList.add('reg__active');
    setTimeout(() => {
        regForm.classList.add('reg__anime')
    }, 100)
})



const inputList = document.querySelectorAll(".form__field")
const labelList = document.querySelectorAll(".form__lab")
const inputTags = document.getElementsByTagName("input");
const textboxs = document.querySelectorAll(".textbox");


document.addEventListener("click", (e) => {
    textboxs.forEach(item => {
        let box = e.composedPath().includes(item);
        let i = parseInt(item.getAttribute("data-index"));
        if (!box && !inputTags[i].value) {
            labelList[i].classList.remove('form__lab__active');
        }
    });
});

document.addEventListener("click", (e) => {
    if (regForm.classList.contains('reg__anime')) {
        let box = e.composedPath().includes(regForm);
        if (!box) {
            regForm.classList.remove('reg__anime');
            force.classList.remove('force__active');
            setTimeout(() => {
                regForm.classList.remove('reg__active')
            }, 100)
        }
    }
});


document.addEventListener("click", (e) => {
    if (authForm.classList.contains('sign-up__anime')) {
        let box = e.composedPath().includes(authForm);
        if (!box) {
            authForm.classList.remove('sign-up__anime');
            force.classList.remove('force__active');
            setTimeout(() => {
                authForm.classList.remove('sign-up__active')
            }, 100)
        }
    }
});


for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('click', function () {
        labelList[i].classList.add('form__lab__active');
        console.log('add');
    })
}