const img = document.querySelector('.main-img img');
const toggleBtn = document.querySelector('.toggle');
const toggleText = document.querySelectorAll('.toggle-text');

let bool = true;

toggleBtn.addEventListener('click', () => {
    if(bool === true) {
        img.src = "./img/pepsi.png";

        toggleText.forEach(text => {
            text.innerText = "Pepsi ";
        });
        bool = false;
    } else {
        img.src = "./img/coca.png";
        toggleText.forEach(text => {
            text.innerText = "Coca ";
        });
        bool = true;
    }
    document.body.classList.toggle('light-theme');

    toggleBtn.firstElementChild.classList.toggle('fa-sun');
})