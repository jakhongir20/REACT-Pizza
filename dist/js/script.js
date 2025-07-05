/* ==================================================================================================================*/
function selectFunctions() {
  // todo
}

$('.modal__close').on('click', function () {
  $('.modal__overlay').removeClass('_active');
});
// mark modal
$('#leaveRequestBtnMark').on('click', function () {
  const phone = $('#leavePhoneNumberInMark')
    .val()
    .replace('+', '')
    .replaceAll(' ', '');

  const url = `https://api.telegram.org/bot6661268662:AAG61W-S2errwvmdiGLj3qbNgiyg3hjHy44/sendMessage?chat_id=-4132223675&text=car:${carType}-phone:${phone}-price:${carPrice}`;
  if (phone.length < 14) {
    alert('Provide valid phone number, please!');
    return;
  }
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log('Message sent successfully:', data);
      alert('Message sent successfully!');
      $('.modal__overlay').removeClass('_active');
      $('.mark').addClass('d-none');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    });
});
// mark desire sum
$('#leaveDesireSumBtn').on('click', function () {
  const desireSum = $('#leaveDesireSumInput').val().replaceAll(' ', '');

  const url = `https://api.telegram.org/bot6661268662:AAG61W-S2errwvmdiGLj3qbNgiyg3hjHy44/sendMessage?chat_id=-4132223675&text=car:${carType}-desire_price:${desireSum}`;
  if (desireSum.length < 2) {
    alert('Provide valid sum, please!');
    return;
  }
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log('Message sent successfully:', data);
      alert('Message sent successfully!');
      $('.modal__overlay').removeClass('_active');
      $('.mark').addClass('d-none');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    });
});
// ui mainpage
$('#leaveRequestBtnMainpage').on('click', function () {
  const phone = $('#leavePhoneNumberInMainpage')
    .val()
    .replace('+', '')
    .replaceAll(' ', '');

  const url = `https://api.telegram.org/bot6661268662:AAG61W-S2errwvmdiGLj3qbNgiyg3hjHy44/sendMessage?chat_id=-4132223675&text=phone:${phone}`;
  if (phone.length < 14) {
    alert('Provide valid phone number, please!');
    return;
  }
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log('Message sent successfully:', data);
      alert('Message sent successfully!');
      $('.modal__overlay').removeClass('_active');
      $('.mark').addClass('d-none');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    });
});
// ui book
$('#leaveRequestBtnBook').on('click', function () {
  const phone = $('#leavePhoneNumberInBook')
    .val()
    .replace('+', '')
    .replaceAll(' ', '');

  const url = `https://api.telegram.org/bot6661268662:AAG61W-S2errwvmdiGLj3qbNgiyg3hjHy44/sendMessage?chat_id=-4132223675&text=phone:${phone}`;
  if (phone.length < 14) {
    alert('Provide valid phone number, please!');
    return;
  }
  fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      console.log('Message sent successfully:', data);
      alert('Message sent successfully!');
      $('.modal__overlay').removeClass('_active');
      $('.mark').addClass('d-none');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    });
});

/* ==================================================================================================================*/

/* ==================================================================================================================*/
// Sliders:
let swiperMainD = new Swiper('.main-slider__body', {
  // effect: "fade",
  slidesPerView: 1,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  spaceBetween: 80,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 500,
});
/* ==================================================================================================================*/

// document.addEventListener("DOMContentLoaded", progress);

function progress() {
  let elem = document.querySelector('.progress-bar');
  let wrappers = document.querySelector('.loading-wrapper');
  let width = 6;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      wrappers.classList.add('_active');
    } else {
      width++;
      elem.style.width = width + '%';
      document.querySelector('.progress-label').innerHTML = width * 1 + '%';
    }
  }
}

// $(window).on("scroll", function () {
//   if ($(this).scrollTop() > 100) {
//     $(".header").addClass("sticky");
//     $("main").css("margin-top", "120px");
//   } else {
//     $(".header").removeClass("sticky");
//     $("main").css("margin-top", "0px");
//   }
// });
// $('.wrapper').addClass('loaded');
$('.icon-menu').click(function (event) {
  event.preventDefault();
  $(this).toggleClass('_active');
  $('.menu').toggleClass('_active');
  $('body').toggleClass('_lock');
});

// =======================================================================================================
// Sliders:

const swiperDoctors = new Swiper('.doctors__swiper', {
  // direction: 'vertical',
  slidesPerView: 3,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  navigation: {
    nextEl: '.doctors__pagination .swiper-button-next',
    prevEl: '.doctors__pagination .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiperGallery = new Swiper('.gallery__swiper', {
  // direction: 'vertical',
  slidesPerView: 2,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  navigation: {
    nextEl: '.gallery__pagination .swiper-button-next',
    prevEl: '.gallery__pagination .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
const swiperMain = new Swiper('.blog__swiper', {
  // direction: 'vertical',
  slidesPerView: 3,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  navigation: {
    nextEl: '.blog__pagination .swiper-button-next',
    prevEl: '.blog__pagination .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1160: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
const doctorReview = new Swiper('.doctor__review-swiper', {
  // direction: 'vertical',
  slidesPerView: 1,
  autoHeight: false,
  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerColumn: 1,
  loop: true,
  spaceBetween: 5,
  autoplay: {
    delay: 5000,
  },
  speed: 400,
  navigation: {
    nextEl: '.doctor__review-pagination .swiper-button-next',
    prevEl: '.doctor__review-pagination .swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
  },
});

// _ibg
function _ibg() {
  $.each($('._ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css(
        'background-image',
        'url("' + $(this).find('img').attr('src') + '")'
      );
    }
  });
}
_ibg();
// =======================================================================================================
(function () {
  let navLinks = $('nav ul li a'),
    // navM = $('nav').height(),
    navM = 40,
    section = $('section'),
    documentEl = $(document);

  documentEl.on('scroll', function () {
    let currentScrollPage = documentEl.scrollTop();

    section.each(function () {
      let self = $(this);
      if (
        self.offset().top < currentScrollPage + navM &&
        currentScrollPage + navM < self.offset().top + self.outerHeight()
      ) {
        let targetClass = '.' + self.attr('class') + '-page';
        navLinks.removeClass('_active');
        $(targetClass).addClass('_active');
      }
    });
  });
})();
$(document).ready(function () {
  $('nav a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
    // $('nav a[href^="#"]').removeClass('_active');
    // $(this).addClass('_active')
    return false;
  });
});
// =======================================================================================================
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');
    currentText.innerText = text;
    select.classList.remove('is-active');
  }
};

select();
// =======================================================================================================

// Обьявленям переменные
// const parent_original = document.querySelector('.content__blocks_city');
// const parent = document.querySelector('.content__column_river');
// const item = document.querySelector('.content__block_item');

// Слушаем изменение размера экрана
// window.addEventListener("resize", function (event) {
//   const viewport_width = Math.max(
//     document.documentElement.clientWidth,
//     window.innerWidth || 0
//   );
//   if (viewport_width < 992) {
//     if (!item.classList.contains("done")) {
//       parent.insertBefore(item, parent.children[2]);
//       item.classList.add("done");
//     }
//   } else {
//     if (item.classList.contains("done")) {
//       parent_original.insertBefore(item, parent_original.children[2]);
//       item.classList.remove("done");
//     }
//   }
// });

// =======================================================================================================
const maskPhone = () => {
  const inputsPhone = document.querySelectorAll('input[name="phone"]');

  inputsPhone.forEach((input) => {
    let keyCode;

    const mask = (event) => {
      event.keyCode && (keyCode = event.keyCode);
      let pos = input.selectionStart;

      if (pos < 3) {
        event.preventDefault();
      }
      let matrix = '+998 (__) ___ __ __ ',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = input.value.replace(/\D/g, ''),
        newValue = matrix.replace(/[_\d]/g, (a) => {
          if (i < val.length) {
            return val.charAt(i++) || def.charAt(i);
          } else {
            return a;
          }
        });
      i = newValue.indexOf('_');
      if (i !== -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
      }

      let reg = matrix
        .substr(0, input.value.length)
        .replace(/_+/g, (a) => {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (
        !reg.test(input.value) ||
        input.value.length < 5 ||
        (keyCode > 20 && keyCode < 30)
      ) {
        input.value = newValue;
      }
      if (event.type == 'blur' && input.value.length < 5) {
        input.value = '';
      }
    };
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
};
maskPhone();

// =======================================================================================================

// =======================================================================================================
// base.js
const $base = {};
window.$base = $base;
// =======================================================================================================
// modal.js
Element.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling);
};

// !=======================================================================================================
let toltipOverlay = document.querySelector('.tooltip-overlay');
// =======================================================================================================
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.cart-count').textContent = productNumbers;
  }
}
//* -- start coffe functions
function addCartC(product, action) {
  const coffe = coffes.find((c) => c.id === product);
  toltipOverlay.classList.add('_active');
  setTimeout(() => {
    toltipOverlay.classList.remove('_active');
  }, 800);
  cartNumbers(coffe, action);
  totalCost(coffe);
}
function setItems(coffe) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    let currentProduct = coffe.img;

    if (cartItems[currentProduct] == undefined) {
      cartItems = {
        ...cartItems,
        [currentProduct]: coffe,
      };
    }
    cartItems[currentProduct].inCart += 1;
  } else {
    coffe.inCart = 1;
    cartItems = {
      [coffe.img]: coffe,
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
function cartNumbers(coffe, action) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action) {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.cart-count').textContent = productNumbers - 1;
    console.log('action running');
  } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart-count').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart-count').textContent = 1;
  }
  setItems(coffe);
}
function totalCost(coffe, action) {
  let cart = localStorage.getItem('totalCost');

  if (action) {
    cart = parseInt(cart);

    localStorage.setItem('totalCost', cart - coffe.price);
  } else if (cart != null) {
    cart = parseInt(cart);
    localStorage.setItem('totalCost', cart + coffe.price);
  } else {
    localStorage.setItem('totalCost', coffe.price);
  }
}

//* -- end coffe functions --

//* -- start drink functions
//* -- end drink functions --

//* -- start pizza functions
//* -- end pizza functions --

// =======================================================================================================

//BEGIN
$('.accordion__title').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);

  if (!$this.hasClass('accordion-active')) {
    $('.accordion__content').slideUp(250);
    $('.accordion__item .accordion__title').removeClass('accordion-active');
    $('.accordion__arrow').removeClass('accordion__rotate');
  }

  $this.toggleClass('accordion-active');
  $this.next().slideToggle(250);
  $('.accordion__arrow', this).toggleClass('accordion__rotate');
});
//END

/* ==================================================================================================================*/
// jQuery Plugin: http://flaviusmatis.github.io/simplePagination.js/

function onChangeLang(lang, src) {
  $('#lang').html(lang);
  $('#langimg').attr('src', src);
  $('.lang-list').removeClass('_active');
}

function toggleLang() {
  $('.lang-list').toggleClass('_active');
}

function closeModal() {
  $('#signup-modal, #signup-modal .modal').removeClass('_active');
}
function closeModalComment() {
  $('#comment-modal, #comment-modal .modal').removeClass('_active');
}
function openModal() {
  $('#signup-modal, #signup-modal .modal').addClass('_active');
}

function openModalComment() {
  $('#comment-modal, #comment-modal .modal').addClass('_active');
}
