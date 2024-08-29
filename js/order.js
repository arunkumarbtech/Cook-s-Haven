const scrollcontainer = document.querySelectorAll(".cart-list");
for(const item of scrollcontainer) {
    item.addEventListener('wheel',(evt)=> {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
 } );
}