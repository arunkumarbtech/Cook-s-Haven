let basket =JSON.parse(localStorage.getItem("data")) || [];


let calculation =()=>{
    let cartCount = document.getElementById('cart-amount');
    cartCount.innerHTML =basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
     
    }
  
  calculation();
let generateItems=()=>{
    if(basket.length !==0) {
      
    }
    else{
     
    }
};
generateItems();
