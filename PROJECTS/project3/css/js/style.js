document.addEventListener('DOMContentLoaded', () => {
    // Add alert on clicking any nav menu link
    const navLinks = document.querySelectorAll('.nav-main li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent navigation for demo
            alert(`You clicked on ${link.textContent} page.`);
        });
    });

    // Add alert on clicking any social icon
    const socialIcons = document.querySelectorAll('.nav-left li a');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();  // Prevent navigation for demo
            alert(`You clicked on social link: ${icon.href}`);
        });
    });


    // Optionally, add click event for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            alert('Logo clicked!');
        });
    }
});
