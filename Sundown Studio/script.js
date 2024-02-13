
//Animation
function menuAnimation(){
var full = document.querySelector("#full-scr")
var menu = document.querySelector("nav h3")
var navimg = document.querySelector("nav img")
var flag=0;
menu.addEventListener("click",function(){
  if(flag==0){
    full.style.top = 0
    navimg.style.opacity=0
    flag=1
  }else{
    full.style.top = "-100%"
    navimg.style.opacity=1
    flag=0
  }
})
}
//Fixed image

function fixedimage(){
const elemC = document.querySelector("#elem-container")
const fixedI = document.querySelector("#fixed-image")


elemC.addEventListener("mouseenter",function(){
    fixedI.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixedI.style.display = "none"
})

const elems = document.querySelectorAll('#elem')

elems.forEach((e) => {
  e.addEventListener('mouseenter',function(){
    var image = e.getAttribute("data-image")
    fixedI.style.backgroundImage = `url(${image})`
  })
})
}

fixedimage()
menuAnimation()

function Loader(){
  var loader = document.querySelector('#loader')
  setTimeout(function(){
    loader.style.top='-100%'
  },4000)
}

Loader()

