document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.forms["contact-to-sheet"];
    const contactMsg = document.getElementById("contact-msg");
  
    const contactScriptURL = "https://script.google.com/macros/s/AKfycbzROCoxy2UwJn6cnEm_L-1lNvnd5ddemshSxA80udb73TDbehhRK3fjMkL4PhOVLg/exec";
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        contactMsg.innerHTML = "Sending...";
  
        fetch(contactScriptURL, {
          method: "POST",
          body: new FormData(contactForm),
        })
          .then((response) => {
            contactMsg.innerHTML = "✅ Message sent successfully!";
            contactForm.reset();
            setTimeout(() => (contactMsg.innerHTML = ""), 4000);
          })
          .catch((error) => {
            console.error("Error!", error.message);
            contactMsg.innerHTML = "❌ Failed to send. Try again!";
          });
      });
    }
  });
  