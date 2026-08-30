```javascript
/* =========================================
   ARCHYVERSEV WEBSITE JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


/* ================= COPY IP ================= */

async function copyIP(ip, button) {

    try {

        await navigator.clipboard.writeText(ip);

        showToast("IP copied!");

        if (button) {

            const originalText = button.textContent;

            button.textContent = "COPIED";

            setTimeout(() => {

                button.textContent = originalText;

            }, 1800);

        }

    } catch (error) {

        showToast(ip);

    }

}


/* ================= TOAST ================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* ================= FAQ ================= */

function toggleFAQ(button) {

    const item =
        button.parentElement;

    const allItems =
        document.querySelectorAll(".faq-item");

    allItems.forEach(otherItem => {

        if (otherItem !== item) {

            otherItem.classList.remove("active");

        }

    });

    item.classList.toggle("active");

}


/* ================= NAVBAR ================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(6,6,9,0.95)";

    } else {

        navbar.style.background =
            "rgba(6,6,9,0.75)";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".game-card, .feature-card, .connect-card, .faq-item, .quick-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.08
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* ================= SMOOTH ANCHOR LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ================= CONSOLE ================= */

console.log(
    "%c ARCHYVERSEV ",
    "background:#8b5cf6;color:white;font-size:20px;font-weight:bold;padding:8px;"
);

console.log(
    "Welcome to the ArchyverseV network!"
);
```
