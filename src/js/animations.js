import {
  gsap
} from "gsap";
import {
  ScrollToPlugin
} from "gsap/ScrollToPlugin";
import {
  ScrollTrigger
} from "gsap/ScrollTrigger";
import {
  SplitText
} from "gsap/SplitText";

import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);

Swiper.use([Navigation, Pagination]);


// video change video

let w = window.matchMedia("(max-width: 768px)");
let video_responsive = document.querySelectorAll(".video_responsive");

video_responsive.forEach((item, i) => {
  let source =  document.createElement("source");
  source.setAttribute("type", "video/mp4");
  item.appendChild(source);
  let mobile = item.getAttribute('mobile');
  let desktop = item.getAttribute('desktop');

  let mobile_poster = item.getAttribute('poster_mobile');
  let desktop_poster = item.getAttribute('poster_desktop');

  if (w.matches) {
    item.removeAttribute("poster")
    item.setAttribute("poster", mobile_poster );
    source.removeAttribute("src");
    source.setAttribute("src", mobile );
  } else {
    item.removeAttribute("poster")
    item.setAttribute("poster", desktop_poster );
    source.removeAttribute("src");
    source.setAttribute("src", desktop);
  }

});


window.addEventListener("resize", function(){
  video_responsive.forEach((item, i) => {
    let src = item.children[0];

    let mobile = item.getAttribute('mobile');
    let desktop = item.getAttribute('desktop');

    if (w.matches) {
      src.src = mobile;
    } else {
      src.src = desktop;
    }
  });
});




if (window.innerWidth > 768) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.bottom = "16px";
    } else {
      document.getElementById("navbar").style.bottom = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }
}


const fadeUp = gsap.utils.toArray("[fade]");
fadeUp.forEach((el, i) => {
  const anim = gsap.fromTo(el, {
    autoAlpha: 0,
    y: 0
  }, {
    duration: 1.5,
    autoAlpha: 1
  });
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});

const intro_hero = gsap.to(".intro_hero", {
  width: "1450px",
  duration: 1.5,
  delay: 0.4,
  ease: "ease"
});

ScrollTrigger.create({
  trigger: ".intro_hero",
  animation: intro_hero,
  toggleActions: 'play none none none',
  once: true,
});


const swiper_scroll = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  clickable: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    '768': {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: false,
      grabCursor: true,
      clickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    '1300': {
      slidesPerView: 2,
      clickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    },
    '1600': {
      slidesPerView: 2,
      clickable: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});


let menuBtn = document.querySelector(".menu");
let menu = document.querySelector(".menu-full");
let menuItems = gsap.utils.toArray(".menu-item-container");
let body = document.querySelector("body");
menuBtn.onclick = function() {
  if (menuBtn.classList.contains("active")) {
    let tl = gsap.timeline();
    tl.fromTo(menuItems, {
      autoAlpha: 1
    }, {
      duration: 0.2,
      autoAlpha: 0,
      stagger: 0.1
    });
    tl.fromTo(menu, {
      autoAlpha: 1
    }, {
      duration: 0.3,
      autoAlpha: 0,
      ease: "circ.out"
    });
    tl.set(menu, {
      visibility: "hidden"
    });
    body.style.overflowY = "scroll"
    menuBtn.classList.remove("active")
  } else {
    menu.visibility = "visible";
    gsap.fromTo(menu, {
      autoAlpha: 0
    }, {
      duration: 0.1,
      autoAlpha: 1,
      ease: "circ.out"
    });
    gsap.fromTo(menuItems, {
      autoAlpha: 0
    }, {
      duration: 0.3,
      autoAlpha: 1,
      stagger: 0.2
    });
    body.style.overflowY = "hidden"
    menuBtn.classList.add("active")
  }
};

//
// // menu
// let h = document.querySelector(".section_hero").offsetHeight;
// let arrow = document.querySelector(".scroll");
// arrow.addEventListener("click", function(){
//   gsap.to(window, {duration: 1, scrollTo: h});
// });
//
//

let arrow_top = document.querySelector(".scroll-top");
arrow_top.addEventListener("click", function() {
  gsap.to(window, {
    duration: 1,
    scrollTo: 0
  });
});
//
//
//   //
//   // // // hr line animation
const hr = gsap.utils.toArray(".line");
hr.forEach((el, i) => {
  gsap.set(el, {
    transformOrigin: "left"
  })
  const anim = gsap.fromTo(el, {
    scaleX: 0
  }, {
    duration: 0.3,
    scaleX: 1,
    ease: "circ.out"
  });
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    ease: "circ.out",
    toggleActions: 'play none none none',
    once: true,
  });
});
//
//
//   // animation quotes
const quotes = document.querySelectorAll(".quote_animation");
quotes.forEach((quote, i) => {

  quote.split = new SplitText(quote, {
    type: "words,chars",
    wordsClass: "split-line"
  });

  gsap.set(quote, {
    perspective: 400
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: quote,
    }
  })

  tl.fromTo(quote.split.words, {
    autoAlpha: 0
  }, {
    duration: 0.9,
    autoAlpha: 1,
    ease: "ease",
    stagger: 0.02
  });

});

//   // title_hero
const hero_title = document.querySelectorAll(".hero_title");
hero_title.forEach((quote, i) => {

  quote.split = new SplitText(quote, {
    type: "words,chars",
    wordsClass: "split-line"
  });

  gsap.set(quote, {
    perspective: 400
  });

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: quote,
    }
  })

  gsap.to(quote, {
    opacity: 1,
    duration: 0.1
  })

  tl.fromTo(quote.split.words, {
    autoAlpha: 0
  }, {
    duration: 0.9,
    autoAlpha: 1,
    ease: "ease",
    stagger: 0.02,
    delay: 0.3
  });

});
