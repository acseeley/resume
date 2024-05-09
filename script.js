// Comment out or remove if not used elsewhere
document.addEventListener("DOMContentLoaded", function() {
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
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the 'Show More Projects' button
    const showMoreButton = document.querySelector('.show-more');
    // Select the container that holds the additional projects
    const additionalProjects = document.querySelector('.additional-projects');

    // Check if both elements exist to avoid errors in case they are not found
    if (!showMoreButton || !additionalProjects) {
        console.error('Error: Button or project container not found!');
        return;  // Exit the function if elements are not found
    }

    // Add click event listener to the button
    showMoreButton.addEventListener('click', function() {
        // Toggle the 'show' class on the additional projects container
        additionalProjects.classList.toggle('show');

        // Update the button text based on whether the content is visible
        if (additionalProjects.classList.contains('show')) {
            showMoreButton.textContent = 'Show Less Projects';
        } else {
            showMoreButton.textContent = 'Show More Projects';
        }
    });
});


