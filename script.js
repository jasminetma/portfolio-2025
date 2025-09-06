// ==================== GLOBAL VARIABLES ====================
let currentCertPage = 0
const totalCertPages = 4

// ==================== MOBILE NAVIGATION ====================
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    const spans = navToggle.querySelectorAll("span")
    spans.forEach((span, index) => {
      if (navMenu.classList.contains("active")) {
        if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
        if (index === 1) span.style.opacity = "0"
        if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
      } else {
        span.style.transform = "none"
        span.style.opacity = "1"
      }
    })
  })
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active")
      const spans = navToggle?.querySelectorAll("span")
      spans?.forEach((span) => {
        span.style.transform = "none"
        span.style.opacity = "1"
      })
    }
  })
})

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  })
})

// ==================== SCROLL FADE-IN ====================
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible")
    else entry.target.classList.remove("is-visible")
  })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const fadeInSections = document.querySelectorAll(".fade-in-section")
  fadeInSections.forEach((section) => fadeInObserver.observe(section))
})

// ==================== CERTIFICATION GRID ====================
function updateCertGrid() {
  const pages = document.querySelectorAll(".cert-page")
  const prevBtn = document.getElementById("certPrevBtn")
  const nextBtn = document.getElementById("certNextBtn")
  const pageInfo = document.getElementById("certPageInfo")

  if (!pages.length) return
  pages.forEach((page, index) => {
    page.classList.toggle("active", index === currentCertPage)
  })

  if (prevBtn) prevBtn.disabled = currentCertPage === 0
  if (nextBtn) nextBtn.disabled = currentCertPage === totalCertPages - 1
  if (pageInfo) pageInfo.textContent = `Page ${currentCertPage + 1} of ${totalCertPages}`
}

function nextCertPage() {
  if (currentCertPage < totalCertPages - 1) {
    currentCertPage++
    updateCertGrid()
  }
}

function prevCertPage() {
  if (currentCertPage > 0) {
    currentCertPage--
    updateCertGrid()
  }
}

function initCertificationGrid() {
  document.getElementById("certPrevBtn")?.addEventListener("click", prevCertPage)
  document.getElementById("certNextBtn")?.addEventListener("click", nextCertPage)
  updateCertGrid()
}

// ==================== CASE STUDY DATA ====================
const caseStudyData = {
  panaghar: {
    title: "PanaGhar - Book Rental Website",
    subtitle: "Sustainable Book-Sharing Platform",
    sections: [
      {
        title: "<span class='star-icon'>✦</span> Project Overview",
        content:
          "PanaGhar is a sustainable book-sharing platform that connects readers through easy, affordable, and personalized book rentals. The platform promotes a culture of reading while reducing waste by encouraging book sharing within communities.",
      },
      {
        title: "<span class='star-icon'>✦</span> Problem Statement",
        content:
          "Many book lovers face the challenge of limited access to diverse reading materials due to high costs and storage constraints. Traditional libraries have limited collections, and buying books for one-time reading is expensive and environmentally unfriendly.",
      },
      {
        title: "<span class='star-icon'>✦</span> Solution",
        content:
          "PanaGhar creates a peer-to-peer book rental ecosystem where users can rent books from each other, discover new titles through personalized recommendations, and build reading communities.",
      },
      {
        title: "<span class='star-icon'>✦</span> Key Features",
        list: [
          "User-friendly book search and discovery system",
          "Secure rental transaction management",
          "Community-driven reviews and ratings",
          "Personalized reading recommendations",
          "Sustainable reading tracking and rewards",
        ],
      },
      {
        title: "<span class='star-icon'>✦</span> Design Process",
        content:
          "The design process involved extensive user research, persona development, wireframing, prototyping, and usability testing. We focused on creating an intuitive interface that makes book discovery and rental seamless.",
      },
    ],
    figmaUrl: "https://www.figma.com/design/LzIDGEytUFaner7zxl11Yh/PanaGhar---Book-Rental-Website?node-id=0-1&t=2DPWLpOWHQg1jp9D-1",
  },
  asraya: {
    title: "Hamro Asraya - Hostel Rental Website",
    subtitle: "Student Housing Made Simple",
    sections: [
      {
        title: "<span class='star-icon'>✦</span> Project Overview",
        content:
          "Hamro Asraya is a comprehensive student hostel rental platform designed to simplify the process of finding safe, affordable, and suitable accommodation for students.",
      },
      {
        title: "<span class='star-icon'>✦</span> Challenge",
        content:
          "Students often struggle to find reliable hostel accommodations with verified information, transparent pricing, and authentic reviews. The existing solutions lacked trust and comprehensive information.",
      },
      {
        title: "<span class='star-icon'>✦</span> Solution",
        content:
          "A platform featuring verified listings, authentic reviews from real students, smart filtering options, and direct communication with hostel owners.",
      },
      {
        title: "<span class='star-icon'>✦</span> Key Features",
        list: [
          "Verified hostel listings with authentic photos",
          "Real student reviews and ratings",
          "Advanced filtering by location, price, and amenities",
          "Direct messaging with hostel owners",
          "Virtual tour capabilities",
          "Booking management system",
        ],
      },
    ],
    figmaUrl: "https://www.figma.com/design/n7MUpTIvTum7EZMTNrJkqw/Hamro-Asraya--Hostel-Rental-Website?node-id=0-1&t=u6rZHMmDJZ5xioXn-1",
  },
  aurea: {
    title: "Auréa - Spa Web and Mobile",
    subtitle: "Wellness & Relaxation Platform",
    sections: [
      {
        title: "<span class='star-icon'>✦</span> Project Overview",
        content:
          "Auréa Spa is a modern wellness platform that simplifies spa service booking while providing a serene and luxurious digital experience that reflects the brand's commitment to relaxation and well-being.",
      },
      {
        title: "<span class='star-icon'>✦</span> Design Philosophy",
        content:
          "The design embraces minimalism and tranquility, using calming colors, elegant typography, and intuitive navigation to create a digital sanctuary that prepares users for their wellness journey.",
      },
      {
        title: "<span class='star-icon'>✦</span> Key Features",
        list: [
          "Seamless service booking system",
          "Therapist profiles and specializations",
          "Personalized treatment recommendations",
          "Membership and loyalty programs",
          "Virtual consultation booking",
          "Wellness blog and resources",
        ],
      },
    ],
    figmaUrl: "https://www.figma.com/design/zKMvO1Pngl5GP9lSOWvU5Q/Spa?node-id=1-2&t=IZmFCVCPe0utcpZx-1",
  },
  posters: {
    title: "Poster Designs - Club",
    subtitle: "Creative Visual Communication",
    sections: [
      {
        title: "<span class='star-icon'>✦</span> Design Collection",
        content:
          "A comprehensive collection of poster designs and pamphlets created for various events, campaigns, and organizations, showcasing creative visual communication and brand storytelling.",
      },
      {
        title: "<span class='star-icon'>✦</span> Design Approach",
        content:
          "Each design focuses on clear visual hierarchy, impactful typography, and strategic use of color to communicate messages effectively while maintaining aesthetic appeal.",
      },
      {
        title: "<span class='star-icon'>✦</span> Project Types",
        list: [
          "Event promotion posters",
          "Educational campaign materials",
          "Club and organization branding",
          "Social awareness campaigns",
          "Workshop and seminar announcements",
        ],
      },
    ],
    figmaUrl: "https://www.behance.net/gallery/231014081/Posters",
  },
}

// ==================== OPEN CASE STUDY MODAL ====================
function openCaseStudyModal(projectId) {
  const modal = document.getElementById("modalOverlay")
  const modalContent = document.getElementById("modalContent")
  const data = caseStudyData[projectId]

  if (!data || !modal || !modalContent) return

  let sectionsHTML = ""
  data.sections.forEach((section) => {
    sectionsHTML += `
      <div class="modal-section">
        <h3>${section.title}</h3>
        ${section.content ? `<p>${section.content}</p>` : ""}
        ${section.list ? `<ul>${section.list.map((i) => `<li>${i}</li>`).join("")}</ul>` : ""}
      </div>
    `
  })

  modalContent.innerHTML = `
    <div class="modal-header">
      <h2 class="modal-title">${data.title}</h2>
      <p class="modal-subtitle">${data.subtitle}</p>
    </div>
    ${sectionsHTML}
    <div class="modal-actions">
      <a href="${data.figmaUrl}" target="_blank" class="modal-btn primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="15,3 21,3 21,9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Open Design File
      </a>
    </div>
  `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeCaseStudyModal() {
  const modal = document.getElementById("modalOverlay")
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
}

// ==================== MODAL EVENT LISTENERS ====================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-link").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      const projectId = btn.getAttribute("data-project")
      if (projectId) {
        openCaseStudyModal(projectId)
      }
    })
  })

  // Modal close functionality
  const modalClose = document.getElementById("modalClose")
  const modalOverlay = document.getElementById("modalOverlay")

  modalClose?.addEventListener("click", closeCaseStudyModal)

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeCaseStudyModal()
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCaseStudyModal()
  })

  initCertificationGrid()
})

// ==================== CERTIFICATE POP-OUT ====================
document.querySelectorAll(".certificate").forEach((img) => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div")
    overlay.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:1000"
    const certImg = document.createElement("img")
    certImg.src = img.src
    certImg.style.cssText =
      "max-width:90%;max-height:90%;box-shadow:0 10px 30px rgba(0,0,0,0.5);border-radius:8px;transform:scale(0.8);transition:transform 0.3s ease"
    overlay.appendChild(certImg)
    document.body.appendChild(overlay)
    setTimeout(() => {
      certImg.style.transform = "scale(1)"
    }, 10)
    overlay.addEventListener("click", () => {
      certImg.style.transform = "scale(0.8)"
      setTimeout(() => document.body.removeChild(overlay), 200)
    })
  })
})

// ==================== CONTACT FORM FEEDBACK ====================
const contactForm = document.getElementById("contact-form")
const formMessage = document.getElementById("formMessage")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // Check if form is valid (HTML required attributes do basic validation)
    if (!contactForm.checkValidity()) {
      formMessage.textContent = "Please fill out all fields before sending."
      formMessage.style.color = "red"
      return
    }

    // Show sending state
    const submitBtn = contactForm.querySelector(".submit-button")
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true
    formMessage.textContent = ""
    formMessage.style.color = ""

    // Let Formspree handle the submission naturally (redirect to confirmation)
    // Use a small delay to show the "Sending..." state before redirect
    setTimeout(() => {
      formMessage.textContent = "Your message is sent! Thank you."
      formMessage.style.color = "green"
      submitBtn.textContent = "Send Message"
      submitBtn.disabled = false
      contactForm.reset()
    }, 1500)
  })
}


// ==================== INITIAL LOG ====================
console.log("Portfolio JS loaded successfully!")
