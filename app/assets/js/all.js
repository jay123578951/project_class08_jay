$(document).ready(() => {
  console.log('Hello Bootstrap4');
});


// 漢堡
function openNav() {
  document.getElementById("mySidepanel").style.width = "100%";
}
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// 輪播
$(document).ready(function () {
  var swiper = new Swiper('.swiper-container__banner', {
    navigation: {
      nextEl: '.banner__swiper-button-next',
      prevEl: '.banner__swiper-button-prev',
    },
  });

  var swiper = new Swiper('.topChoices__swiper-container', {
    //slidesPerView: 1,
    spaceBetween: 30,
    width: 240,
    // loop: true,
    // loopFillGroupWithBlank: true,
    breakpoints: {
      768: {
        width: 270,
        //slidesPerView: 1,
      },
      992: {
        width: 255,
        //slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: '.topChoise__swiper-button-next',
      prevEl: '.topChoise__swiper-button-prev',
    },
  });

  var swiper = new Swiper('.getInspiration__swiper-container', {
    //slidesPerView: 1,
    spaceBetween: 30,
    width: 240,
    // loop: true,
    // loopFillGroupWithBlank: true,
    breakpoints: {
      768: {
        width: 210,
        //slidesPerView: 2,
      },
      992: {
        width: 350,
        //slidesPerView: 3,
      }
    },
  });
});

$(document).ready(function() {
  rwd_fun();
  $(window).resize(rwd_fun);

  function rwd_fun() {
    var width = window.innerWidth;
    if (width < 768) {
      $('#filter__modalBody').append($('#filter__content'));
    } else {
      $('#filter__block').append($('#filter__content'));
    }
  }
});