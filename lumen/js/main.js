$(function() {
      $('.results__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        dots: true,
        autoplay: true
      });

      $('.reviews__inner',).slick({
        infinite: true,
        slidesToShow: 3,
         dots: true,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-btn slick-next "></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]
        
      });

})


document.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero');
	const header = document.querySelector('.header');
	const scrollItems = document.querySelectorAll('.advantages__item');

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
		// console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight);
			console.log(scrollOffset)
			if (windowCenter >= scrollOffset) {
				el.classList.add('show');
			}
		});
	};

	scrollAnimation();
	window.addEventListener('scroll', () => {
		
		scrollAnimation();
	});
});

let header = $(".header__nav"),
introH = $(".header").innerHeight(),
scrollOffset = $(window).scrollTop();

    // Fixed Header
checkScroll(scrollOffset)

$(window).on("scroll", function() { 

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset){
    if(scrollOffset >= introH) {
        header.addClass("header__fixed");
    } else {
        header.removeClass("header__fixed")
    }
}
 // Smooth Scroll
 $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  
  let $this = $(this),
      blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

      $("#nav a").removeClass("active");
      $this.addClass("active");

$("html, body").animate({
 scrollTop: blockOffset
},100)

});

let menuBtn = document.querySelector('.header__burger-btn');
let nav = document.querySelector('.nav__link')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active')
})
menuBtn.addEventListener('click', function() {
    nav.classList.toggle('active')
});

// paaralaks
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener('mousemove', function(e) {
    const rect = header.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;

    offsetX = Math.min(Math.max(distanceX / (rect.width / 2) * 30, -30), 30);
    offsetY = Math.min(Math.max(distanceY / (rect.height / 2) * 30, -30), 30);
  });

  function updateParallax() {
    const images = document.querySelectorAll('.img__avito, .img__vk, .img__yandex, .img__yula');
    for (let i = 0; i < images.length; i++) {
      images[i].style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  }

  setInterval(updateParallax, 1000 / 60);
});

document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.clients__inner');
  const items = inner.querySelectorAll('.clients__item');
  const scrollThreshold = inner.offsetTop;
  let shouldAnimate = false;

  items.forEach((item, index) => {
    const direction = index === 0 || index === 3 ? 'left' : 'right';

    item.style.opacity = '0';
    item.style.transform = `translateX(${direction === 'left' ? '-' : ''}100px)`;
  });

  window.addEventListener('scroll', () => {
    const scrollOffset = window.scrollY + window.innerHeight;

    if (!shouldAnimate && scrollOffset >= scrollThreshold) {
      shouldAnimate = true;

      setTimeout(() => {
        items.forEach((item, index) => {
          const direction = index === 0 || index === 3 ? 'left' : 'right';

          item.style.transition = 'opacity 0.5s, transform 0.5s';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        });
      }, 1000);
    }
  });

  if (window.scrollY + window.innerHeight >= scrollThreshold) {
    shouldAnimate = true;

    setTimeout(() => {
      items.forEach((item, index) => {
        const direction = index === 0 || index === 3 ? 'left' : 'right';

        item.style.transition = 'opacity 0.5s, transform 0.5s';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      });
    }, 1000);
  }
});

// работа с формой
function isValidPhoneNumber(phoneNumber) {
  const phonePattern = /^\+?\d{1,3}[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;
  return phonePattern.test(phoneNumber);
}

// Функция для проверки заполненности формы
function validateForm(form) {
  const usernameInput = form.querySelector('input[name="username"]');
  const telInput = form.querySelector('input[type="tel"]');
  const usernameValue = usernameInput.value.trim();
  const telValue = telInput.value.trim();

  if (usernameValue === '') {
    alert('Пожалуйста, введите имя пользователя.');
    return false;
  }

  if (telValue === '') {
    alert('Пожалуйста, введите номер телефона.');
    return false;
  }

  if (!isValidPhoneNumber(telValue)) {
    alert('Пожалуйста, введите номер телефона в правильном формате.');
    return false;
  }

  return true;
}

// Получаем ссылку на основную форму и модальную форму
const mainForm = document.getElementById('myForm');
const modalForm = document.querySelector('.modal #myForm');

// Обработчик события отправки основной формы
mainForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы

  if (validateForm(mainForm)) {
    // Если данные в форме правильные, можно отправить письмо на почту
    // Здесь можно добавить код для отправки письма
    alert('Заявка успешно отправлена!');
    mainForm.reset(); // Очищаем поля формы
  }
});

// Обработчик события отправки формы в модальном окне
modalForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы

  if (validateForm(modalForm)) {
    // Если данные в форме правильные, можно отправить письмо на почту
    // Здесь можно добавить код для отправки письма
    alert('Заявка успешно отправлена');
    modalForm.reset(); // Очищаем поля формы
    const modal = document.getElementById('exampleModal');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide(); // Закрываем модальное окно
  }
});
   





  

 


