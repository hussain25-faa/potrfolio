/* =========================================================
   PORTFOLIO CONFIGURATION
   EDIT THESE VALUES
========================================================= */

const portfolioConfig = {

    name: "ABS",

    email: "hussainoffcl2525@gmail.com",

    whatsapp: "919786917869",

    social: {

        github: "https://github.com/dashboard",

        linkedin: "https://linkedin.com/",

        instagram: "https://instagram.com/"

    }

};


/* =========================================================
   PROJECTS
   ADD / REMOVE / EDIT PROJECTS HERE
========================================================= */

const projects = [

    {
        title: "Dental Management System",

        category: "Software",

        description:
            "A complete dental management system designed to manage patient records, appointments, treatments and reports.",

        image:
            "images/dental management.jpg",

        technologies: [
            "HTML",
            "CSS",
            "Python",
            "Flask",
            "SQL",
            "Bootstrap"
        ],

        live:
            "https://sain.pythonanywhere.com/",

        
    },


    {
        title: "Modern Business Website",

        category: "Website",

        description:
            "A premium responsive business website designed to create a strong digital presence and generate new customers.",

        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],

        live:
            "#",

        
    },


    {
        title: "Inventory Dashboard",

        category: "Web Application",

        description:
            "An interactive inventory dashboard for tracking products, stock levels, sales and business activity.",

        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",

        technologies: [
            "Python",
            "SQL",
            "Bootstrap"
        ],

        live:
            "#",

       
    },


    {
        title: "E-Commerce Website",

        category: "E-Commerce",

        description:
            "A responsive online shopping experience with product presentation, categories and customer-focused design.",

        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        live:
            "#",

       
    }

];


/* =========================================================
   DOM
========================================================= */

const navbar =
    document.querySelector(".navbar");

const heroVisual =
    document.getElementById("heroVisual");

const projectsContainer =
    document.getElementById("projectsContainer");

const year =
    document.getElementById("year");


/* =========================================================
   YEAR
========================================================= */

year.textContent =
    new Date().getFullYear();


/* =========================================================
   NAVBAR SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   3D HERO MOUSE MOVEMENT
========================================================= */

if (heroVisual) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        const rotateX =
            y * -10;

        const rotateY =
            x * 12;


        heroVisual.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });


    document.addEventListener("mouseleave", () => {

        heroVisual.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    });

}


/* =========================================================
   3D SCROLL EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    if (!heroVisual) return;


    const scroll =
        window.scrollY;


    if (scroll < window.innerHeight) {

        const rotate =
            scroll * 0.08;

        const move =
            scroll * 0.12;


        heroVisual.style.transform +=
            ` translateY(${move}px) rotateZ(${rotate}deg)`;

    }

});


/* =========================================================
   PROJECT RENDERING
========================================================= */

function renderProjects() {

    if (!projectsContainer) return;


    projectsContainer.innerHTML =
        projects.map((project, index) => {

            const technologies =
                project.technologies
                    .map(
                        tech =>
                            `<span>${tech}</span>`
                    )
                    .join("");


            return `

                <article
                    class="project-card reveal"
                    style="transition-delay: ${index * 100}ms"
                >

                    <div class="project-image">

                        <img
                            src="${project.image}"
                            alt="${project.title}"
                            loading="lazy"
                        >

                        <div class="project-overlay"></div>

                    </div>


                    <div class="project-info">

                        <span class="project-category">
                            ${project.category}
                        </span>

                        <h3>
                            ${project.title}
                        </h3>

                        <p>
                            ${project.description}
                        </p>


                        <div class="project-tech">

                            ${technologies}

                        </div>


                        <div class="project-links">

                            <a
                                href="${project.live}"
                                target="_blank"
                            >

                                Live Project

                                <i class="bi bi-arrow-up-right"></i>

                            </a>


                            <a
                                href="${project.github}"
                                target="_blank"
                            >

                                GitHub

                                <i class="bi bi-github"></i>

                            </a>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


renderProjects();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


function observeRevealElements() {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            revealObserver.observe(element);

        });

}


observeRevealElements();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("open");

});


mobileClose.addEventListener("click", () => {

    mobileMenu.classList.remove("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },
        {
            rootMargin:
                "-40% 0px -50% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const projectType =
            document.getElementById("projectType").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Please complete the required fields.";

            formMessage.style.color =
                "#ff7777";

            return;

        }


        /*
            TEMPORARY EMAIL METHOD

            This opens the visitor's email application.

            For REAL automatic email delivery,
            connect this form to Formspree,
            Web3Forms, EmailJS, or your own backend.
        */


        const subject =
            encodeURIComponent(
                `New Portfolio Inquiry - ${projectType || "Project"}`
            );


        const body =
            encodeURIComponent(

                `Hello,

Name: ${name}
Email: ${email}
Project Type: ${projectType || "Not specified"}

Message:
${message}

Sent from my portfolio website.`

            );


        window.location.href =
            `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;


        formMessage.textContent =
            "Opening your email application...";

        formMessage.style.color =
            "#66ff9a";

    }
);


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

document
    .querySelectorAll(
        ".primary-button, .secondary-button, .nav-button"
    )
    .forEach(button => {

        button.addEventListener(
            "mousemove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(${x * .12}px, ${y * .12}px)`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "";

            }
        );

    });


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.style.opacity = ".3";

        }

    },
    true
);
