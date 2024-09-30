// JavaScript for toggling between dark and light modes
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');

    // Get the image element inside the toggle container
    const themeIcon = document.querySelector('#theme-toggle img');

    // Change the background color of the toggle container
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark')) {
        themeToggle.style.backgroundColor = '#3F3F3F';  // Dark color for light mode
        themeIcon.src = 'assets/images/UI/light-mode.png';  // Switch to light mode icon
        themeIcon.alt = 'Light Mode';  // Update alt text
    } else {
        themeToggle.style.backgroundColor = '#3F3F3F';  // Light color for dark mode
        themeIcon.src = 'assets/images/UI/dark-mode.png';  // Switch back to dark mode icon
        themeIcon.alt = 'Dark Mode';  // Update alt text
    }
});
