const navSlider = () => {
    const n = document.querySelector(".burger"),
        e = document.querySelector(".nav-links"),
        t = document.querySelectorAll(".nav-links li"),
        o = document.getElementsByTagName("nav");
    n.addEventListener("click", () => {
        e.classList.toggle("nav-active"),
            t.forEach((n, e) => {
                n.style.animation ? (n.style.animation = "") : (n.style.animation = "navlinkFade 0.5s ease forwards");
            }),
            n.classList.toggle("toggle"),
            o[0].classList.toggle("nav_bg_cng");
    });
};
navSlider(),
    $(document).ready(function() {
        AOS.init({ duration: 1000 }),
            $(window).on("scroll", function() {
                $(window).scrollTop() ? $("nav").css("background-color", "#744587") : $("nav").css("background-color", "transparent");
            });

        // control mixitup
        var mixer = mixitup('.my_container', {
            animation: {
                duration: 500,
            },
            selectors: {
                target: '.kha'
            },
            controls: {
                live: false,
                toggleLogic: 'and'
            },
        });
    });