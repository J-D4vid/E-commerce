const profile = document.querySelector("#profile")
const history = document.querySelector("#content")
const bthistory = document.querySelector(".h-compras")
const btprofile = document.querySelector(".perf")
const labels = document.querySelectorAll('.labels')
const config = document.querySelector("#configdados")
const carrinho = document.querySelector("#carrinho")
const btcarrinho = document.querySelector(".car")
const configstl = window.getComputedStyle(config)
const carrinhostl = window.getComputedStyle(carrinho)
const btconfig = document.querySelector('.config')

btconfig.addEventListener('click', ()=>{
    if(config.style.display === "none"){
        config.style = "display:block;"
    }else{
        config.style = "display:none;"
    }
})

btprofile.addEventListener('click', (e)=>{
    e.preventDefault()      
    profile.style = "display:block;"
    carrinho.style = "display:none;"
    labels[1].style = "border-bottom:2px solid gray"
    labels[0].style = "border-bottom:5px solid rgb(248 182 0)"

})

btcarrinho.addEventListener('click', (e)=>{
    e.preventDefault()
    profile.style = "display:none;"
    carrinho.style = "display:block;"
    labels[0].style = "border-bottom:2px solid gray"
    labels[1].style = "border-bottom:5px solid rgb(248 182 0)"
})

bthistory.addEventListener('click', (e)=>{
    e.preventDefault()
    if(history.style.display === "none"){
        history.style = "display:block;"
    }else{
        history.style = "display:none;"
    }
})