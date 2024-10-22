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



// document.getElementById("search-button").addEventListener("click",() =>{
//     const searchINput = document.querySelectorAll(".search-input").value;
//     let elements = document.querySelectorAll(".cart-item h3");
//     let card = document.querySelectorAll(".cart-item");
//     elements.forEach((element,index)=> {
//         if(element.innerText.includes(searchINput.lowerCase())) {
//          card[index].classList.remove
//         }
//     })

// })

// let basket =JSON.parse(localStorage.getItem("data")) || [];





// let increment=(id)=> {
//     const existingItem = basket.find((item) => item.id === id);
    
//     if (existingItem) {
//       existingItem.item += 1;
//     } else {
//       basket.push({ id, item: 1 });
//     }
  
//   // console.log(basket);
//   localStorage.setItem("data",JSON.stringify(basket));
//   calculation();
// };

// let decrement=(id)=> {
//     const existingItem = basket.find((item) => (item.id) === id);

//     if (existingItem) {
//       if (existingItem.item === 1) {
//         basket = basket.filter((item) => (item.id) !== id);
//       } else {
//         existingItem.item -= 1;
//       }
//     }
//     // console.log(basket); 
//     localStorage.setItem("data",JSON.stringify(basket));
//     calculation();
// };

// let calculation =()=>{
//   let cartCount = document.getElementById('cart-amount');
//   cartCount.innerHTML =basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

    
//   }

 
// // Select all cart items
// const cartItems = document.querySelectorAll('.btn');
// // const myId =document.querySelectorAll('.cart-item');
// // Loop through each cart item to add event listeners
// cartItems.forEach(item => {
//     const addButton = item.querySelector('.add-btn');
//     const cartControls = item.querySelector('.controls');
//     const countElement = cartControls.querySelector('.count');
//     const removeIcon = cartControls.querySelector('.remove-icon');
//     const addIcon = cartControls.querySelector('.add-icon');
//     let count = 0;
    
    
//     addButton.addEventListener('click', () => {
//       addButton.style.display = 'none';
//       cartControls.style.display = 'flex';
//       const myId= document.querySelectorAll('.cart-item');

// myId.forEach((item) => {
//   const id = item.getAttribute('id'); // Get the id attribute of each cart item
//   // console.log(id);
//   let search = basket.find((x)=> x.id ===id) || [];
//   document.querySelector('.count').textContent = search.item === undefined ? 0 : search.item;
// });

     
//       // countElement.textContent = count;
//       calculation();
//     });
  
//     addIcon.addEventListener('click', () => {
//       count++;
//       countElement.textContent = count;
//       localStorage.setItem("data",JSON.stringify(basket));
   
      

//     });
  
//     removeIcon.addEventListener('click', () => {
//       count = Math.max(0, count - 1);
//       countElement.textContent = count;
      // if (count === 0) {
      //   cartControls.style.display = 'none';
      //   addButton.style.display = 'block';
       
      // }
//       localStorage.setItem("data",JSON.stringify(basket));
      
//     });

    

//   });



// Select all cart items
const cartItems = document.querySelectorAll('.cart-item');
let basket =JSON.parse(localStorage.getItem("data")) || {};
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
   increment(id);
  });

  addIcon.addEventListener('click', () => { 
    increment(id); // Call increment function
    // event.stopPropagation();
  });

  removeIcon.addEventListener('click', () => {
    // stopPropagation();
    decrement(id); // Call decrement function

  });
});


// And update your increment and decrement functions to update the corresponding .count element:


let increment = (id) => {
  const existingItem = basket.find((item) => (item.id) === id);
  if (existingItem) {
    existingItem.item += 1;
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
  // const addButton = document.querySelector('.add-btn');
  // const cartControls =document.querySelector('.controls');
  const addButton = document.querySelector(`#${id} .add-btn`);
  const cartControls = document.querySelector(`#${id} .controls`);

  if (existingItem) {
    if (existingItem.item === 1) {
      basket = basket.filter((item) => (item.id) !== id);

      addButton.style.display = 'flex';
      cartControls.style.display = 'none';  
    } else {
      existingItem.item -= 1;
    }
  }
 

  calculation();
  // let search = basket.find((x) => (x.id) === id) || [];
  const countElement = document.querySelector(`#${id} .count`);
  countElement.textContent = existingItem ? existingItem.item :  1;

// basket = basket.filter((x)=>x.item !==0);

  localStorage.setItem("data", JSON.stringify(basket));
};

let calculation =()=>{
  let cartCount = document.getElementById('cart-amount');
  cartCount.innerHTML =basket.map((x)=>x.item).reduce((x,y)=>x+y,0);

    
  }

calculation();