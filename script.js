const educations = document.querySelectorAll('.education');
const contact_i = document.querySelectorAll('.contact .info p i');
const about_icon = document.querySelectorAll('.section .gridcv .professionabout .about .titres .icon');
const exp_icon = document.querySelectorAll('.section .gridcv .professionabout .experience .titres .icon');
const comp_icon = document.querySelectorAll('.section .gridcv .professionabout .competence .titres .icon');
const progressbar = document.querySelectorAll('.section .gridcv .professionabout .competence .ulgrid ul li .barre .progressbar,.progressbar1,.progressbar2,.progressbar3,.progressbar4');
const profiles = document.querySelectorAll('.informationprofile .profile');

let isBlueTheme = false; // Variable pour suivre l'état actuel

document.getElementById("generate-color-btn").addEventListener("click", () => {
    // Alterner l'état
    isBlueTheme = !isBlueTheme;
    
    // Définir la couleur en fonction de l'état
    const color = isBlueTheme ? "black" : "";
    const iconColor = isBlueTheme ? "black" : "";
    const bgColor = isBlueTheme ? "black" : "";

    // Appliquer ou supprimer les styles
    profiles.forEach(profile => {
        profile.style.backgroundColor = bgColor;
    });

    educations.forEach(education => {
        education.style.backgroundColor = bgColor;
    });

    progressbar.forEach(bar => {
        bar.style.backgroundColor = bgColor;
    });

    comp_icon.forEach(icon => {
        icon.style.backgroundColor = bgColor;
    });

    exp_icon.forEach(icon => {
        icon.style.backgroundColor = bgColor;
    });

    about_icon.forEach(icon => {
        icon.style.backgroundColor = bgColor;
    });

    contact_i.forEach(icon => {
        icon.style.color = iconColor;
    });
});

document.getElementById('generate-pdf-btn').addEventListener('click', function() {
    const element = document.querySelector('.section');
    html2pdf().from(element).save('mon_cv.pdf');
});