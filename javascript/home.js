

// navbar 


let navbar=document.querySelector(".navbar");
let menu=document.querySelector('.menu');
let close=document.querySelector('.close');
 menu.addEventListener("click",(()=>{
   navbar.classList.add('nav-active') ;
 }))
 close.addEventListener("click",(()=>{
   navbar.classList.remove('nav-active') ;
 }))

 console.log(close)



//  card 

let card=document.querySelectorAll('.card');
let btn1=document.querySelector('.btn-1');

btn1.addEventListener('click',((e)=>{
  let cart=e.currentTarget.parentNode.parentNode;
   cart.classList.add("cart-full");
   console.log(cart)
}))