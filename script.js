document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation for the main illustration
  const illustration = document.querySelector(".portfolio-illustration")
  if (illustration) {
    illustration.style.opacity = "0"
    illustration.style.transition = "opacity 1s ease-in-out"

    illustration.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    if (illustration.complete) {
      illustration.style.opacity = "1"
    }
  }

  // Add fade-in animation for the hello image
  const helloImage = document.querySelector(".hello-image")
  if (helloImage) {
    helloImage.style.opacity = "0"
    helloImage.style.transition = "opacity 1s ease-in-out"

    helloImage.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    if (helloImage.complete) {
      helloImage.style.opacity = "1"
    }
  }

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const sections = document.querySelectorAll(".hello-section, .main-content, .portfolio-section")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(section)
  })

  // Add click effects to contact items
  const contactItems = document.querySelectorAll(".contact-item")
  contactItems.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.textContent.trim()
      if (text.includes("@")) {
        window.location.href = `mailto:${text.split(" ")[1] || text}`
      } else if (text.includes("behance.net")) {
        window.open(`https://${text.split(" ")[1] || text}`, "_blank")
      } else if (text.includes("linkedin.com")) {
        window.open(`https://${text.split(" ")[1] || text}`, "_blank")
      }
    })

    item.style.cursor = "pointer"
    item.addEventListener("mouseenter", function () {
      this.style.color = "#9f6d3d"
    })
    item.addEventListener("mouseleave", function () {
      this.style.color = ""
    })
  })

  // Portfolio item click functionality
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const projectName = document.getElementById("projectName")
  const projectLink = document.getElementById("projectLink")
  const projectTags = document.getElementById("projectTags")
  const projectDescription = document.getElementById("projectDescription")
  const projectNumber = document.querySelector(".project-number")

  // Project URLs - replace these with your actual project URLs
  const projectURLs = {
    "PanaGhar Website": "https://www.behance.net/gallery/your-panaghar-project",
    "Hamro Asraya Website": "https://www.behance.net/gallery/your-asraya-project",
    "E-commerce Dashboard": "https://www.behance.net/gallery/your-dashboard-project",
    "Brand Identity System": "https://www.behance.net/gallery/your-branding-project",
  }

  function updateProjectInfo(item) {
    const number = item.getAttribute("data-project-number")
    const name = item.getAttribute("data-project-name")
    const tags = item.getAttribute("data-project-tags").split(",")
    const description = item.getAttribute("data-project-description")

    // Update number and title
    projectNumber.textContent = number
    projectName.textContent = name

    // Update title link
    const projectUrl = projectURLs[name] || "#"
    projectLink.href = projectUrl

    // Add visual feedback for clickable link
    if (projectUrl !== "#") {
      projectLink.style.cursor = "pointer"
      projectLink.style.textDecoration = "underline"
      projectLink.style.textDecorationColor = "transparent"
      projectLink.style.transition = "text-decoration-color 0.3s ease"

      projectLink.addEventListener("mouseenter", function () {
        this.style.textDecorationColor = "f8f0e3"
      })

      projectLink.addEventListener("mouseleave", function () {
        this.style.textDecorationColor = "transparent"
      })
    }

    // Update tags
    projectTags.innerHTML = ""
    tags.forEach((tag) => {
      const tagElement = document.createElement("span")
      tagElement.className = "project-tag"
      tagElement.textContent = tag.trim()
      projectTags.appendChild(tagElement)
    })

    // Smooth description change
    projectDescription.style.opacity = "0"
    setTimeout(() => {
      projectDescription.textContent = description
      projectDescription.style.opacity = "1"
    }, 150)
  }

  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      portfolioItems.forEach((i) => {
        i.classList.remove("active")
        if (!i.classList.contains("active")) {
          i.style.transform = "scale(1)"
        }
      })
      this.classList.add("active")

      updateProjectInfo(this)
    })

    // Hover effects
    item.addEventListener("mouseenter", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "scale(1.05)"
        this.style.transition = "transform 0.3s ease"
      }
    })

    item.addEventListener("mouseleave", function () {
      if (!this.classList.contains("active")) {
        this.style.transform = "scale(1)"
      }
    })
  })

  // Set initial state for first project
  const initialProject = document.querySelector(".portfolio-item")
  if (initialProject) {
    initialProject.classList.add("active")
    updateProjectInfo(initialProject)
  }

  // Skill tag hover effects
  const skillTags = document.querySelectorAll(".aptitude-tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Don't prevent default for project links
      if (this.id === "projectLink" && this.href !== "#") {
        return
      }
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    })
  })
})

// Resize handler
window.addEventListener("resize", () => {
  const illustration = document.querySelector(".portfolio-illustration")
  if (illustration && window.innerWidth < 768) {
    illustration.style.maxWidth = "95%"
  } else if (illustration && window.innerWidth < 1024) {
    illustration.style.maxWidth = "90%"
  } else if (illustration) {
    illustration.style.maxWidth = "100%"
  }
})

// Performance optimization
function optimizeAnimation() {
  const navTrack = document.querySelector(".nav-tabs-track")
  if (navTrack) {
    navTrack.style.transform = "translate3d(0, 0, 0)"
    navTrack.style.willChange = "transform"
  }
}
document.addEventListener("DOMContentLoaded", optimizeAnimation)

// Fade-in for character image
const characterImage = document.querySelector(".character-illustration-image")
if (characterImage) {
  characterImage.style.opacity = "0"
  characterImage.style.transition = "opacity 1s ease-in-out"

  characterImage.addEventListener("load", function () {
    this.style.opacity = "1"
  })

  if (characterImage.complete) {
    characterImage.style.opacity = "1"
  }
}
