

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
const btndel = document.querySelectorAll(".btn-dele")
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
const hear = document.querySelector(".heart")
console.log(hear);
hear.addEventListener("click" , function(){
    window.open("love.html", "_self")
})






const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const pass =document.getElementById("pass")
const btn = document.querySelector(".btn-3")


const usrr = JSON.parse(localStorage.getItem("usrr")) ?? [];
function getDataLogin() {
    const userdata = {
        firstname: firstName.value,
        lastname : lastName.value,
        email: email.value,
        password: pass.value,
        }
        usrr.push({...userdata})
        console.log(usrr);
        localStorage.setItem("usrr", JSON.stringify(usrr));
        window.open("login.html", "_self")
}
function submitForm(e) {
    e.preventDefault();
    getDataLogin();
}

btn.addEventListener("click", submitForm);
const lOne = document.querySelector(".l-1")
lOne.addEventListener("click" , function(){
    window.open("innex.html", "_self")
})
const ltwo = document.querySelector(".l-2")
ltwo.addEventListener("click" , function(){
    window.open("man.html", "_self")
})