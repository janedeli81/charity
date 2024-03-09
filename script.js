// Function executed when the window has finished loading
window.onload = function() {
    // Access the hero section by its ID
    const heroSection = document.getElementById('hero');
    // Initially set the opacity to 0 to make it invisible
    heroSection.style.opacity = 0;
    // Define a transition effect for the opacity change
    heroSection.style.transition = 'opacity 2s';
    // Change the opacity to 1 to make the hero section gradually visible
    heroSection.style.opacity = 1;
}

// Function to play a sound effect during the transition
function playTransitionSound() {
    // Load the transition sound from a specified source
    const audio = new Audio('src/sounds/transition-sound.mp3');
    // Play the sound
    audio.play();
}

// Event listener for when the HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", function() {
    // Select the main content section using its tag name
    const mainContent = document.querySelector('main');
    // Add a class to the main content for styling or identification
    mainContent.classList.add('main-content');
    // Set initial styles for opacity and scale for animation effect
    mainContent.style.opacity = 0;
    mainContent.style.transform = 'scale(0)';
    // Define the transition effects for opacity and transform properties
    mainContent.style.transition = 'opacity 1s, transform 1s';
    // Use setTimeout to delay the execution of the following block
    setTimeout(() => {
        // Change the opacity and scale to finalize the animation
        mainContent.style.opacity = 1;
        mainContent.style.transform = 'scale(1)';
        // Play a sound effect to accompany the transition
        playTransitionSound();
    }, 10); // Small delay to ensure the transition is noticeable
});
