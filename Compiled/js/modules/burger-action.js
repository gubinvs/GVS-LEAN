//-- Взаимодействие с бургером
//-- инициализировал переменную с бургером
const burger = document.getElementById('burger'); 
//-- Инициализировал переменную с крестиком
const burgerСlose = document.querySelector('.burger_close');
//-- Инициализировал переменную с классом .header__mobile
const classBlockActive = document.querySelector('.nav-block-active');
//-- Инициализировал переменную с классом .header__mobile
const classHeaderMobile = document.querySelector('.header__mobile');

// событие клик по бургеру
burger.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active";
});

// событие клик по бургеру крестику
burgerСlose.addEventListener("click", function(e) {
    //-- добаляю классы
    classBlockActive.className = "nav-block-active";
});
