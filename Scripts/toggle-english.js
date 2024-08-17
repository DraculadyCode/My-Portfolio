document.addEventListener('DOMContentLoaded', () => {
    // Get the button and the "show-all" section
    const showMoreButton = document.getElementById('show-more-button');
    const showAllSection = document.getElementById('show-all');
    
    // Initial state: hide the "show-all" section and change button text to "Show more"
    showAllSection.style.display = 'none';
    let isShowingAll = false;

    // Function to toggle visibility of "show-all" section and button text
    function toggleProjects() {
        if (isShowingAll) {
            showAllSection.style.display = 'none';
            showMoreButton.querySelector('button').textContent = 'Show all';
        } else {
            showAllSection.style.display = 'block';
            showMoreButton.querySelector('button').textContent = 'Show less';
        }
        isShowingAll = !isShowingAll;
    }

    // Add click event listener to the button
    showMoreButton.addEventListener('click', toggleProjects);
});