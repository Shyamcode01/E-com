

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

let smallimage=document.querySelectorAll('.card-small-img');
let fullimage=document.querySelector('.card-full-img');

smallimage.forEach(element => {
  
  element.addEventListener('click',(e)=>{
    let imageurl=e.target;
     fullimage.src=imageurl.src;
      console.log(fullimage)
  })
  
});

console.log(fullimage)