//-- Взаимодействие с блоком вопроса

const item = 6; //-- количество блоков с вопросами
const questionBlock = [];
const questionBlockNone = [];

for (let i=1; i<item+1; i++) {
    questionBlock[i] = document.getElementById('question'+i);
    questionBlockNone[i] = document.querySelector('.question'+i);
    // событие клик по блоку с вопросом
    questionBlock[i].addEventListener("click", function(e) {
    //-- добаляю класс для отображения если блок невидим и наоборот
        if (questionBlockNone[i] == document.querySelector('.question'+i)) {
            questionBlockNone[i].className = "question-list__item_answer";
        } 
        else {
            questionBlockNone[i].className = "question"+i;
        }
    });   
}

//-- Инициализировал переменную с крестиком
const burgerСlose = document.querySelector('.burger_close');
//-- Инициализировал переменную с классом .header__mobile
const classBlockActive = document.querySelector('.nav-block-active');
//-- Инициализировал переменную с классом .header__mobile
const classBurgerClose = document.querySelector('.burger_close');

// событие клик по бургеру
burger.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active";
    classBurgerClose.className = "burger_close";
    burger.className = ".none-block";
});

// событие клик по бургеру крестику
burgerСlose.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active none-block";
    classBurgerClose.className = "burger_close none-block";
    burger.className = "burger";
});

