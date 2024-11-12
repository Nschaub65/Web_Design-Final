document.addEventListener("DOMContentLoaded", () => {
    highlightActiveLink();
    setupGalleryLightbox();
    setupFormValidation();
  });
  
  /** 1. Highlight the Active Page in the Navigation */
  function highlightActiveLink() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPath || link.href.endsWith(currentPath)) {
        link.classList.add("active");
      }
    });
  }
  
  /** 2. Gallery Lightbox Functionality */
  function setupGalleryLightbox() {
    const galleryImages = document.querySelectorAll(".gallery .placeholder");
  
    galleryImages.forEach((placeholder, index) => {
      placeholder.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        document.body.appendChild(lightbox);
  
        // Create a larger version of the image (or placeholder text)
        const img = document.createElement("div");
        img.classList.add("lightbox-image");
        img.textContent = `Image ${index + 1}`; // Placeholder text for image
        lightbox.appendChild(img);
  
        // Click anywhere in the lightbox to close it
        lightbox.addEventListener("click", () => {
          lightbox.remove();
        });
      });
    });
  }
  
  /** 3. Contact Form Validation */
  function setupFormValidation() {
    const contactForm = document.querySelector("form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", event => {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        
        if (!name || !email || !message) {
          event.preventDefault(); // Prevent form submission
          alert("Please fill in all fields.");
        } else if (!validateEmail(email)) {
          event.preventDefault();
          alert("Please enter a valid email address.");
        }
      });
    }
  }
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  