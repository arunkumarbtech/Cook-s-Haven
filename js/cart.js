let basket =JSON.parse(localStorage.getItem("data")) || [];
let cartBody = document.getElementById("carts");
let cartTitle = document.getElementById("cart-title");
let cartContainer = document.getElementById("cart-items-contain");
let calculation =()=>{
    let cartCount = document.getElementById('cart-amount');
    cartCount.innerHTML =basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
     
    }
  
  calculation();
let generateItems=()=>{
    if(basket.length !==0) {
    
      cartContainer.innerHTML=`
          <div id="cart-title" class="cart-title">           
    <p>Items</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
          </div> 
          <br>
          <hr>
      ${basket.map((x) => {
    return `
      <div id="generate-item">
        
      </div>
    `;
  }).join('')}

      `;

    }
    else{
      cartContainer.innerHTML =`
         <h2 class="emptyText"> Cart is Empty</h2>
         <div class = "button-wrapper">
        <a href="orderpage.html">
        <button class="orderBtn" >Place order</button>
        </a>
        </div>
      `;
     
     
      
    }
};
generateItems();
