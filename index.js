// ==================slide list =======================
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  slides.forEach(slide => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}
setInterval(nextSlide, 2000);
// ==================slide list end=======================

// ===============two icon show hide ============
const teoIcon = document.querySelector(".two_icon");
const toggleNav = document.querySelector(".bg");


const myToggle = () => {

  toggleNav.classList.toggle("active");
};

teoIcon.addEventListener('click', () => myToggle());
// ===============two icon show hide end ============

// const hum = document.getElementById("#hover")

// const hoverme = () => {
//   hum.style.display = "block";
// }
// const hoverme1 = () => {
//   hum.style.display = "none"
// }

//================= count increment================ 
const coutingIn = document.querySelectorAll(".span1")

coutingIn.forEach((counetr) => {
  // console.log(counetr);
  counetr.innerHTML = 0
  const funIncrement = () => {
    const contAdd = +counetr.getAttribute("data-target")
    // console.log(typeof contAdd);
    const starCount = Number(counetr.innerHTML);
    const incre = Math.round(contAdd / 12)
    // console.log(incre);
    setInterval(() => {
      counetr.innerHTML = `${starCount + incre}`
    }, 3000);

    if (starCount < contAdd) {
      counetr.innerHTML = `${starCount + incre}`
      setTimeout(funIncrement, 100)

    } else {
      counetr.innerHTML = contAdd

    }
  }
  funIncrement();
})
//================= count increment end================ 

//==================== footer slide start ============

const carouselSlide = document.querySelector('.slider');
const carouselItems = document.querySelectorAll('.img');
const firstClone = carouselItems[0].cloneNode(true);
const lastClone = carouselItems[carouselItems.length - 1].cloneNode(true);

carouselSlide.appendChild(firstClone);
carouselSlide.insertBefore(lastClone, carouselItems[0]);

const slideWidth = carouselItems[0].clientWidth;
carouselSlide.style.transform = `translateX(-${slideWidth}px)`;

let counter = 1;

function slideCarousel() {
  const slidePosition = -slideWidth - counter;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${slidePosition}px)`;
  counter++;

  if (counter === carouselItems.length + 1) {
    setTimeout(() => {
      carouselSlide.style.transition = 'none';
      counter = 1;
      carouselSlide.style.transform = `translateX(-${slideWidth}px)`;
    }, 20000);
  }
}

setInterval(slideCarousel, 10);
//==================== footer slide end ============

// =======slider images ==========
const wordsContainer = document.querySelector('.words-container');
const words = document.querySelectorAll('.word');

let wordIndex = 0;

function slideWords() {
  wordIndex++;

  if (wordIndex >= words.length) {
    wordIndex = 0;
  }

  const nextWord = words[wordIndex];
  const currentWord = wordsContainer.querySelector('.current');

  if (currentWord) {
    currentWord.classList.remove('current');
  }

  nextWord.classList.add('current');
}

setInterval(slideWords, 3000); //  timing in fetch
// =======slider images end ==========
// 5star js part 
// document.addEventListener('DOMContentLoaded', function () {
//   const stars =
//       document.querySelectorAll('.star');
//   stars.forEach(function (star) {
//       star.addEventListener('click', function () {
//           let value =
//               this.getAttribute('data-value');
//           alert("you rated this" + value + "stars.");
//       });
//   });
// });

const bright = document.querySelector(".bright")
bright.onclick = function () {
  document.body.classList.toggle("dark_theme")
}
