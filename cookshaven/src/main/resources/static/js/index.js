const img = document.querySelectorAll(".image-slider");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");
const dots = document.querySelectorAll('.dot');
let n = 0;

function changeslide() {
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  img[n].style.display = "block";
  dots[n].classList.add("active"); // Add this line
}
changeslide();
prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  }
  else {
    n = img.length - 1;
  }
  changeslide();
})
next_btn.addEventListener("click", (e) => {
  if (n < img.length - 1) {
    n++;
  }
  else {
    n = 0;
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


const scrollcontainer = document.querySelectorAll(".slide-container");
for (const item of scrollcontainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}

document.addEventListener("DOMContentLoaded", () => {

  // Use Intersection Observer to determine if objects are within the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        return;
      }
      entry.target.classList.remove('in-view');
    });
  });

  // Get all the elements with the .animate class applied
  const allAnimatedElements = document.querySelectorAll('.animate');

  // Add the observer to each of those elements
  allAnimatedElements.forEach((element) => observer.observe(element));

});

function openPlaceOrderPage() {
  window.location.href = '/orderpage'
}

function openLoginPage() {
  window.location.href = '/login'
}

// Get the input field and button
const mobileNumberInput = document.getElementById('phonenumber');
const getOtpBtn = document.getElementById('getotp');

// Function to enable or disable the button based on input length
mobileNumberInput.addEventListener('input', function () {
  const isValid = mobileNumberInput.value.length === 10;
  getOtpBtn.disabled = !isValid;
});

document.getElementById('aboutButton').addEventListener('click', function() {
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('homeButton').addEventListener('click', function() {
  window.scrollIntoView({ top: 0, behavior: 'smooth' });
});

