// Projects Toggle
document.addEventListener("DOMContentLoaded", function() {
    let iconHTML = document.getElementById("html-icon");
    let iconCSS = document.getElementById("css-icon");
    let iconJS = document.getElementById("js-icon");

    let htmlPage = document.getElementById("html-section");
    let cssPage = document.getElementById("css-section");
    let jsPage = document.getElementById("javascript-section");

    const showHTML = (event) => {
        event.preventDefault()
        htmlPage.style.display = '';
        cssPage.style.display = 'none';
        jsPage.style.display = 'none';
    }

    const showCSS = (event) => {
        event.preventDefault()
        htmlPage.style.display = 'none';
        cssPage.style.display = '';
        jsPage.style.display = 'none';
    }

    const showJS = (event) => {
        event.preventDefault()
        htmlPage.style.display = 'none';
        cssPage.style.display = 'none';
        jsPage.style.display = '';
    }

    iconHTML.addEventListener('click', showHTML);
    iconCSS.addEventListener('click', showCSS);
    iconJS.addEventListener('click', showJS);
});

//Projects Contact Links
document.addEventListener("DOMContentLoaded", function() {

    let contactPage = document.getElementById("contact-page");
    let skillsPage = document.getElementById("skills-page");
    let projectLink = document.getElementById("projects-link");
    let contactLink = document.getElementById("contact-link")

    const showProjects = (event) => {
        event.preventDefault()
        skillsPage.style.display = '';
        contactPage.style.display = 'none';
        document.getElementById("html-section").style.display = 'none';
        document.getElementById("css-section").style.display = 'none';
        document.getElementById("javascript-section").style.display = 'none';
    }

    const showContact = (event) => {
        event.preventDefault()
        skillsPage.style.display = 'none';
        contactPage.style.display = '';
    }

    projectLink.addEventListener('click', showProjects);
    contactLink.addEventListener('click', showContact);
});