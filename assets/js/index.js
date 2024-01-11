const scrtop = document.querySelector(".scroll-top")
const scrbar = document.querySelector(".scroll-bar")
console.log(scrtop);
const links = document.querySelectorAll(".nav-link");

links.forEach(function (item) {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        let cee = item.getAttribute("data-target")
        
        let targetElement = document.getElementById(cee);
        let position = targetElement.offsetTop - targetElement.clientHeight;
        window.scrollTo({
            top: position,
        });
    });

});

scrtop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
window.addEventListener("scroll", function () {
    let mnhie = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let pere = document.documentElement.scrollTop / mnhie
    scrbar.style.width = `${pere * 100}%`
    if (this.window.scrollY > 600) {
        scrtop.style.display = "block"
    }
    else {
        scrtop.style.display = "none"
    }
})