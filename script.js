document.addEventListener("DOMContentLoaded", function() {
    // Function to get the theme from URL parameters
    function getThemeFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('theme');
    }

    // Object mapping theme parameters to CSS class names
    const themeMap = {
        '1': 'default',
        '2': 'alt1',
        '3': 'alt2',
        '4': 'alt3',
        '5': 'alt4',
        '6': 'alt5'
    };

    // Apply theme from URL if applicable
    const theme = getThemeFromURL();
    if (theme && themeMap[theme]) {
        document.body.setAttribute('data-theme', themeMap[theme]);
    }

    // Theme button interactions
    const themeButtons = document.querySelectorAll('.theme-button');
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.setAttribute('data-theme', this.getAttribute('data-theme'));
        });
    });

    // Handling collapsible sections for hover interactions
    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('mouseover', function() {
            const contentId = this.getAttribute('href').substring(1);
            document.getElementById(contentId).style.display = 'block';
        });
        collapsible.addEventListener('mouseout', function() {
            const contentId = this.getAttribute('href').substring(1);
            document.getElementById(contentId).style.display = 'none';
        });
    });

    // Handling Show More Projects functionality
    const showMoreButton = document.querySelector('.show-more');
    const additionalProjects = document.querySelector('.additional-projects');
    if (showMoreButton && additionalProjects) {
        showMoreButton.addEventListener('click', function() {
            additionalProjects.classList.toggle('show');
            this.textContent = additionalProjects.classList.contains('show') ? 'Show Less Projects' : 'Show More Projects';
        });
    }

    // Handling Show Coursework functionality
    const showCourseworkButton = document.querySelector('.show-coursework');
    const courseworkSection = document.querySelector('.additional-projects'); // Ensure this selector is correct
    if (showCourseworkButton && courseworkSection) {
        showCourseworkButton.addEventListener('click', function() {
            courseworkSection.classList.toggle('show');
            this.textContent = courseworkSection.classList.contains('show') ? 'Hide Coursework' : 'Show Coursework';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Trigger the animation of the vertical line
    document.querySelector('.vertical-line').style.left = '50%'; // Adjust as needed for your layout

    // Optional: Apply animation delays to sections for a staggered effect
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.setProperty('--animation-delay', `${index * 100}ms`);
    });
});
