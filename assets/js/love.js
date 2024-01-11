

const lovers = document.querySelector(".lovers")
const lovi = JSON.parse(localStorage.getItem("lovi"))
console.log(lovi);
lovi.forEach(function (e) {
    lovers.innerHTML += `<div class="col-lg-3 col-6   caty">
    <a href="#" style="width: 100%;">
        <div class="product-em" data-id="${e.id}" ;padding: 0%; width: 100%;">
            <div class="product ">
                <div class="product-img akk" style=" overflow: hidden;  ; width: 100%;" >
                    <img src="${e.src}" alt="" class="w-100 h-100" >
                    <a href="#" class="btn-delet" >
                        <i class="fas fa-trash-can" style="font-size:medium;"></i>
                    </a>
                    <a href="#">
                        <div class="blsch bvb" >
                            
                        </div>
                        <div class="evg" >
                        <a href="#" class="see"  data-id ="${e.id}">
                            <div class="soci">
                            <i class="fas fa-eye"></i>
                            </div>
                            
                        </a>
                        <a href="#" class="bvb">
                            <div class="soci" >
                            <i class="fas fa-cart-shopping"></i>
                            </div>
                        </a>
                        
                        </div>
                    </a>
                </div>
                <div class="product-ase w-100  d-flex flex-column " ">
                    <a href="#"  style="color: #4f4f4f; text-decoration: none; ;" class="bvb"> SUTRA</a>
                    <a href="#" style="text-decoration: none ;color: #000;;" class="bvb">${e.title}</a>
                    <a href="#" style="color: #4f4f4f; text-decoration: none;" class="bvb">${e.price}</a>
                </div>
            </div>
        </div>
        
    </a>
</div>`
})


const btndele = document.querySelectorAll(".btn-delet")
console.log(btndele);
btndele.forEach(function(e){
    
    console.log(e);
    e.addEventListener("click", function(klc){
        klc.preventDefault()
        const id = e.closest(".product-em").dataset.id
        console.log(id);
        let lclstrg = JSON.parse(localStorage.getItem("lovi"))
        console.log(lclstrg);
        let newdata = lclstrg.filter(function(item){
            return item.id != id
        })
        localStorage.setItem("lovi" , JSON.stringify(newdata))
        e.closest(".caty").remove()
    })
})

const see = document.querySelectorAll(".see")
const watsh = document.querySelector(".eye")
const baka = document.querySelector(".eye-backgroun")
watsh.addEventListener("click", function(e){
    if(e.target.classList.contains("caka")){
        console.log("fe");
        const gah =document.querySelector(".goh")
        const caka = e.target
        const ka = +gah.value
        const id = caka.closest(".eye").dataset.id
        const bj = lovi.find(product => product.id == id)
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
    window.location.reload();
}
    };
    
} )

const cart = JSON.parse(localStorage.getItem("cart")) ?? [];


const cars = document.querySelectorAll(".cass")
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


// cnse()
// function cnse() {
//     lovi.forEach(function (item) {
//         document.body.innerHTML += `
            
//         <div class="eye"  data-id="${item.id}">
//         <div class="eye-show">
//             <div class="eye-img">
//                 <img src="${item.src}" alt="" width="100%">
//             </div>
//             <div class="eye-text">
//                 <a href="#" style="color: #000 ; text-decoration: none;">
//                     <p style="font-size: large;
//                     text-transform: uppercase;
//                     font-weight: 700;
//                     margin: .65em 0 .5em;">${item.title}</p>
//                 </a>
//                 <h4 style="font-weight: 400; color:  rgb(99, 101, 102);margin-top: 5px;"> LE 454.00</h4>
//                 <p style="font-size: 14px;
//                 text-transform: uppercase;
//                 font-weight: 700;
//                 margin: .65em 0 .5em;">color :${item.color}</p>
//                 <p style="font-size: 14px;
//                 text-transform: uppercase;
//                 font-weight: 700;
//                 margin: .65em 0 .5em;">SIZE : 
//                 <span class="made"> m</span></p>
//                 <div class="t4s-swatch__list mb-2">
//                     <a href="#" class="swatch__item acc" >M</a>
//                     <a href="#" class="swatch__item">L</a>
//                     <a href="#" class="swatch__item" >XL</a>
//                     <a href="#" class="swatch__item" >2xl</a>
//                 </div>
//                 <div class="d-flex align-items-center gap-2  row flex-wrap ">
//                     <div class="d-flex col-lg-4 col-sm-5 col-6" style=" border: #1c2939 1px solid;border-radius: 25px ; order: 1; ">
//                         <button class="btn btn-link px-2" style="width: 30%;color: #1c2939; ;" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
//                             <i class="fas fa-minus"></i>
//                         </button>
    
//                         <input id="form1" min="0" name="quantity" value="1" type="number" class="" style="width: 30%; border: 0 !important; outline: 0 !important; text-align: center;" >
    
//                         <button class="btn btn-link px-2" style="color: #1c2939;width: 30%;" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
//                             <i class="fas fa-plus"></i>
//                         </button>
//                     </div>
//                     <a href="# " class="loka" style="position: relative;
//                     width: 38px;
//                     height: 38px;
//                     color: #1c2939;
//                     border: 1px solid #1c2939;
//                     border-radius: 25px ;
//                     text-align: center;
//                     display: flex;
//                     align-items: center;
//                     justify-content: center;
//                     order: 3;
//                     text-decoration: none;
//                 ">
//                 <i class="fas fa-heart"></i></a>
//                     <button class="caka col-xl-6 col-12" style="order: 4;border-radius: 25px ;"> اضف الي السلة</button>
//             </div>
//         </div>
//     </div>

//             `
//     })
// }

console.log(watsh);

sees()

function sees() {
    see.forEach(function (em) {
        em.addEventListener("click", function (klc) {
            klc.preventDefault()
            const id = em.dataset.id
            console.log(id);
            const bj = lovi.find(product => product.id == id)
            console.log(bj);
                const ad = em.dataset.id
                console.log(ad);
                if (ad == bj.id){
                    const sog = document.querySelector(".sog")
                    sog.src = bj.src
                    const tit = document.querySelector(".tit")
                    tit.textContent = bj.title
                    const pri =document.querySelector(".pri")
                    pri.textContent = bj.price
                    const cole = document.querySelector(".cole")
                    cole.textContent = bj.color
                    const eye = document.querySelector(".eye")
                    eye.dataset.id = bj.id
                    console.log(eye.dataset.id);
                    watsh.classList.add("k")
                    baka.classList.add("k")
                }
                baka.addEventListener("click" ,function(){
                    baka.classList.remove("k")
                    watsh.classList.remove("k")
                })
                
            })
            
            
            
            
        })
    }
const tasks = []
const productEm = document.querySelectorAll(".bvb")

const btndel = document.querySelectorAll(".btn-dele")
console.log(btndele);
btndel.forEach(function(e){
    
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
buy(lovi)


function buy(obj) {
    productEm.forEach(function (em) {
        em.addEventListener("click", function (klc) {
            klc.preventDefault()
            const id = em.closest(".product-em").dataset.id
            const bj = obj.find(product => product.id == id)
            const csrtr = tasks.find(product => product.id == id)
            if (bj !== undefined) {
                if (csrtr == undefined) {
                    tasks.push(bj)
                }
            }
            localStorage.setItem("kok", JSON.stringify(tasks));
            let lclstrg = JSON.parse(localStorage.getItem("kok"))
            let newdata = lclstrg.filter(function (item) {
                if (item.id == bj.id) {
                    return item
                }
            })
            localStorage.setItem("kok", JSON.stringify(newdata))
            window.open("acc.html", "_self")
        })
        
    })
}

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
const ope = document.querySelector(".open")
const cartt = document.querySelector(".cart")
const bak = document.querySelector(".bls4")
const clo = document.querySelector(".close")

ope.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.add("k")
    cartt.classList.add("k")
})
clo.addEventListener("click", function (e) {
    e.preventDefault()
    bak.classList.remove("k")
    cartt.classList.remove("k")
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

