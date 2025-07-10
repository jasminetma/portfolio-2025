document.addEventListener("DOMContentLoaded", () => {
    // Smooth fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        observer.observe(element);
    });

    // Image loading animations
    const images = document.querySelectorAll('.portfolio-illustration, .hello-image, .character-illustration-image');
    images.forEach(img => {
        img.style.opacity = '0';
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Contact item interactions
    const contactItems = document.querySelectorAll(".contact-item");
    contactItems.forEach((item) => {
        item.addEventListener("click", function () {
            const text = this.textContent.trim();
            if (text.includes("@")) {
                window.location.href = `mailto:${text.split(" ")[1] || text}`;
            } else if (text.includes("behance.net")) {
                window.open(`https://${text.split(" ")[1] || text}`, "_blank");
            } else if (text.includes("linkedin.com")) {
                window.open(`https://${text.split(" ")[1] || text}`, "_blank");
            }
        });
    });

    // Portfolio functionality
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const projectName = document.getElementById("projectName");
    const projectLink = document.getElementById("projectLink");
    const projectTags = document.getElementById("projectTags");
    const projectDescription = document.getElementById("projectDescription");
    const projectNumber = document.querySelector(".project-number");

    const projectURLs = {
        "PanaGhar Website": "https://www.figma.com/design/LzIDGEytUFaner7zxl11Yh/PanaGhar---Book-Rental-Website?node-id=0-1&t=5C5NDzOeWaLvysAD-1",
        "Hamro Asraya Website": "https://www.figma.com/design/n7MUpTIvTum7EZMTNrJkqw/Hamro-Asraya--Hostel-Rental-Website?node-id=0-1&t=57EsFSKvNGs7RKLR-https://www.figma.com/design/n7MUpTIvTum7EZMTNrJkqw/Hamro-Asraya--Hostel-Rental-Website?node-id=0-1&t=6Deqcw3caFBXPswN-1",
    };

    function updateProjectInfo(item) {
        const number = item.getAttribute("data-project-number");
        const name = item.getAttribute("data-project-name");
        const tags = item.getAttribute("data-project-tags").split(",");
        const description = item.getAttribute("data-project-description");

        projectNumber.textContent = number;
        projectName.textContent = name;
        projectLink.href = projectURLs[name] || "#";

        projectTags.innerHTML = "";
        tags.forEach((tag) => {
            const tagElement = document.createElement("span");
            tagElement.className = "project-tag";
            tagElement.textContent = tag.trim();
            projectTags.appendChild(tagElement);
        });

        projectDescription.style.opacity = "0";
        setTimeout(() => {
            projectDescription.textContent = description;
            projectDescription.style.opacity = "1";
        }, 150);
    }

    portfolioItems.forEach((item) => {
        item.addEventListener("click", function () {
            portfolioItems.forEach((i) => i.classList.remove("active"));
            this.classList.add("active");
            updateProjectInfo(this);
        });
    });

    // Set initial project
    if (portfolioItems.length > 0) {
        portfolioItems[0].classList.add("active");
        updateProjectInfo(portfolioItems[0]);
    }

    // Performance optimization for animations
    const navTrack = document.querySelector(".nav-tabs-track");
    if (navTrack) {
        navTrack.style.transform = "translate3d(0, 0, 0)";
        navTrack.style.willChange = "transform";
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            if (this.id === "projectLink" && this.href !== "#") {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

// Responsive image handling
window.addEventListener("resize", () => {
    const illustration = document.querySelector(".portfolio-illustration");
    if (illustration) {
        if (window.innerWidth < 768) {
            illustration.style.maxWidth = "95%";
        } else {
            illustration.style.maxWidth = "100%";
        }
    }
});