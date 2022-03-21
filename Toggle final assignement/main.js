let toggleNavStatus =false;

function addListener() {
        if (window.addEventListener) {
          let getNav = document.querySelector(".btn-toggle-nav");
          getNav.addEventListener("click", navBtn1, false);
          // getNav.addEventListener("mouseleave", navBtn1, false);
        }
      }

// button function
function navBtn1() {
        toggleNav();
      }

let toggleNav=function( ){
    let getSidebar= document.querySelector( ".nav-sidebar");
    let getSidebarUl= document.querySelector( ".nav-sidebar ul");
    let getSidebarTitle= document.querySelector( ".nav-sidebar span");
    let getSidebarLinks= document.querySelectorAll( ".nav-sidebar a");

  if (toggleNavStatus === false) {
  getSidebarUl.style.visibility="visible";  
  getSidebar.style.width= "272px";
  getSidebarTitle.style.opacity="0.5";

  let arrayLength = getSidebarLinks.length;
  for ( let i = 0; i< arrayLength; i++){
          getSidebarLinks[i].style.opacity = "1";
  }

  toggleNavStatus = true;
}

else if (toggleNavStatus === true ) {
       
        getSidebar.style.width= "50px";
        getSidebarTitle.style.opacity="0.";
      
        let arrayLength = getSidebarLinks.length;
        for ( let i = 0; i< arrayLength; i++){
                getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUl.style.visibility="hidden"; 
        toggleNavStatus = false;
      }
}

// Set variables for nav-main and body
let topNavBar = document.querySelector(".nav-main");
let backgroundCurentColor = document.querySelector("body");
// set the rest of the variables for colors
let blue = document.querySelector(".blue");
let orange = document.querySelector(".orange");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let default1 = document.querySelector(".default1");

// changeColorGreen-functie met e-parameter
function changeColorGreen(e) {
        backgroundCurentColor.style.backgroundColor = e;
        topNavBar.style.backgroundColor = e;
}

// addEventListener for background change
let firstColor = blue.addEventListener("click",function () {
  changeColorGreen("blue"); 
 
});
let secondColor = orange.addEventListener("click", function () {
  changeColorGreen("orange");
});
let thirdColor = red.addEventListener("click", function () {
  changeColorGreen("red");
});
let forthColor = yellow.addEventListener("click", function () {
  changeColorGreen("yellow");
});
let fifthColor = default1.addEventListener("click", function () {
  changeColorGreen("green");
});




 

