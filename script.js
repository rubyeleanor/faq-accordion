const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const icons = document.querySelectorAll('.q-icon');

let isOpen = false;

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide')


    }
    )
};



//select corresponding answer and unhide