```javascript
/* =========================================
   ARCHYVERSEV JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const navigation =
        document.getElementById("navigation");

    navigation.classList.toggle("active");

}


/* Close mobile menu when clicking a link */

document
    .querySelectorAll("#navigation a")
    .forEach(link => {

        link.addEventListener("click", () => {

            document
                .getElementById("navigation")
                .classList.remove("active");

        });

    });


/* ================= COPY IP ================= */

async function copyText(text, button) {

    try {

        await navigator.clipboard.writeText(text);

        const original =
            button.textContent;

        button.textContent = "COPIED";

        showToast("Server address copied!");

        setTimeout(() => {

            button.textContent =
                original;

        }, 1800);

    } catch (error) {

        showToast(text);

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

    const current =
        button.parentElement;

    const items =
        document.querySelectorAll(".faq-item");

    items.forEach(item => {

        if (item !== current) {

            item.classList.remove("active");

        }

    });

    current.classList.toggle("active");

}


/* ================= NAVBAR ================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.background =
            "rgba(5,5,8,0.96)";

    } else {

        navbar.style.background =
            "rgba(7,7,10,0.82)";

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".game-card, .feature, .connection-card, .discord-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "visible"
                );

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

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================= CONSOLE ================= */

console.log(
    "%c ARCHYVERSEV ",
    "background:#8b5cf6;color:white;font-size:18px;font-weight:bold;padding:8px"
);

console.log(
    "Welcome to the ArchyverseV network!"
);
```
