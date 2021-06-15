new Swiper('.slider__image', {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".slider__image" // Если больше одного слайдера, то стираем эту строку кода
    },

    breakpoints: {
        250: {
            slidesPerView: 1,
        },

        480: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },

        1200: {
            slidesPerView: 4,
        },

        1600: {
            slidesPerView: 5,
        }
    },

    watchOverflow: true,

    spaceBetween: 30,

    slidesPerGroup: 1,

    initialSlide: 0, //Слайд, с которого все начинается*(начинается с 0)

    freeMode: true,

    autoplay: {
        delay: 1000,
        stopOnLastSlide: true,
        disableOnInteraction: true,
    },

    speed: 800,

});

/*wow = new WOW(
{
boxClass:     'wow',
animateClass: 'animated',
offset:       0,
mobile:       true,
live:         true
}
)
wow.init();*/

var navbar = document.getElementById('nav');
var navToggle = document.getElementById('navToggle');
var headerLink = document.getElementsByClassName('nav__link');
var container = document.getElementsByClassName('container');

navToggle.addEventListener('click', event => {

    if(navToggle.classList.contains('shown')) {
        navbar.style.display = "none";
        navToggle.classList.remove('shown');
    }
    else {
        navToggle.classList.add('shown');
        navbar.style.display = "flex";
    }

});

for(let i=0; i < container.length; i++) {
    container[i].addEventListener('click', event => {
        if(navToggle.classList.contains('shown')) {
            navbar.style.display = "none";
            navToggle.classList.remove('shown');
        }
    });
}


for(let i=0; i < headerLink.length; i++) {
    headerLink[i].addEventListener("click", function(e) {
        e.preventDefault();

        var $this = e.currentTarget;
        var id = $this.getAttribute('data-scroll');
        var scrollTarget = document.getElementById(id);
        var topOffset;

        if(document.body.clientWidth <= 1000) {
            topOffset = document.querySelector('.nav').offsetHeight - 60;
        }
        else {
           topOffset = document.querySelector('.nav').offsetHeight - 100;
        }

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if(document.body.clientWidth <= 700) {
            navbar.style.display = "none";
            navToggle.classList.remove('shown');
        }

    });
}

