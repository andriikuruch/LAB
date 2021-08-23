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

const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1500,
    simulateTouch: false,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
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