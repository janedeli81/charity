window.onload = function() {
    const heroSection = document.getElementById('hero');
    heroSection.style.opacity = 0;
    heroSection.style.transition = 'opacity 2s';
    heroSection.style.opacity = 1;
}

function playTransitionSound() {
    const audio = new Audio('src/sounds/transition-sound.mp3');
    audio.play();
}
document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.querySelector('main');
    mainContent.classList.add('main-content');
    mainContent.style.opacity = 0;
    mainContent.style.transform = 'scale(0)';
    mainContent.style.transition = 'opacity 1s, transform 1s';
    setTimeout(() => {
        mainContent.style.opacity = 1;
        mainContent.style.transform = 'scale(1)';
        playTransitionSound();
    }, 10); // delay just a bit to ensure the transition happens
});

