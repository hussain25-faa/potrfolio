/* =========================================================
   PAGE LOAD / REFRESH FIX
========================================================= */

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

/* =========================================================
   PRELOADER
========================================================= */

const preloader = document.getElementById("preloader");

function dismissPreloader() {
    if (!preloader || preloader.classList.contains("is-hidden")) return;

    preloader.classList.add("is-hidden");
    document.body.classList.remove("is-loading");

    window.setTimeout(() => {
        preloader.setAttribute("aria-hidden", "true");
    }, 650);
}

if (preloader) {
    document.body.classList.add("is-loading");
    window.setTimeout(dismissPreloader, 1000);
}

/* Always start from Home when the page is refreshed */
window.addEventListener("load", () => {
    if (window.location.hash) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    }

    window.scrollTo(0, 0);
});
/* =========================================================
   FAST NAVIGATION SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        e.preventDefault();

        const navbar = document.querySelector(".navbar");

        const navbarHeight = navbar
            ? navbar.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight -
            10;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

        /* Remove #projects / #about / etc. from URL */
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );

    });

});

/* =========================================================
   PORTFOLIO CONFIGURATION
   EDIT THESE VALUES
========================================================= */

const portfolioConfig = {

    name: "Sh Solutions",

    email: "hussainoffcl2525@gmail.com",

    whatsapp: "919786917869",

    social: {

        /*github: "https://github.com/dashboard",*/

        linkedin: "https://linkedin.com/",

        instagram: "https://www.instagram.com/shsolutions.in?stkn=ODU3djlqN2I5bmtn"

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
            "https://dental-bay-phi.vercel.app/",

        
    },


    {
        title: "Verdant Architecture Studio",

        category: "Architecture Website",

        description:
            "A premium responsive architecture studio website featuring an automated hero slideshow, curated project showcase, fluid scroll animations, and interactive client enquiry workflow.",

        image:
            "images/verdant-architecture.jpg",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "Responsive UI"
        ],

        live:
            "https://verdant-eight-bice.vercel.app/",

        
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
        .querySelectorAll(".reveal, .cta-entrance")
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
/* =========================================================
   PREMIUM CARD SPOTLIGHT (visual only)
========================================================= */

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".service-card, .project-card, .contact-form").forEach(card => {
        card.addEventListener("mousemove", event => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
            card.style.setProperty("--my", `${event.clientY - rect.top}px`);
        });
    });
}
/* =========================================================
   PREMIUM ANIMATED SECTION BACKGROUNDS (visual only)
   Each section gets its own canvas animation.
========================================================= */

(function () {

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isSmallScreen = () => window.innerWidth <= 600;

    /* Which section gets which background */
    const sceneConfigs = [
        { selector: ".hero",        mode: "network", a: "155,124,255", b: "0,229,255",   density: 1 },
        { selector: "#about",       mode: "drift",   a: "0,229,255",   b: "155,124,255", density: .8 },
        { selector: "#services",    mode: "waves",   a: "155,124,255", b: "255,255,255", density: 1 },
        { selector: "#projects",    mode: "orbs",    a: "0,229,255",   b: "155,124,255", density: 1 },
        { selector: ".cta-section", mode: "rings",   a: "155,124,255", b: "0,229,255",   density: 1 },
        { selector: "#contact",     mode: "grid",    a: "0,229,255",   b: "155,124,255", density: 1 }
    ];

    const modes = {

        /* Dots drifting and connecting with lines */
        network: {
            setup(s) {
                const count = Math.round(Math.min(95, (s.w * s.h) / 15000) * s.cfg.density * s.scale);
                s.points = Array.from({ length: count }, () => ({
                    x: Math.random() * s.w,
                    y: Math.random() * s.h,
                    vx: (Math.random() - .5) * .3,
                    vy: (Math.random() - .5) * .3,
                    r: Math.random() * 1.3 + .5
                }));
            },
            draw(s) {
                const { ctx, w, h, points, cfg } = s;
                const step = s.dt * 60;
                const maxDist = 150;

                points.forEach(p => {
                    p.x += p.vx * step;
                    p.y += p.vy * step;
                    if (p.x < 0) p.x = w;
                    if (p.x > w) p.x = 0;
                    if (p.y < 0) p.y = h;
                    if (p.y > h) p.y = 0;
                });

                ctx.lineWidth = 1;
                for (let i = 0; i < points.length; i++) {
                    for (let j = i + 1; j < points.length; j++) {
                        const a = points[i], b = points[j];
                        const d = Math.hypot(a.x - b.x, a.y - b.y);
                        if (d < maxDist) {
                            ctx.strokeStyle = `rgba(${cfg.a},${(1 - d / maxDist) * .2})`;
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(b.x, b.y);
                            ctx.stroke();
                        }
                    }
                }

                points.forEach(p => {
                    ctx.fillStyle = `rgba(${cfg.b},.75)`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        },

        /* Soft light particles rising slowly */
        drift: {
            setup(s) {
                const count = Math.round(Math.min(70, (s.w * s.h) / 18000) * s.cfg.density * s.scale);
                s.points = Array.from({ length: count }, () => ({
                    x: Math.random() * s.w,
                    y: Math.random() * s.h,
                    speed: .12 + Math.random() * .35,
                    phase: Math.random() * Math.PI * 2,
                    r: Math.random() * 1.6 + .6
                }));
            },
            draw(s, t) {
                const { ctx, w, h, points, cfg } = s;
                const step = s.dt * 60;

                points.forEach(p => {
                    p.y -= p.speed * step;
                    p.x += Math.sin(t * .6 + p.phase) * .25 * step;
                    if (p.y < -12) {
                        p.y = h + 12;
                        p.x = Math.random() * w;
                    }

                    const alpha = .3 + .4 * (.5 + .5 * Math.sin(t * 1.4 + p.phase));

                    ctx.fillStyle = `rgba(${cfg.a},${alpha * .18})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = `rgba(${cfg.b},${alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        },

        /* Flowing luminous wave lines */
        waves: {
            setup(s) {
                const count = Math.max(5, Math.round(9 * s.scale));
                s.lines = Array.from({ length: count }, (_, i) => ({
                    y: s.h * (i + 1) / (count + 1),
                    amp: 18 + Math.random() * 34,
                    freq: .0025 + Math.random() * .0022,
                    speed: .25 + Math.random() * .4,
                    phase: Math.random() * Math.PI * 2
                }));
            },
            draw(s, t) {
                const { ctx, w, lines, cfg } = s;

                lines.forEach((ln, i) => {
                    const g = ctx.createLinearGradient(0, 0, w, 0);
                    g.addColorStop(0, `rgba(${cfg.a},0)`);
                    g.addColorStop(.5, `rgba(${i % 2 ? cfg.b : cfg.a},.28)`);
                    g.addColorStop(1, `rgba(${cfg.b},0)`);

                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    for (let x = 0; x <= w; x += 10) {
                        const y = ln.y
                            + Math.sin(x * ln.freq + t * ln.speed + ln.phase) * ln.amp
                            + Math.sin(x * ln.freq * .45 - t * ln.speed * .7) * ln.amp * .4;
                        if (x === 0) ctx.moveTo(x, y);
                        else ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                });
            }
        },

        /* Large soft glowing orbs moving slowly */
        orbs: {
            setup(s) {
                const count = Math.max(3, Math.round(5 * s.scale));
                s.orbs = Array.from({ length: count }, (_, i) => ({
                    r: 160 + Math.random() * 200,
                    ax: .2 + Math.random() * .25,
                    ay: .15 + Math.random() * .25,
                    phase: Math.random() * Math.PI * 2,
                    speed: .04 + Math.random() * .05,
                    color: i % 2 ? s.cfg.b : s.cfg.a
                }));
            },
            draw(s, t) {
                const { ctx, w, h, orbs } = s;

                orbs.forEach(o => {
                    const x = w * (.5 + o.ax * Math.sin(t * o.speed + o.phase));
                    const y = h * (.5 + o.ay * Math.cos(t * o.speed * .8 + o.phase));

                    const g = ctx.createRadialGradient(x, y, 0, x, y, o.r);
                    g.addColorStop(0, `rgba(${o.color},.2)`);
                    g.addColorStop(.6, `rgba(${o.color},.05)`);
                    g.addColorStop(1, `rgba(${o.color},0)`);

                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(x, y, o.r, 0, Math.PI * 2);
                    ctx.fill();
                });
            }
        },

        /* Pulse rings expanding from the centre */
        rings: {
            setup(s) {
                s.maxR = Math.hypot(s.w, s.h) * .5;
            },
            draw(s, t) {
                const { ctx, w, h, cfg, maxR } = s;
                const cx = w / 2, cy = h / 2;
                const count = 7;

                for (let i = 0; i < count; i++) {
                    const p = (t * .07 + i / count) % 1;
                    const r = Math.max(2, p * maxR);
                    ctx.strokeStyle = `rgba(${i % 2 ? cfg.b : cfg.a},${(1 - p) * .22})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        },

        /* Dot grid with a travelling wave */
        grid: {
            setup(s) {
                s.gap = s.w < 600 ? 34 : 44;
            },
            draw(s, t) {
                const { ctx, w, h, gap, cfg } = s;

                for (let x = gap / 2; x < w; x += gap) {
                    for (let y = gap / 2; y < h; y += gap) {
                        const wave = .5 + .5 * Math.sin(x * .012 + y * .009 - t * .9);
                        const r = .6 + wave * 1.4;
                        ctx.fillStyle = `rgba(${wave > .6 ? cfg.b : cfg.a},${.06 + wave * .28})`;
                        ctx.beginPath();
                        ctx.arc(x, y, r, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        }
    };

    function createScene(section, cfg) {
        const canvas = document.createElement("canvas");
        canvas.className = "section-bg-canvas";
        canvas.setAttribute("aria-hidden", "true");
        section.prepend(canvas);

        const s = {
            section,
            canvas,
            ctx: canvas.getContext("2d"),
            cfg,
            mode: modes[cfg.mode],
            w: 0,
            h: 0,
            scale: 1,
            dt: 1 / 60,
            time: 0,
            last: 0,
            running: false,
            inView: false
        };

        s.resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, isSmallScreen() ? 1.5 : 2);
            s.w = section.offsetWidth;
            s.h = section.offsetHeight;
            s.scale = isSmallScreen() ? .55 : 1;

            canvas.width = Math.round(s.w * dpr);
            canvas.height = Math.round(s.h * dpr);
            s.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            if (prefersReduced) s.time = 4;

            s.mode.setup(s);
            canvas.classList.add("is-ready");

            if (prefersReduced) s.render();
        };

        s.render = () => {
            s.ctx.clearRect(0, 0, s.w, s.h);
            s.mode.draw(s, s.time);
        };

        function frame(now) {
            if (!s.running) return;
            s.dt = Math.min((now - s.last) / 1000, .05);
            s.last = now;
            s.time += s.dt;
            s.render();
            requestAnimationFrame(frame);
        }

        s.start = () => {
            if (s.running || prefersReduced) return;
            s.running = true;
            s.last = performance.now();
            requestAnimationFrame(frame);
        };

        s.stop = () => {
            s.running = false;
        };

        s.sync = () => {
            if (s.inView && !document.hidden) s.start();
            else s.stop();
        };

        const observer = new IntersectionObserver(([entry]) => {
            s.inView = entry.isIntersecting;
            s.sync();
        }, { threshold: 0 });

        observer.observe(section);

        return s;
    }

    const scenes = sceneConfigs
        .map(cfg => {
            const section = document.querySelector(cfg.selector);
            return section ? createScene(section, cfg) : null;
        })
        .filter(Boolean);

    scenes.forEach(s => s.resize());

    document.addEventListener("visibilitychange", () => {
        scenes.forEach(s => s.sync());
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => scenes.forEach(s => s.resize()), 200);
    });

})();
/* =========================================================
   PREMIUM 3D SECTION BACKGROUNDS (WebGL, visual only)
   Motion runs on the GPU. One shared loop draws only
   the sections currently on screen.
========================================================= */

(function () {

    const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FINE_POINTER = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r150/three.min.js";

    const COLORS = {
        cyan: [0, .9, 1],
        violet: [.61, .49, 1],
        white: [1, 1, 1]
    };

    /* kind: 0 network, 1 wave grid, 2 orbs, 3 rising particles, 4 rings */
    const CONFIGS = [
        { sel: ".hero",        kind: 0, count: 80, link: .55, spread: [2.1, 1.2, .9], amp: .09, spin: .035, tilt: 0,    camZ: 5.2, halfW: 2.1, halfH: 1.2, colA: COLORS.violet, colB: COLORS.cyan },
        { sel: "#about",       kind: 3, count: 170, spread: [2.0, 1.25, .8],          amp: 0,   spin: .02,  tilt: 0,    camZ: 5,   halfW: 2.0, halfH: 1.25, colA: COLORS.cyan, colB: COLORS.violet },
        { sel: "#services",    kind: 1, cols: 64, rows: 30, gridW: 2.5, gridH: 1.5,   amp: .16, spin: .03,  tilt: -.55, camZ: 5.4, halfW: 2.5, halfH: 1.3, colA: COLORS.violet, colB: COLORS.white },
        { sel: "#projects",    kind: 2, count: 6,                                    amp: .55, spin: .02,  tilt: 0,    camZ: 5,   halfW: 2.2, halfH: 1.3, colA: COLORS.cyan, colB: COLORS.violet },
        { sel: ".cta-section", kind: 4,                                               amp: 0,   spin: .04,  tilt: 1.0,  camZ: 4.2, halfW: 1.8, halfH: 1.1, colA: COLORS.violet, colB: COLORS.cyan },
        { sel: "#contact",     kind: 1, cols: 72, rows: 26, gridW: 2.5, gridH: 1.5,   amp: .10, spin: .025, tilt: .6,   camZ: 5.4, halfW: 2.5, halfH: 1.3, colA: COLORS.cyan, colB: COLORS.violet }
    ];

    function loadThree() {
        return new Promise((resolve, reject) => {
            if (window.THREE) return resolve(window.THREE);
            const script = document.createElement("script");
            script.src = THREE_SRC;
            script.async = true;
            script.onload = () => resolve(window.THREE);
            script.onerror = () => reject(new Error("Three.js could not load"));
            document.head.appendChild(script);
        });
    }

    loadThree()
        .then(init)
        .catch(err => console.warn("3D background skipped:", err));

    function init(THREE) {

        const VERTEX = `
            uniform float uTime;
            uniform float uMode;
            uniform float uAmp;
            uniform float uPixel;
            uniform float uRange;
            attribute vec3 aSeed;
            attribute vec3 aColor;
            attribute float aSize;
            varying vec3 vColor;

            void main() {
                vec3 p = position;
                float t = uTime;

                if (uMode < 0.5) {
                    p += vec3(
                        sin(t * (0.35 + aSeed.x) + aSeed.y * 6.2832),
                        cos(t * (0.30 + aSeed.y) + aSeed.z * 6.2832),
                        sin(t * (0.28 + aSeed.z) + aSeed.x * 6.2832)
                    ) * uAmp;
                } else if (uMode < 1.5) {
                    p.z += (sin(p.x * 2.0 + t * 0.8) + cos(p.y * 2.4 - t * 0.6)) * uAmp;
                } else if (uMode < 2.5) {
                    float a = t * (0.15 + aSeed.x * 0.25) + aSeed.y * 6.2832;
                    p.x += cos(a) * uAmp;
                    p.y += sin(a * 0.85) * uAmp * 0.7;
                    p.z += sin(a * 0.5) * uAmp * 0.5;
                } else {
                    p.y = mod(p.y + t * (0.08 + aSeed.x * 0.2) + uRange, 2.0 * uRange) - uRange;
                    p.x += sin(t * 0.5 + aSeed.y * 6.2832) * 0.04;
                }

                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_Position = projectionMatrix * mv;
                gl_PointSize = min(aSize * uPixel / max(-mv.z, 0.1), 200.0);
                vColor = aColor;
            }
        `;

        const FRAGMENT = `
            uniform float uOpacity;
            uniform float uPoints;
            uniform float uGlow;
            varying vec3 vColor;

            void main() {
                float a = uOpacity;
                if (uPoints > 0.5) {
                    float d = length(gl_PointCoord - vec2(0.5));
                    if (d > 0.5) discard;
                    a *= uGlow > 0.5 ? pow(1.0 - d * 2.0, 2.0) : smoothstep(0.5, 0.1, d);
                }
                gl_FragColor = vec4(vColor, a);
            }
        `;

        const pointer = { tx: 0, ty: 0 };

        if (FINE_POINTER && !REDUCED) {
            window.addEventListener("pointermove", e => {
                pointer.tx = e.clientX / window.innerWidth - .5;
                pointer.ty = e.clientY / window.innerHeight - .5;
            }, { passive: true });
        }

        function makeGeometry(positions, seeds, colors, sizes) {
            const g = new THREE.BufferGeometry();
            g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
            g.setAttribute("aSeed", new THREE.Float32BufferAttribute(seeds, 3));
            g.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
            g.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));
            return g;
        }

        function addLayer(s, geometry, isPoints, opacity, glow) {
            const material = new THREE.ShaderMaterial({
                vertexShader: VERTEX,
                fragmentShader: FRAGMENT,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                uniforms: {
                    uTime: { value: 0 },
                    uMode: { value: s.cfg.kind },
                    uAmp: { value: 0 },
                    uPixel: { value: 9 },
                    uRange: { value: 1 },
                    uOpacity: { value: opacity },
                    uPoints: { value: isPoints ? 1 : 0 },
                    uGlow: { value: glow ? 1 : 0 }
                }
            });
            const object = isPoints
                ? new THREE.Points(geometry, material)
                : new THREE.LineSegments(geometry, material);
            s.group.add(object);
            s.mats.push(material);
        }

        function buildNetwork(cfg, count) {
            const P = [], S = [], C = [], Z = [];
            const pts = [];
            for (let i = 0; i < count; i++) {
                const p = {
                    x: (Math.random() * 2 - 1) * cfg.spread[0],
                    y: (Math.random() * 2 - 1) * cfg.spread[1],
                    z: (Math.random() * 2 - 1) * cfg.spread[2],
                    s: [Math.random(), Math.random(), Math.random()]
                };
                pts.push(p);
                P.push(p.x, p.y, p.z);
                S.push(...p.s);
                C.push(...cfg.colB);
                Z.push(2 + Math.random() * 2.5);
            }

            const LP = [], LS = [], LC = [], LZ = [];
            for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const a = pts[i], b = pts[j];
                    const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
                    if (d < cfg.link) {
                        for (const p of [a, b]) {
                            LP.push(p.x, p.y, p.z);
                            LS.push(...p.s);
                            LC.push(...cfg.colA);
                            LZ.push(1);
                        }
                    }
                }
            }

            return {
                points: makeGeometry(P, S, C, Z),
                lines: makeGeometry(LP, LS, LC, LZ)
            };
        }

        function buildGrid(cfg) {
            const { cols, rows } = cfg;
            const P = [], S = [], C = [], Z = [];

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    P.push(
                        (c / (cols - 1) - .5) * cfg.gridW * 2,
                        (r / (rows - 1) - .5) * cfg.gridH * 2,
                        0
                    );
                    S.push(c / cols, r / rows, 0);
                    C.push(...cfg.colB);
                    Z.push(2.2);
                }
            }

            const LP = [], LS = [], LC = [], LZ = [];
            const seg = (a, b) => {
                for (const i of [a, b]) {
                    LP.push(P[3 * i], P[3 * i + 1], P[3 * i + 2]);
                    LS.push(S[3 * i], S[3 * i + 1], S[3 * i + 2]);
                    LC.push(...cfg.colA);
                    LZ.push(1);
                }
            };

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const i = r * cols + c;
                    if (c < cols - 1) seg(i, i + 1);
                    if (r < rows - 1) seg(i, i + cols);
                }
            }

            return {
                points: makeGeometry(P, S, C, Z),
                lines: makeGeometry(LP, LS, LC, LZ)
            };
        }

        function buildOrbs(cfg) {
            const P = [], S = [], C = [], Z = [];
            for (let i = 0; i < cfg.count; i++) {
                P.push((Math.random() * 2 - 1) * 1.1, (Math.random() * 2 - 1) * .7, (Math.random() * 2 - 1) * .4);
                S.push(Math.random(), Math.random(), Math.random());
                C.push(...(i % 2 ? cfg.colB : cfg.colA));
                Z.push(60 + Math.random() * 50);
            }
            return makeGeometry(P, S, C, Z);
        }

        function buildRise(cfg, count) {
            const P = [], S = [], C = [], Z = [];
            for (let i = 0; i < count; i++) {
                P.push(
                    (Math.random() * 2 - 1) * cfg.spread[0],
                    (Math.random() * 2 - 1) * cfg.spread[1],
                    (Math.random() * 2 - 1) * cfg.spread[2]
                );
                S.push(Math.random(), Math.random(), Math.random());
                C.push(...(Math.random() > .5 ? cfg.colA : cfg.colB));
                Z.push(1.5 + Math.random() * 2.5);
            }
            return makeGeometry(P, S, C, Z);
        }

        function buildRings(s) {
            const cfg = s.cfg;
            const COUNT = 5;
            const rings = [];

            for (let i = 0; i < COUNT; i++) {
                const points = [];
                for (let j = 0; j <= 128; j++) {
                    const a = (j / 128) * Math.PI * 2;
                    points.push(new THREE.Vector3(Math.cos(a), Math.sin(a), 0));
                }
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const color = i % 2 ? cfg.colB : cfg.colA;
                const material = new THREE.LineBasicMaterial({
                    color: new THREE.Color(color[0], color[1], color[2]),
                    transparent: true,
                    opacity: 0,
                    depthWrite: false,
                    blending: THREE.AdditiveBlending
                });
                const ring = new THREE.LineLoop(geometry, material);
                s.group.add(ring);
                rings.push(ring);
            }

            s.custom = (t) => {
                rings.forEach((ring, i) => {
                    const p = (t * .07 + i / COUNT) % 1;
                    ring.scale.setScalar(.2 + p * 2.4);
                    ring.material.opacity = (1 - p) * .5;
                });
            };
        }

        function build(s, small) {
            const cfg = s.cfg;
            const k = small ? .6 : 1;

            if (cfg.kind === 0) {
                const g = buildNetwork(cfg, Math.round(cfg.count * k));
                addLayer(s, g.lines, false, .16, false);
                addLayer(s, g.points, true, .9, false);
            } else if (cfg.kind === 1) {
                const g = buildGrid(cfg);
                addLayer(s, g.lines, false, .13, false);
                addLayer(s, g.points, true, .8, false);
            } else if (cfg.kind === 2) {
                addLayer(s, buildOrbs(cfg), true, .3, true);
            } else if (cfg.kind === 3) {
                addLayer(s, buildRise(cfg, Math.round(cfg.count * k)), true, .85, false);
            } else if (cfg.kind === 4) {
                buildRings(s);
            }
        }

        function createScene(cfg) {
            const section = document.querySelector(cfg.sel);
            if (!section) return null;

            const canvas = document.createElement("canvas");
            canvas.className = "section-bg-canvas";
            canvas.setAttribute("aria-hidden", "true");
            section.prepend(canvas);

            const small = window.innerWidth < 600;

            const renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: !small
            });
            renderer.setClearColor(0x000000, 0);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, 1, .1, 100);
            const group = new THREE.Group();
            scene.add(group);

            const s = {
                cfg,
                section,
                canvas,
                renderer,
                scene,
                camera,
                group,
                mats: [],
                custom: null,
                visible: false,
                px: 0,
                py: 0
            };

            build(s, small);

            s.resize = () => {
                const w = section.clientWidth;
                const h = section.clientHeight;
                if (!w || !h) return;

                const isSmall = w < 600;
                const pr = Math.min(window.devicePixelRatio || 1, isSmall ? 1.5 : 2);

                renderer.setPixelRatio(pr);
                renderer.setSize(w, h, false);

                camera.aspect = w / h;
                const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
                const dz = Math.max(cfg.camZ, cfg.halfW / (tanHalf * camera.aspect), cfg.halfH / tanHalf);
                camera.position.set(0, 0, dz);
                camera.updateProjectionMatrix();

                s.mats.forEach(m => {
                    m.uniforms.uPixel.value = pr * 9 * (isSmall ? 1.4 : 1);
                    m.uniforms.uAmp.value = cfg.amp * (isSmall ? .75 : 1);
                    m.uniforms.uRange.value = cfg.halfH;
                });

                canvas.classList.add("is-ready");
            };

            s.draw = (t) => {
                s.px += (pointer.tx - s.px) * .04;
                s.py += (pointer.ty - s.py) * .04;

                group.rotation.y = t * cfg.spin + s.px * .6;
                group.rotation.x = cfg.tilt + s.py * .25;

                s.mats.forEach(m => { m.uniforms.uTime.value = t; });
                if (s.custom) s.custom(t);

                renderer.render(scene, camera);
            };

            new IntersectionObserver(([entry]) => {
                s.visible = entry.isIntersecting;
            }, { rootMargin: "150px 0px" }).observe(section);

            new ResizeObserver(() => s.resize()).observe(section);

            s.resize();
            return s;
        }

        const scenes = CONFIGS
            .map(createScene)
            .filter(Boolean);

        if (REDUCED) {
            scenes.forEach(s => s.draw(4));
            return;
        }

        const start = performance.now();

        function loop(now) {
            requestAnimationFrame(loop);
            if (document.hidden) return;

            const t = (now - start) / 1000;
            for (const s of scenes) {
                if (s.visible) s.draw(t);
            }
        }

        requestAnimationFrame(loop);
    }

})();