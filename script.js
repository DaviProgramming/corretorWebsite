window.addEventListener('scroll', () =>{
    let navbar = document.querySelector('.navbar');

    let windowPosition = window.scrollY > 0;

    navbar.classList.toggle('scroll', windowPosition);
})


const startInteractive = () => {
    let getButtonNavbar = document.querySelectorAll('.navbar-link');
    getButtonNavbar.forEach(button => button.addEventListener('click', () => {NavbarConfig.changeButton(button)}))
}

const NavbarConfig = {
    removeActive(){
        let activeButton = document.querySelector('.navbar-link.active');
        activeButton.classList.remove('active');
        return;
    },
    changeButton(button){
        
        this.removeActive();
        let buttonToActive = button;
        buttonToActive.classList.add('active');

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

