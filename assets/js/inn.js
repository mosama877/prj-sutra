const caa = document.querySelector(".caa")
const loc = JSON.parse(localStorage.getItem("kok"))
console.log(loc);
caa.src = loc[0].src
const open = document.querySelector(".open")
const cartt = document.querySelector(".cart")
const bak = document.querySelector(".bls4")
const close = document.querySelector(".close")
const em = loc[0]

const coco = document.querySelector(".header")
const owp = document.querySelector(".opw")
const clos = document.querySelector(".cee")

owp.addEventListener("click", function (e) {
    e.preventDefault()
    coco.classList.add("k")
})
clos.addEventListener("click", function (e) {
    e.preventDefault()
    coco.classList.remove("k")
})

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
open.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.add("k")
    cartt.classList.add("k")
})
close.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.remove("k")
    cartt.classList.remove("k")
})
const cartca = document.querySelector(".cart-card")
cart.forEach(function (e) {
    cartca.innerHTML += `<div class="cardcor">
    <div class="car-img" style="  height: 100% ;">
        <img src="${e.src}" alt="" class="w-100">
    </div>
    <div class="car-text">
        <a href="#" class="dflex" style="color: black; text-decoration: none;"><p> ${e.title}</p></a>
        <p style="font-size: small;">${e.color} / ${e.size}</p>
        <p style="color:  rgb(99, 101, 102);font-size: medium;">${e.price}</p>
        <div class="d-flex  col-11" style=" border: #1c2939 1px solid;border-radius: 25px ; order: 1;margin-bottom: 10px; ">
                        <button class="btn btn-link px-2" style="width: 30%;color: #1c2939; ;" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                        </button>
    
                        <input id="form1" min="0" name="quantity" value="${e.quant}" type="number" class="" style="width: 30%; border: 0 !important; outline: 0 !important; text-align: center;" >
    
                        <button class="btn btn-link px-2" style="color: #1c2939;width: 30%;" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="margin-left: 13px;" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                <a href="#" class="btn-dele" style="color: black;" data-id ="${e.id}">
                                <i class="fas fa-trash "></i>
                                            </a>
    </div>
</div>`
})

const btndele = document.querySelectorAll(".btn-dele")
console.log(btndele);
btndele.forEach(function(e){
    
    console.log(e);
    e.addEventListener("click", function(klc){
        klc.preventDefault()
        const id = e.dataset.id
        console.log(id);
        let lclstrg = JSON.parse(localStorage.getItem("cart"))
        console.log(lclstrg);
        let newdata = lclstrg.filter(function(item){
            return item.id != id
        })
        localStorage.setItem("cart" , JSON.stringify(newdata))
        e.closest(".cardcor").remove()
    })
})


const kij = document.querySelector(".made")
const kain = document.querySelectorAll(".swatch__item")
kain.forEach(function(en){
    en.addEventListener("click" ,function(klc){
        klc.preventDefault()
        kij.textContent = en.textContent
        removeAcc ()
        en.classList.add("acc")
        
    })
})
function removeAcc (){
    kain.forEach(function(en){
        en.classList.remove("acc")
    })
}


const cotitle = document.querySelector(".co-title")
const coprice = document.querySelector(".co-price")
const cokind = document.querySelector(".co-kind")
const cocolor = document.querySelector(".co-color")
console.log(coprice);
console.log(cokind);
console.log(cocolor);
console.log(em);

cotitle.textContent = loc[0].title
coprice.textContent = loc[0].price
cokind.textContent = loc[0].kind
cocolor.textContent = loc[0].color

const cars = document.querySelectorAll(".cass")


const caka = document.querySelector(".caka")
caka.addEventListener("click", function (klc) {
    const gah =document.querySelector(".goh")
    const ka = +gah.value
    klc.preventDefault()
    const id = loc[0].id
    const bj = loc[0]
    const csrtr = cart.find(product => product.id == id)
    if (bj !== undefined) {
        if (csrtr == undefined) {
            const ksa = { ...bj, size : kij.textContent }
            cart.push({ ...ksa,  quant : ka })
    }
    else {
        csrtr.size = kij.textContent 
        csrtr.quant = ka
    }
        localStorage.setItem("cart", JSON.stringify(cart))

    }
        window.location.reload();
    })


const lovi = JSON.parse(localStorage.getItem("lovi")) ?? [];


const lovebtn = document.querySelector(".loka")


        lovebtn.addEventListener("click", function (klc) {
            klc.preventDefault()
            const pare = em
            const id = pare.id
            console.log(id);
            const bj = loc[0]
            console.log(bj);
            const csrtr = lovi.find(product => product.id == id)
            
                if (csrtr == undefined) {
                    lovi.push(bj)
                    lovebtn.classList.add("loving")
                }
                else{
                    window.open("love.html", "_self")
                }
                localStorage.setItem("lovi", JSON.stringify(lovi))
                
        })
        const pare = em
        const id = pare.id
            console.log(id);
            const bj = loc[0]
            console.log(bj);
            const csrtr = lovi.find(product => product.id == id)
            if (csrtr !== undefined){
                lovebtn.classList.add("loving")
            }
            const heart = document.querySelector(".heart")
            heart.addEventListener("click" , function(){
                window.open("love.html", "_self")
            })
            const log= document.querySelector(".log")
            log.addEventListener("click" , function(){
                window.open("login.html", "_self")
            })
            const profile = JSON.parse(localStorage.getItem("profile"))
            if (profile[0]){
                log.addEventListener("click" , function(){
                    window.open("profile.html", "_self")
                })
            }
            const lOne = document.querySelector(".l-1")
lOne.addEventListener("click" , function(){
    window.open("innex.html", "_self")
})
const ltwo = document.querySelector(".l-2")
ltwo.addEventListener("click" , function(){
    window.open("man.html", "_self")
})
