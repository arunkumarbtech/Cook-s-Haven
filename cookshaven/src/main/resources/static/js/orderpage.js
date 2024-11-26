function imgScrollRight(gallery, rightButton, leftButton) {
    const scrollStep = 200; // Adjust this value based on image width
    const galleryWidth = gallery.scrollWidth; // Total width of the gallery content
    const containerWidth = gallery.offsetParent.offsetWidth; // Visible width of the gallery container
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    if (scrollAmount < galleryWidth - containerWidth) {
        scrollAmount += scrollStep;
        gallery.style.transform = `translateX(-${scrollAmount}px)`;
        gallery.setAttribute('data-scroll-amount', scrollAmount);
        updateButtons(gallery, rightButton, leftButton);
    }
}

function imgScrollLeft(gallery, rightButton, leftButton) {
    const scrollStep = 200; // Adjust this value based on image width
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    scrollAmount -= scrollStep;
    if (scrollAmount < 0) scrollAmount = 0;
    gallery.style.transform = `translateX(-${scrollAmount}px)`;
    gallery.setAttribute('data-scroll-amount', scrollAmount);
    updateButtons(gallery, rightButton, leftButton);
}

function updateButtons(gallery, rightButton, leftButton) {
    const galleryWidth = gallery.scrollWidth;
    const containerWidth = gallery.offsetParent.offsetWidth;
    let scrollAmount = parseInt(gallery.getAttribute('data-scroll-amount')) || 0;

    // Disable right button if we're at the end
    if (scrollAmount >= galleryWidth - containerWidth) {
        rightButton.disabled = true;
    } else {
        rightButton.disabled = false;
    }

    // Disable left button if we're at the start
    if (scrollAmount <= 0) {
        leftButton.disabled = true;
    } else {
        leftButton.disabled = false;
    }
}

// Initial button state update for each gallery
document.querySelectorAll('.gallery-container').forEach(container => {
    const gallery = container.querySelector('.flex');
    const rightButton = container.querySelector('.right-nav');
    const leftButton = container.querySelector('.left-nav');

    // Attach event listeners to buttons
    rightButton.addEventListener('click', () => imgScrollRight(gallery, rightButton, leftButton));
    leftButton.addEventListener('click', () => imgScrollLeft(gallery, rightButton, leftButton));

    // Initialize button states
    updateButtons(gallery, rightButton, leftButton);
});


const scrollcontainer = document.querySelectorAll(".cart-list");
for(const item of scrollcontainer) {
    item.addEventListener('wheel',(evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
 } );
}




// Select all cart items
const cartItems = document.querySelectorAll('.cart-item');
let basket =JSON.parse(localStorage.getItem("data")) || [];
cartItems.forEach((item) => {
  const addButton = item.querySelector('.add-btn');
  const cartControls = item.querySelector('.controls');
  const countElement = cartControls.querySelector('.count');
  const removeIcon = cartControls.querySelector('.remove-icon');
  const addIcon = cartControls.querySelector('.add-icon');
  const id = item.getAttribute('id'); // Get the id attribute of each cart item

  // Initialize count from local storage
  let search = basket.find((x) => (x.id) === id) || [];
  countElement.textContent = search.item === undefined ? 0 : search.item;
  if(search.item !== undefined) {
    addButton.style.display = 'none';
    cartControls.style.display = 'flex';   
  }
  const existingItem = basket.find((item) => (item.id) === id);
 
  addButton.addEventListener('click', () => {
    addButton.style.display = 'none';
    cartControls.style.display = 'flex';
    increment(id); // Call increment function

  });

  addIcon.addEventListener('click', () => {
    increment(id); // Call increment function
  });

  removeIcon.addEventListener('click', () => {
    decrement(id); // Call decrement function

  });
});


function openHomepage(){
    window.location.href = '/home';
}




let increment = (id) => {
  const existingItem = basket.find((item) => (item.id) === id);
  if (existingItem) {
    existingItem.item =existingItem.item + 1;
  } else {
    basket.push({ id, item: 1 });
  }
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
  const countElement = document.querySelector(`#${id} .count`);
  countElement.textContent = existingItem ? existingItem.item : 1;
};

let decrement = (id) => {
  const existingItem = basket.find((item) => (item.id) === id);
  const addButton = document.querySelector('.add-btn');
  const cartControls =document.querySelector('.controls')
   
    if (existingItem.item === 1) {
      addButton.style.display = 'flex';
      cartControls.style.display = 'none';  
    } else {
      existingItem.item =existingItem.item- 1;
    }


  calculation();
  let search = basket.find((x) => (x.id) === id) || [];
  const countElement = document.querySelector(`#${id} .count`);
  countElement.textContent = existingItem ? existingItem.item :  1;

  basket = basket.filter((x)=>x.item !==0);

  localStorage.setItem("data", JSON.stringify(basket));
};

let calculation =()=>{
  let cartCount = document.getElementById('cart-amount');
  cartCount.innerHTML =basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

    
  }

calculation();

document.getElementById('aboutButton').addEventListener('click', function() {
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});

function getOtp() {
  const phoneNumber = document.getElementById("phonenumber").value;
  if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  fetch("http://localhost:8080/api/v1/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `mobileNumber=${encodeURIComponent(phoneNumber)}`
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error("Error:", error));
}
// And update your increment and decrement functions to update the corresponding .count element:






const mobileNumberInput = document.getElementById('phonenumber');
const getOtpBtn = document.getElementById('getotp');

// Function to enable or disable the button based on input length
mobileNumberInput.addEventListener('input', function () {
    const isValid = mobileNumberInput.value.length === 10;
    getOtpBtn.disabled = !isValid;
});

function openLogin(){
    window.location.href = '/login';
}

function getOtp() {
  const phoneNumber = document.getElementById("phonenumber").value;
  if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
  }

  fetch("http://localhost:8080/api/v1/otp/send", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `mobileNumber=${encodeURIComponent(phoneNumber)}`
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error("Error:", error));
}


document.getElementById('aboutButton').addEventListener('click', function() {
  document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});