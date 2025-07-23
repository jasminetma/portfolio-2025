// ===== PROJECT CONFIGURATION =====
// Edit this section to customize your projects
window.PROJECTS_CONFIG = {
  // Project 1
  panaghar: {
    id: "panaghar",
    number: "01",
    name: "PanaGhar Website",
    tags: ["WEBSITE", "RESPONSIVE", "BOOK SHARING"],
    description:
      "Panaghar is a sustainable book-sharing platform that connects readers through easy, affordable, and personalized book rentals—promoting a culture of reading while reducing waste.",
    image: "assets/panaghar.png",
    imageAlt: "PanaGhar Website mockup showing book rental interface",

    // Action buttons configuration
    buttons: [
      {
        text: "View Case Study",
        type: "modal", // 'modal', 'link', or 'download'
        primary: true,
      },
      // {
      //   text: "Live Demo",
      //   type: "link",
      //   url: "https://panaghar-demo.com",
      //   primary: false,
      // },
    ],

    // Modal content (set to null if you don't want a modal)
    modal: {
      sections: [
        {
          title: "Problem Statement",
          content:
            "Books are expensive, and many students own books that end up unused on shelves after one read. Libraries often lack the titles students actually want — either due to limited resources or outdated collections. Through informal surveys and conversations with students at our college, we found a strong desire for a more flexible, interest-driven way to access and share books affordably.",
        },
        {
          title: "Design Process",
          content:
            "Casual Interviews → User Research → Problem Validation → Persona Development → Information Architecture → Wireframing → Visual Design → Prototyping → User Testing → Iteration",
        },
        {
          title: "Key Features",
          content: [
            "Smart book recommendation system",
            "Community-driven reviews and ratings",
            "Sustainable sharing model",
            "User-friendly search and filter options",
            "Dashboard for tracking rentals and returns",
          ],
        },
        {
          title: "Outcomes & Learnings",
          content:
            "Panaghar created a simple and sustainable system where users could both rent and lend books. This helped reduce costs, prevent waste, and encouraged reading within our community. After launch, book accessibility improved significantly, and feedback highlighted the value of peer-to-peer sharing over traditional library models.",
        },
      ],
      externalLinks: [
        {
          text: "View Figma Design",
          url: "https://www.figma.com/design/LzIDGEytUFaner7zxl11Yh/PanaGhar---Book-Rental-Website?node-id=0-1&t=5C5NDzOeWaLvysAD-1",
        },
      ],
    },
  },

  // Project 2
  asraya: {
    id: "asraya",
    number: "02",
    name: "Hamro Asraya Website",
    tags: ["HOSTEL RENTAL", "WEBSITE", "HACKATHON"],
    description:
      "Hamro Asraya is a student hostel rental platform with verified listings, real reviews, and smart filters—designed to make finding the right place simple and trustworthy.",
    image: "assets/asraya.png",
    imageAlt: "Hamro Asraya Website mockup showing hostel rental listings",

    buttons: [
      {
        text: "View Case Study",
        type: "modal",
        primary: true,
      },
      {
        text: "GitHub Repo",
        type: "link",
        url: "https://github.com/jasminetma/Hamro-Asraya",
        primary: false,
      },
    ],

    modal: {
      sections: [
        {
          title: "Problem Statement",
          content:
            "In Nepal, students often struggle to find reliable, affordable hostels. What’s advertised online or shared by word-of-mouth rarely matches the reality — hostels look promising from the outside but fall short once you move in. Many listings are outdated, unverified, and shared through unreliable sources. This lack of transparency and trust led us to create Hamro Asraya, a dedicated student hostel rental platform with real reviews, verified hostelers, and optional in-person inspections by our agents.",
        },
        {
          title: "Design Process",
          content:
            "Online Research → Peer Interviews → Problem Definition → Competitive Analysis → Persona Building → User Journey Mapping → Wireframing → Visual Design → Prototyping → Testing → Refinement",
        },
        {
          title: "Outcomes & Learnings",
          content:
            "Hamro Asraya offered students a safer, smarter way to find hostels. Verified listings and real student reviews built trust, while the optional inspection service added an extra layer of confidence. Feedback from over 200 students showed a strong demand for this type of platform, and our solution addressed key pain points in the hostel-hunting process — winning us a hackathon and validating the core idea.",
        },
      ],
      externalLinks: [
        {
          text: "View Figma Design",
          url: "https://www.figma.com/design/n7MUpTIvTum7EZMTNrJkqw/Hamro-Asraya--Hostel-Rental-Website?node-id=0-1&t=6Deqcw3caFBXPswN-1",
        },
      ],
    },
  },

  // Project 3
  ecodrive: {
    id: "ecodrive",
    number: "03",
    name: "Eco Drive Mobile",
    tags: ["MOBILE APP", "SUSTAINABILITY", "UX RESEARCH"],
    description:
      "EcoDrive is a mobile application that helps users track their carbon footprint and adopt sustainable lifestyle choices through gamification and community challenges.",
    image: "assets/ecodrive.png",
    imageAlt: "EcoDrive Mobile App mockup showing sustainability tracking interface",

    buttons: [
      {
        text: "View Case Study",
        type: "modal",
        primary: true,
      },
    ],

    modal: {
      sections: [
        {
          title: "Problem Statement",
          content:
            "With rising fuel prices and growing environmental concerns, many people want to switch to eco-friendly transportation — but renting electric vehicles (EVs) is often confusing, expensive, or inaccessible. For my first mobile UX project, I was tasked with designing EcoDrive: a user-friendly app that makes it easy for users to find, rent, and ride sustainable vehicles like e-scooters, bikes, or EVs near them.",
        },
        {
          title: "Design Process",
          content:
            "Exploratory Research → Competitor Analysis → UX Goals Definition → Wireframing → Mobile-First UI Design → Prototyping → Peer Feedback & Iteration",
        },
        {
          title: "Outcomes & Learnings",
          content:
            "This project taught me the foundations of mobile UX — from understanding user journeys to designing intuitive tap areas and clean layouts. EcoDrive featured real-time vehicle availability, eco-impact tracking, and quick booking. Through peer feedback and testing with 8 mock users, I refined the design for clarity and simplicity. The final prototype helped me understand how to balance usability with sustainability goals in mobile product design.",
        },
      ],
      externalLinks: [
        {
          text: "View Figma Design",
          url: "https://www.figma.com/design/OSQm17HXZQBNGgitIJK9xU/Eco-Rental---Car-Rental?node-id=0-1&t=SfcuFjbLcA7X6Pol-1",
        },
      ],
    },
  },

  // Project 4
  posters: {
    id: "posters",
    number: "04",
    name: "Posters and Pamphlets",
    tags: ["GRAPHIC DESIGN", "PRINT DESIGN", "BRANDING"],
    description:
      "A collection of poster designs and pamphlets created for various events, campaigns, and organizations, showcasing creative visual communication.",
    image: "assets/posters.png",
    imageAlt: "Collection of poster and pamphlet designs",

    buttons: [
      {
        text: "View Gallery",
        type: "link",
        url: "https://www.behance.net/gallery/231014081/Posters",
        primary: true,
      },
    ],

    // No modal for this project
    modal: null,
  },

  // Project 5 - Example of how to add more projects
  branding: {
    id: "branding",
    number: "05",
    name: "Brand Identity Design",
    tags: ["BRANDING", "LOGO DESIGN", "VISUAL IDENTITY"],
    description:
      "A comprehensive brand identity project including logo design, color palette, typography, and brand guidelines for a local startup.",
    image: "/placeholder.svg?height=200&width=300",
    imageAlt: "Brand identity design showcase with logo and applications",

    buttons: [
      {
        text: "View Case Study",
        type: "modal",
        primary: true,
      },
    ],

    modal: {
      sections: [
        {
          title: "Problem Statement",
          content:
            "A local startup needed a complete brand identity that would stand out in a competitive market while conveying trust and innovation.",
        },
        {
          title: "Design Process",
          content:
            "Brand Research → Competitor Analysis → Concept Development → Logo Design → Brand Guidelines → Application Design",
        },
        {
          title: "Outcomes & Learnings",
          content:
            "Created a memorable brand identity that increased brand recognition by 60% and helped the client secure additional funding.",
        },
      ],
    },
  },

  // Project 6 - Another example
  webapp: {
    id: "webapp",
    number: "06",
    name: "Task Management App",
    tags: ["WEB APP", "UI/UX", "PRODUCTIVITY"],
    description:
      "A modern task management web application designed to help teams collaborate more effectively with intuitive project tracking and deadline management.",
    image: "/placeholder.svg?height=200&width=300",
    imageAlt: "Task management web application interface design",

    buttons: [
      {
        text: "View Prototype",
        type: "link",
        url: "https://figma.com/proto/example",
        primary: true,
      },
      {
        text: "Case Study",
        type: "modal",
        primary: false,
      },
    ],

    modal: {
      sections: [
        {
          title: "Problem Statement",
          content:
            "Teams were struggling with scattered task management across multiple platforms, leading to missed deadlines and poor communication.",
        },
        {
          title: "Design Process",
          content:
            "User Interviews → Journey Mapping → Information Architecture → Wireframing → Prototyping → User Testing → Iteration",
        },
        {
          title: "Key Features",
          content: [
            "Drag-and-drop task organization",
            "Real-time collaboration",
            "Smart deadline notifications",
            "Progress tracking and analytics",
            "Mobile-responsive design",
          ],
        },
        {
          title: "Outcomes & Learnings",
          content:
            "Improved team productivity by 45% and reduced missed deadlines by 70% in beta testing with 50+ teams.",
        },
      ],
    },
  },
}

// Global variables for pagination
let currentPage = 0
const projectsPerPage = 4
let totalPages = 0
let allProjects = []

document.addEventListener("DOMContentLoaded", () => {
  // Initialize portfolio first
  initializePortfolio()

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

  // Image loading animations
  const images = document.querySelectorAll(".portfolio-illustration, .hello-image, .character-illustration-image")
  images.forEach((img) => {
    img.style.opacity = "0"

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

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Enhanced contact interactions
  const contactItems = document.querySelectorAll(".contact-item")
  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)"
    })

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

// ===== PORTFOLIO FUNCTIONS =====
function initializePortfolio() {
  const portfolioGrid = document.getElementById("portfolioGrid")

  if (!portfolioGrid) {
    console.error("Portfolio grid not found!")
    return
  }

  // Initialize projects array and pagination
  allProjects = Object.values(window.PROJECTS_CONFIG)
  totalPages = Math.ceil(allProjects.length / projectsPerPage)

  // Update page indicator
  updatePageIndicator()

  // Set up grid navigation buttons
  setupGridNavigation()

  // Display first page
  displayProjectsPage(0)

  // Set initial project info (first project of first page)
  if (allProjects.length > 0) {
    updateProjectInfo(allProjects[0])
  }
}

function setupGridNavigation() {
  const prevGridBtn = document.getElementById("prevGridBtn")
  const nextGridBtn = document.getElementById("nextGridBtn")

  if (prevGridBtn) {
    prevGridBtn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--
        displayProjectsPage(currentPage)
        updateGridNavigationButtons()
        updatePageIndicator()
      }
    })
  }

  if (nextGridBtn) {
    nextGridBtn.addEventListener("click", () => {
      if (currentPage < totalPages - 1) {
        currentPage++
        displayProjectsPage(currentPage)
        updateGridNavigationButtons()
        updatePageIndicator()
      }
    })
  }

  // Initial button state
  updateGridNavigationButtons()
}

function displayProjectsPage(pageIndex) {
  const portfolioGrid = document.getElementById("portfolioGrid")

  if (!portfolioGrid) return

  // Clear current grid
  portfolioGrid.innerHTML = ""

  // Calculate start and end indices
  const startIndex = pageIndex * projectsPerPage
  const endIndex = Math.min(startIndex + projectsPerPage, allProjects.length)

  // Add projects for current page
  for (let i = startIndex; i < endIndex; i++) {
    const project = allProjects[i]
    const portfolioItem = createPortfolioItem(project)
    portfolioGrid.appendChild(portfolioItem)
  }

  // Set up click handlers for current page projects
  const portfolioItems = portfolioGrid.querySelectorAll(".portfolio-item")
  portfolioItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      const projectId = this.getAttribute("data-project-id")
      const project = window.PROJECTS_CONFIG[projectId]

      if (project) {
        // Update active state
        portfolioItems.forEach((i) => i.classList.remove("active"))
        this.classList.add("active")

        // Update project info
        updateProjectInfo(project)
      }
    })

    // Keyboard support
    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        this.click()
      }
    })
  })

  // Set first project as active by default
  if (portfolioItems.length > 0) {
    portfolioItems[0].classList.add("active")
    const firstProjectId = portfolioItems[0].getAttribute("data-project-id")
    updateProjectInfo(window.PROJECTS_CONFIG[firstProjectId])
  }
}

function updateGridNavigationButtons() {
  const prevGridBtn = document.getElementById("prevGridBtn")
  const nextGridBtn = document.getElementById("nextGridBtn")

  if (prevGridBtn) {
    prevGridBtn.disabled = currentPage === 0
  }

  if (nextGridBtn) {
    nextGridBtn.disabled = currentPage === totalPages - 1
  }
}

function updatePageIndicator() {
  const currentPageElement = document.getElementById("currentPage")
  const totalPagesElement = document.getElementById("totalPages")

  if (currentPageElement) {
    currentPageElement.textContent = currentPage + 1
  }

  if (totalPagesElement) {
    totalPagesElement.textContent = totalPages
  }
}

function createPortfolioItem(project) {
  const item = document.createElement("div")
  item.className = "portfolio-item"
  item.setAttribute("data-project-id", project.id)
  item.setAttribute("tabindex", "0")
  item.setAttribute("role", "button")
  item.setAttribute("aria-label", `View ${project.name} project details`)

  item.innerHTML = `
    <img src="${project.image}" alt="${project.imageAlt}" class="portfolio-image" />
    <span>${project.name}</span>
  `

  return item
}

function updateProjectInfo(project) {
  const projectNumber = document.querySelector(".project-number")
  const projectName = document.getElementById("projectName")
  const projectTags = document.getElementById("projectTags")
  const projectDescription = document.getElementById("projectDescription")
  const projectActions = document.getElementById("projectActions")

  // Update project number
  if (projectNumber) {
    projectNumber.textContent = project.number
  }

  // Update project name
  if (projectName) {
    projectName.textContent = project.name
  }

  // Update tags
  if (projectTags) {
    projectTags.innerHTML = ""
    project.tags.forEach((tag) => {
      const tagElement = document.createElement("span")
      tagElement.className = "project-tag"
      tagElement.textContent = tag
      projectTags.appendChild(tagElement)
    })
  }

  // Update description with animation
  if (projectDescription) {
    projectDescription.style.opacity = "0"
    setTimeout(() => {
      projectDescription.textContent = project.description
      projectDescription.style.opacity = "1"
    }, 150)
  }

  // Update action buttons
  if (projectActions && project.buttons) {
    projectActions.innerHTML = ""
    project.buttons.forEach((button) => {
      const btnElement = createActionButton(button, project)
      projectActions.appendChild(btnElement)
    })
  }
}

function createActionButton(buttonConfig, project) {
  const button = document.createElement("button")
  button.className = `project-btn ${buttonConfig.primary ? "primary" : ""}`
  button.textContent = buttonConfig.text

  // Handle different button types
  switch (buttonConfig.type) {
    case "modal":
      if (project.modal) {
        button.addEventListener("click", () => openModal(project))
      }
      break
    case "link":
      button.addEventListener("click", () => {
        window.open(buttonConfig.url, "_blank", "noopener,noreferrer")
      })
      break
    case "download":
      button.addEventListener("click", () => {
        const link = document.createElement("a")
        link.href = buttonConfig.url
        link.download = buttonConfig.filename || "download"
        link.click()
      })
      break
  }

  return button
}

// ===== MODAL FUNCTIONS =====
function openModal(project) {
  const modal = document.getElementById("caseStudyModal")
  const modalProjectName = document.getElementById("modalProjectName")
  const modalSections = document.getElementById("modalSections")

  if (!project.modal) return

  // Update modal title
  modalProjectName.textContent = project.name

  // Clear and populate modal content
  modalSections.innerHTML = ""

  // Add sections
  project.modal.sections.forEach((section) => {
    const sectionElement = document.createElement("div")
    sectionElement.className = "case-study-section"

    const title = document.createElement("h3")
    title.textContent = section.title
    sectionElement.appendChild(title)

    if (Array.isArray(section.content)) {
      // Handle list content
      const list = document.createElement("ul")
      section.content.forEach((item) => {
        const listItem = document.createElement("li")
        listItem.textContent = item
        list.appendChild(listItem)
      })
      sectionElement.appendChild(list)
    } else {
      // Handle text content
      const content = document.createElement("p")
      content.textContent = section.content
      sectionElement.appendChild(content)
    }

    modalSections.appendChild(sectionElement)
  })

  // Add external links if they exist
  if (project.modal.externalLinks && project.modal.externalLinks.length > 0) {
    const linksSection = document.createElement("div")
    linksSection.className = "case-study-section"

    const linksTitle = document.createElement("h3")
    linksTitle.textContent = "External Links"
    linksSection.appendChild(linksTitle)

    project.modal.externalLinks.forEach((link) => {
      const linkElement = document.createElement("a")
      linkElement.href = link.url
      linkElement.textContent = link.text
      linkElement.className = "project-btn"
      linkElement.target = "_blank"
      linkElement.rel = "noopener noreferrer"
      linkElement.style.marginRight = "0.5rem"
      linkElement.style.marginBottom = "0.5rem"
      linkElement.style.display = "inline-block"
      linksSection.appendChild(linkElement)
    })

    modalSections.appendChild(linksSection)
  }

  // Show modal
  modal.classList.add("active")
  modal.setAttribute("aria-hidden", "false")
  document.body.style.overflow = "hidden"

  // Focus management
  const modalClose = document.getElementById("modalClose")
  if (modalClose) {
    modalClose.focus()
  }
}

function closeModal() {
  const modal = document.getElementById("caseStudyModal")
  if (modal) {
    modal.classList.remove("active")
    modal.setAttribute("aria-hidden", "true")
    document.body.style.overflow = ""
  }
}

// Modal event listeners
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("caseStudyModal")
  const modalClose = document.getElementById("modalClose")

  if (modalClose) {
    modalClose.addEventListener("click", closeModal)
  }

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal()
    }
  })

  // Close on backdrop click
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }
})

// Responsive image handling
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
