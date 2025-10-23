function menu() {
    document.querySelector('.mobile-menu').classList.toggle('active');
}
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let emailInput = document.querySelector('.in1');
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let num = document.querySelector('#number');
    let date = document.querySelector('#date');
    let textarea = document.querySelector('#message');
    alert("Done ✅ We'll be in touch soon ❤️");
    num.value = '';
    name.value = '';
    date.value = '';
    email.value = '';
    textarea.value = '';
    emailInput.value = '';
});

let buttons = document.querySelectorAll(".filter-btn");
let menuItems = document.querySelectorAll(".menu-item");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let category = button.getAttribute("data-category")
        menuItems.forEach(item => {
            if (category === "all" || category === item.getAttribute("data-category")) {
                item.style.display = "flex";
            } else {
                item.style.display = "none";
            }
        })
    })
})

