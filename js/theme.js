const bt = document.querySelectorAll(".theme")
const stl = document.getElementById('theme-select')
const sidenav = document.getElementById('snav')
const snav = window.getComputedStyle(sidenav)
let img = document.getElementById('info')
let type = document.getElementById('legenda')
const guia = document.querySelectorAll('.op')
const home = document.getElementById('home')
const categorias = document.getElementById('categorias')
const configu = document.querySelector("#configdados")
const perfil = document.querySelector("#profile")
const car = document.querySelector("#carrinho")

function setThemePreference(theme){
    localStorage.setItem('themePreference', theme)
}

function getThemePreference(theme){
    return localStorage.getItem('themePreference')
}

document.addEventListener('DOMContentLoaded', function(){
    const themePreference = getThemePreference()
    if(themePreference == "theme"){
        stl.href = './css/theme.css'
    }else{
            stl.href = './css/light-theme.css'
        }
        
})

function scrollElement(g){
    if(g){
        g.scrollIntoView({
            behavior:'smooth',
            inline: 'start'
        })
    }
}
setTimeout(()=>{
    scrollElement(guia[1], guia[2])
},3000)
guia[1].addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = "./index.html"
})
guia[2].addEventListener('click', (e)=>{
    e.preventDefault()
    if(window.href = "./index.html"){
        scrollElement(categorias)
    }
    if(window.href = "./perfil.html"){
       if(configu.style.display === "none"){
            perfil.style = "display;block;"
            car.style = "display:none;"
        configu.style = "display:block;"
        scrollElement(configu)
       }else{
           configu.style = "display:none;"
           perfil.style = "display:none;"
           car.style = "display:block;"
       }
    }
})  
bt[0].addEventListener('click', ()=>{ 
        stl.href = "./css/light-theme.css"
        setThemePreference('light')
})
bt[1].addEventListener('click', ()=>{
    stl.href = "./css/theme.css"
    setThemePreference('theme')
})
bt[2].addEventListener('click', () => {
    if (sidenav.style.right === "-20%") {
        sidenav.style.right = "0%"
    } else {
        sidenav.style.right = "-20%"
    }
})
bt[3].addEventListener('click', ()=>{
    sidenav.style = "right: -20%;"
})






