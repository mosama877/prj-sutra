const profile = JSON.parse(localStorage.getItem("profile"))
const la = document.querySelector(".la")
console.log(profile);
console.log(profile[0]);
const sm = document.querySelector(".sm")
console.log(sm);
const ka = document.querySelector(".ka")
sm.textContent = " مرحبا "  + profile[0].firstname
ka.textContent = profile[0].lastname
la.textContent = " لا لست " + profile[0].firstname
const back = document.querySelector(".back")
back.addEventListener("click" , function(){
    let lclstrg = JSON.parse(localStorage.getItem("profile"))
            let newdata = lclstrg.filter(function (item) {
                if (item.password == "0000") {
                    return item
                    
                }
            })
    localStorage.setItem("profile", JSON.stringify(newdata))
    window.open("login.html", "_self")
})
const lOne = document.querySelector(".l-1")
lOne.addEventListener("click" , function(){
    window.open("innex.html", "_self")
})
const ltwo = document.querySelector(".l-2")
ltwo.addEventListener("click" , function(){
    window.open("man.html", "_self")
})


