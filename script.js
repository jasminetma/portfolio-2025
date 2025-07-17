document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navigation
  const stickyNav = document.getElementById("stickyNav")
  const navLinks = document.querySelectorAll(".nav-link")
  let lastScrollY = window.scrollY

  // Show/hide sticky navigation
  function handleScroll() {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      stickyNav.classList.add("visible")
    } else {
      stickyNav.classList.remove("visible")
    }

    lastScrollY = currentScrollY
  }

  // Update active navigation link
  function updateActiveNavLink() {
    const sections = ["home", "about", "experience", "portfolio"]
    let currentSection = "home"

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = sectionId
        }
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-section") === currentSection) {
        link.classList.add("active")
      }
    })
  }

  // Throttled scroll handler
  let scrollTimeout
  window.addEventListener("scroll", () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }
    scrollTimeout = setTimeout(() => {
      handleScroll()
      updateActiveNavLink()
    }, 10)
  })

  // Smooth fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  const fadeElements = document.querySelectorAll(".fade-in")
  fadeElements.forEach((element) => {
    observer.observe(element)
  })

  // Image loading animations with performance optimization
  const images = document.querySelectorAll(".portfolio-illustration, .hello-image, .character-illustration-image")
  images.forEach((img) => {
    img.style.opacity = "0"

    // Use loading="lazy" for better performance
    if (img.loading !== "eager") {
      img.loading = "lazy"
    }

    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    if (img.complete) {
      img.style.opacity = "1"
    }
  })

  // Enhanced Portfolio functionality with modal
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const projectName = document.getElementById("projectName")
  const projectTags = document.getElementById("projectTags")
  const projectDescription = document.getElementById("projectDescription")
  const projectNumber = document.querySelector(".project-number")
  const figmaLink = document.getElementById("figmaLink")
  const caseStudyBtn = document.getElementById("caseStudyBtn")

  // Modal elements
  const modal = document.getElementById("caseStudyModal")
  const modalClose = document.getElementById("modalClose")
  const modalProjectName = document.getElementById("modalProjectName")
  const modalProblem = document.getElementById("modalProblem")
  const modalProcess = document.getElementById("modalProcess")
  const modalOutcome = document.getElementById("modalOutcome")
  const modalFigmaLink = document.getElementById("modalFigmaLink")

  let currentProject = null

  function updateProjectInfo(item) {
    const number = item.getAttribute("data-project-number")
    const name = item.getAttribute("data-project-name")
    const tags = item.getAttribute("data-project-tags").split(",")
    const description = item.getAttribute("data-project-description")
    const figmaUrl = item.getAttribute("data-figma-url")

    currentProject = {
      name,
      problem: item.getAttribute("data-problem"),
      process: item.getAttribute("data-process"),
      outcome: item.getAttribute("data-outcome"),
      figmaUrl,
    }

    projectNumber.textContent = number
    projectName.textContent = name
    figmaLink.href = figmaUrl || "#"

    projectTags.innerHTML = ""
    tags.forEach((tag) => {
      const tagElement = document.createElement("span")
      tagElement.className = "project-tag"
      tagElement.textContent = tag.trim()
      projectTags.appendChild(tagElement)
    })

    projectDescription.style.opacity = "0"
    setTimeout(() => {
      projectDescription.textContent = description
      projectDescription.style.opacity = "1"
    }, 150)
  }

  // Portfolio item interactions
  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      portfolioItems.forEach((i) => i.classList.remove("active"))
      this.classList.add("active")
      updateProjectInfo(this)
    })

    // Enhanced keyboard support
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  // Case Study Modal functionality
  if (caseStudyBtn && modal) {
    caseStudyBtn.addEventListener("click", () => {
      if (currentProject) {
        modalProjectName.textContent = currentProject.name
        modalProblem.textContent = currentProject.problem
        modalProcess.textContent = currentProject.process
        modalOutcome.textContent = currentProject.outcome
        modalFigmaLink.href = currentProject.figmaUrl || "#"

        modal.classList.add("active")
        modal.setAttribute("aria-hidden", "false")
        document.body.style.overflow = "hidden"

        // Focus management for accessibility
        modalClose.focus()
      }
    })
  }

  // Modal close functionality
  if (modalClose && modal) {
    modalClose.addEventListener("click", closeModal)

    // Close on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal()
      }
    })

    // Close on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("active")
      modal.setAttribute("aria-hidden", "true")
      document.body.style.overflow = ""

      // Return focus to case study button
      if (caseStudyBtn) {
        caseStudyBtn.focus()
      }
    }
  }

  // Set initial project
  if (portfolioItems.length > 0) {
    portfolioItems[0].classList.add("active")
    updateProjectInfo(portfolioItems[0])
  }

  // Performance optimization for animations
  const navTrack = document.querySelector(".nav-tabs-track")
  if (navTrack) {
    navTrack.style.transform = "translate3d(0, 0, 0)"
    navTrack.style.willChange = "transform"
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80 // Account for sticky nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Enhanced contact interactions with better feedback
  const contactItems = document.querySelectorAll(".contact-item")
  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })

    // Enhanced focus states for accessibility
    item.addEventListener("focus", function () {
      this.style.outline = "3px solid #9f6d3d"
      this.style.outlineOffset = "2px"
    })

    item.addEventListener("blur", function () {
      this.style.outline = ""
      this.style.outlineOffset = ""
    })
  })

  // Initialize
  handleScroll()
  updateActiveNavLink()
})

// Responsive image handling with performance optimization
window.addEventListener("resize", () => {
  const illustration = document.querySelector(".portfolio-illustration")
  if (illustration) {
    if (window.innerWidth < 768) {
      illustration.style.maxWidth = "95%"
    } else {
      illustration.style.maxWidth = "90%"
    }
  }
})

// Intersection Observer for performance optimization
const lazyImages = document.querySelectorAll('img[loading="lazy"]')
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  lazyImages.forEach((img) => imageObserver.observe(img))
}
