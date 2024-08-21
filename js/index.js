// document.addEventListener('DOMContentLoaded', function() {
//     let currentIndex = 0;
//     const slides = document.querySelectorAll('.image-slider');
//     const prevButton = document.querySelector('.control-prev');
//     const nextButton = document.querySelector('.control-next');

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.remove('active');
//             slide.style.display = 'none'; // Hide all slides
//         });
//         slides[index].classList.add('active');
//         slides[index].style.display = 'flex'; // Show the current slide
//     }

//     prevButton.addEventListener('click', function(e) {
//         e.preventDefault();
//         currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
//         showSlide(currentIndex);
//     });

//     nextButton.addEventListener('click', function(e) {
//         e.preventDefault();
//         currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
//         showSlide(currentIndex);
//     });

//     // Initialize the first slide
//     showSlide(currentIndex);
// });





const img = document.querySelectorAll(".image-slider");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");
const dots = document.querySelectorAll('.dot');
let n=0;

function changeslide() {
    for (let i = 0; i < img.length; i++) {
      img[i].style.display = "none";
      dots[i].classList.remove("active");
    }
    img[n].style.display = "block";
    dots[n].classList.add("active"); // Add this line
  }
changeslide();
prev_btn.addEventListener("click",(e)=> {
    if(n>0) {
        n--;
    }
    else {
        n=img.length-1;
    }
    changeslide();
})
next_btn.addEventListener("click",(e)=> {
    if(n <img.length-1) {
        n++;
    }
    else {
     n=0 ;
    }
    changeslide();
})
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      n = index;
      changeslide();
    });
  });
  
  setInterval(() => {
    if (n < img.length - 1) {
      n++;
    } else {
      n = 0;
    }
    changeslide();
  }, 3000); // Automatic slide every 3 seconds
  

    

// const slideshow_container = document.querySelector(".slideshow-container");
// const img = document.querySelectorAll(".image-slider");
// const prev_btn = document.querySelector(".control-prev");
// const next_btn = document.querySelector(".control-next");
// let n = 0;

// function changeslide() {
//   slideshow_container.style.transform = `translateX(${-n * (100 / img.length)}%)`;
// }

// changeslide();

// prev_btn.addEventListener("click", (e) => {
//   n = (n - 1 + img.length) % img.length;
//   changeslide();
// });

// next_btn.addEventListener("click", (e) => {
//   n = (n + 1) % img.length;
//   changeslide();
// });


const scrollcontainer = document.querySelectorAll(".slide-container");
for(const item of scrollcontainer) {
    item.addEventListener('wheel',(evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
 } );
}