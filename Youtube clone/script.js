const sideNav = document.querySelector(".side-nav");
const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");
// const bannerimg = document.querySelector(".bannerimg");

// sideNav.classList.add("hidden")
// const showMenu = function(){
//   document.addEventListener('click',function(){
//      sideNav.classList.toggle("hidden")
//     // console.log('btn is pressed')
//   })
// };
menuIcon.onclick = function(){
  sideNav.classList.toggle("show-sidenav");
  container.classList.toggle("large-container");
  // document.querySelector(".bannerimg").style.height ='300px';
  // document.querySelector(".container").style.paddingleft = '7%';
    // console.log('btn is pressed')

}
