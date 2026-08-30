/* =========================================
   BLOCKREALM WEBSITE JAVASCRIPT
========================================= */


/* SERVER CONFIGURATION */

const SERVER_IP = "play.blockrealm.net";


/* MOBILE NAVIGATION */

function toggleMenu() {
    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");
}


/* CLOSE MOBILE MENU WHEN CLICKING A LINK */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


/* SCROLL TO SERVER */

function scrollToServer() {

    document
        .getElementById("serverCard")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


/* COPY SERVER IP */

async function copyIP() {

    try {

        await navigator.clipboard.writeText(SERVER_IP);

        const message =
            document.getElementById("copyMessage");

        message.classList.add("show");

        setTimeout(() => {
            message.classList.remove("show");
        }, 2500);

    } catch (error) {

        alert(
            "Server IP: " + SERVER_IP
        );

    }
}


/* FAQ ACCORDION */

function toggleFAQ(button) {

    const item = button.parentElement;

    const allItems =
        document.querySelectorAll(".faq-item");

    allItems.forEach(otherItem => {

        if (otherItem !== item) {
            otherItem.classList.remove("active");
        }

    });

    item.classList.toggle("active");
}


/* ANIMATED STAT NUMBERS */

const counters =
    document.querySelectorAll("[data-target]");

const counterObserver =
    new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.target);

            let current = 0;

            const duration = 1600;

            const startTime = performance.now();

            function updateCounter(time) {

                const progress =
                    Math.min(
                        (time - startTime) / duration,
                        1
                    );

                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                counter.textContent =
                    current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent =
                        target.toLocaleString();
                }
            }

            requestAnimationFrame(updateCounter);

            observer.unobserve(counter);

        });

    }, {
        threshold: 0.5
    });


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* FAKE LIVE PLAYER COUNTER */

const playersElement =
    document.getElementById("players");

let onlinePlayers = 247;

function updatePlayers() {

    const change =
        Math.floor(Math.random() * 7) - 3;

    onlinePlayers += change;

    if (onlinePlayers < 180) {
        onlinePlayers = 180;
    }

    if (onlinePlayers > 350) {
        onlinePlayers = 350;
    }

    playersElement.textContent =
        onlinePlayers;
}

setInterval(updatePlayers, 5000);


/* NAVBAR BACKGROUND ON SCROLL */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5, 9, 7, 0.95)";

    } else {

        navbar.style.background =
            "rgba(7, 11, 9, 0.75)";

    }

});


/* REVEAL ELEMENTS ON SCROLL */

const revealElements =
    document.querySelectorAll(
        ".mode-card, .feature, .staff-card, .store-card"
    );

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    }, {
        threshold: 0.1
    });


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});


/* UPDATE PAGE SERVER IP */

document.getElementById("serverIP").textContent =
    SERVER_IP;
