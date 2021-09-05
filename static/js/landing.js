const aboutCompanyLink = document.querySelector('.about-company__link');
aboutCompanyLink.addEventListener('click', evt => {
    aboutCompanyLink.classList.add('open');
});


const bullets = [
    {
        title: 'Собственное производство',
        description: 'Позволяет делать выгодные условия на заказ любых стекляных и противопожарных конструкций.',
        image_path: '../static/images/manufack.png'
    },
    {
        title: 'Аванс 10%',
        description: 'Проект конструкции бесплатно, до 3х месяцев фиксация цены. Дополнительный Бонус - 10% скидка на монтаж.',
        image_path: '../static/images/vallet.png'
    },
    {
        title: 'За 3 дня под ключ',
        description: 'Перегородки и двери из наличия за 3 дня. Только стандартная серия. Уточняйте размеры у менеджеров.',
        image_path: '../static/images/like.png'
    },
];

new Swiper('.slider-container', {
    loop: true,
    speed: 1500,
    simulateTouch: false,
    spaceBetween: 0,
    pagination: {
        el: '.slider-pagination',
        clickable: true,
        bulletElement: 'div',
        bulletClass: 'slider-pagination-bullet',
        bulletActiveClass: 'slider-pagination-bullet-active',
        renderBullet: function (index, className) {
            return `<div class=${className}>
                        <img src="${bullets[index].image_path}">
                        <span>${bullets[index].title}</span>
                        <p>${bullets[index].description}</p>
                    </div>`;
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const catalogBullets = ["Перегородки", "Двери", "Стеклянные конструкции"];

new Swiper('.catalog-slider-container', {
    loop: true,
    speed: 0,
    simulateTouch: false,
    spaceBetween: 0,
    pagination: {
        el: '.catalog-slider-pagination',
        clickable: true,
        bulletElement: 'div',
        bulletClass: 'catalog-slider-pagination-bullet',
        bulletActiveClass: 'catalog-slider-pagination-bullet-active',
        renderBullet: function (index, className) {
            return `<div class="${className}">${catalogBullets[index]}</div>`;
        },
    },
});

new Swiper('.swiper-inst', {
    loop: true,
    speed: 500,
    simulateTouch: false,
    spaceBetween: 0,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 6,
    breakpoints: {
        1400: {
            slidesPerView: 8,
        },
        1920: {
            slidesPerView: 10,
        }
    },
});