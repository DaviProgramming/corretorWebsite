window.addEventListener('load', () =>{
    loader.startLoader();
})

window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
})



const startInteractive = () => {
    let getButtonNavbar = document.querySelectorAll('.navbar-link');
    getButtonNavbar.forEach(button => button.addEventListener('click', () => { NavbarConfig.changeButton(button) }))

    let hamburguerButton = document.querySelector('.navbar-hamburguer');
    hamburguerButton.addEventListener('click', () => { NavbarConfig.mobileOpen() })

    let closeButton = document.querySelector('.navbar-close');
    closeButton.addEventListener('click', () => { NavbarConfig.mobileClose() })

}

const NavbarConfig = {
    removeActive() {
        let activeButton = document.querySelector('.navbar-link.active');

        if (activeButton != null) {
            activeButton.classList.remove('active');
        }
        return;
    },
    changeButton(button) {

        this.removeActive();
        let buttonToActive = button;
        buttonToActive.classList.add('active');

    },
    mobileOpen() {
        let navbar = document.querySelector('.navbar');
        navbar.classList.add('show');
    },
    mobileClose() {
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('show');
    }
}

const loader = {
    startLoader(){
        let body = document.querySelector("body");
        body.classList.add('loader');

        setTimeout(()=>{
            body.classList.remove('loader');
        }, 1000)

    }
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoHeight: false,
       
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            780: {
                items: 1
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true

    });
})

startInteractive();