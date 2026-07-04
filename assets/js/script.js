/*
===========================================
MAVEN CROWN
Professional JavaScript
===========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    /*
    ===========================================
    Sticky Navbar
    ===========================================
    */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (!navbar) return;

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", navbarScroll);

    navbarScroll();


    /*
    ===========================================
    Smooth Scrolling
    ===========================================
    */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });


    /*
    ===========================================
    Counter Animation
    ===========================================
    */

    const counters = document.querySelectorAll(".counter h2");

    let counterStarted = false;

    function startCounters() {

        if (counterStarted) return;

        const section = document.querySelector(".counter-section");

        if (!section) return;

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const target = parseInt(counter.innerText);

                if (isNaN(target)) return;

                let count = 0;

                const speed = target / 100;

                const update = () => {

                    count += speed;

                    if (count < target) {

                        counter.innerText = Math.floor(count);

                        requestAnimationFrame(update);

                    } else {

                        counter.innerText = target + "+";

                    }

                };

                update();

            });

        }

    }

    window.addEventListener("scroll", startCounters);

    startCounters();


    /*
    ===========================================
    Back To Top
    ===========================================
    */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backTop.style.display = "flex";

            } else {

                backTop.style.display = "none";

            }

        });

    }


    /*
    ===========================================
    Fade In Animation
    ===========================================
    */

    const reveals = document.querySelectorAll(".fade-up");

    function revealElements() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.style.opacity = "1";

                item.style.transform = "translateY(0)";

            }

        });

    }

    window.addEventListener("scroll", revealElements);

    revealElements();


    /*
    ===========================================
    Active Navigation
    ===========================================
    */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar .nav-link").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });


    /*
    ===========================================
    Portfolio Hover
    ===========================================
    */

    document.querySelectorAll(".portfolio-card").forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });


    /*
    ===========================================
    Contact Form Validation
    ===========================================
    */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            const required = form.querySelectorAll("[required]");

            let valid = true;

            required.forEach(input => {

                if (input.value.trim() === "") {

                    input.classList.add("is-invalid");

                    valid = false;

                } else {

                    input.classList.remove("is-invalid");

                }

            });

            if (!valid) {

                e.preventDefault();

                alert("Please complete all required fields.");

            }

        });

    }


    /*
    ===========================================
    Loading Effect
    ===========================================
    */

    document.body.classList.add("loaded");

});