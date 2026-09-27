/* =========================================
   ROMANTIC LUXURY WEBSITE
   STEP 3 — SCRIPT.JS
========================================= */


/* =========================================
   OPEN OUR STORY
========================================= */

function openSurprise() {

    const storySection = document.getElementById("story");

    if (storySection) {

        storySection.scrollIntoView({
            behavior: "smooth"
        });

    }

    createHeartBurst();
}


/* =========================================
   FINAL SURPRISE
========================================= */

function showMessage() {

    createHeartBurst();

    setTimeout(() => {

        const finalSection = document.querySelector(".final");

        if (finalSection) {

            finalSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 500);

}


/* =========================================
   HEART BURST EFFECT
========================================= */

function createHeartBurst() {

    const hearts = [
        "♥",
        "❤",
        "♡",
        "💗",
        "❤️"
    ];

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("span");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.zIndex = "9999";

        heart.style.pointerEvents = "none";

        heart.style.fontSize =
            `${Math.floor(Math.random() * 18) + 15}px`;

        heart.style.color =
            i % 2 === 0
                ? "#c33148"
                : "#d6b36a";

        const x =
            (Math.random() - 0.5) * 500;

        const y =
            (Math.random() - 0.5) * 500;

        heart.style.setProperty(
            "--x",
            `${x}px`
        );

        heart.style.setProperty(
            "--y",
            `${y}px`
        );

        heart.style.animation =
            "heartBurst 1.4s ease-out forwards";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1500);

    }
}


/* =========================================
   HEART BURST ANIMATION
========================================= */

const heartStyle = document.createElement("style");

heartStyle.innerHTML = `

@keyframes heartBurst {

    0% {

        transform:
            translate(-50%, -50%)
            scale(0);

        opacity: 1;
    }

    60% {

        opacity: 1;
    }

    100% {

        transform:
            translate(
                calc(-50% + var(--x)),
                calc(-50% + var(--y))
            )
            scale(1.2);

        opacity: 0;
    }

}

`;

document.head.appendChild(heartStyle);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".story-content, .gallery-item, .letter-box, .final-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================================
   REVEAL CSS
========================================= */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.reveal {

    opacity: 0;

    transform: translateY(50px);

    transition:
        opacity 1s ease,
        transform 1s ease;

}

.reveal.show {

    opacity: 1;

    transform: translateY(0);

}

.gallery-item:nth-child(2) {
    transition-delay: 0.15s;
}

.gallery-item:nth-child(3) {
    transition-delay: 0.3s;
}

`;

document.head.appendChild(revealStyle);


/* =========================================
   IMAGE PARALLAX
========================================= */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        hero.style.backgroundPosition =
            `center ${scrollPosition * 0.35}px`;

    }

});


/* =========================================
   BUTTON RIPPLE EFFECT
========================================= */

const buttons = document.querySelectorAll(
    ".surprise-btn, .final-btn"
);

buttons.forEach((button) => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        ripple.style.position = "absolute";

        ripple.style.width = "10px";
        ripple.style.height = "10px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,0.25)";

        ripple.style.transform =
            "translate(-50%, -50%) scale(0)";

        ripple.style.pointerEvents = "none";

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left}px`;

        ripple.style.top =
            `${event.clientY - rect.top}px`;

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);

        ripple.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },
                {
                    transform:
                        "translate(-50%, -50%) scale(25)",

                    opacity: 0
                }
            ],
            {
                duration: 600,
                easing: "ease-out"
            }
        );

        setTimeout(() => {

            ripple.remove();

        }, 650);

    });

});


/* =========================================
   PAGE LOADED
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "❤️ Romantic Luxury Website Loaded"
    );

});