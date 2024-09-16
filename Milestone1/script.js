// script.ts
// Function to dynamically load content (optional for a static resume)
function loadProfileData() {
    var profile = {
        name: "Iram Ashfaq",
        email: "iramashfaq307@gmail.com",
        phone: "(123) 456-7890",
        linkedin: "linkedin.com/in/iramashfaq"
    };
    document.querySelector('h1').textContent = profile.name;
    document.querySelector('.contact-info p:first-child').textContent = "Email: ".concat(profile.email);
    document.querySelector('.contact-info p:nth-child(2)').textContent = "Phone: ".concat(profile.phone);
    document.querySelector('.contact-info p:nth-child(3)').textContent = "LinkedIn: ".concat(profile.linkedin);
}
window.onload = function () {
    loadProfileData();
};
