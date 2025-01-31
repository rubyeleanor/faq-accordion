const questions = document.querySelectorAll('.q');
const answers = document.querySelectorAll('.answer');
const icons = document.querySelectorAll('.q-icon');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide');
        if (icons[i].src.includes('plus')) {
            icons[i].src = "./assets/images/icon-minus.svg";
            questions[i].setAttribute('aria-expanded', 'true')
        } else {
            icons[i].src = "./assets/images/icon-plus.svg";
            questions[i].setAttribute('aria-expanded', 'false')
        }
    }
    )
};




