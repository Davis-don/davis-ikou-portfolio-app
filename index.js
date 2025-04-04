const sideBarContainer = document.querySelector('.side-bar-container');
let displaySidebarContainer = false;

// Initially set sidebar visibility and height
sideBarContainer.style.visibility = 'hidden';
sideBarContainer.style.height = '0px';

const handleSidebar = () => {
    // Toggle the visibility of the sidebar
    displaySidebarContainer = !displaySidebarContainer;

    if (displaySidebarContainer) {
        // When displaySidebarContainer is true, show the sidebar
        sideBarContainer.style.height = '300px'; // Set a specific height for smooth transition
        sideBarContainer.style.visibility = 'visible';
    } else {
        // When displaySidebarContainer is false, hide the sidebar
        sideBarContainer.style.height = '0px';
        setTimeout(() => {
            // Set visibility to hidden after the height transition completes
            sideBarContainer.style.visibility = 'hidden';
        }, 300); // Match the transition duration in milliseconds
    }

    // Dynamically create the sidebar content
    const sideBarUl = `
        ${displaySidebarContainer ? `
        <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="border-bottom: 1px solid grey; padding: 10px 0;">
                <a href="#about" style="color: white; text-decoration: none;">About</a>
            </li>
            <li style="border-bottom: 1px solid grey; padding: 10px 0;">
                <a href="#skills" style="color: white; text-decoration: none;">Skills</a>
            </li>
            <li style="border-bottom: 1px solid grey; padding: 10px 0;">
                <a href="#contact" style="color: white; text-decoration: none;">Contact</a>
            </li>
        </ul>` : ""}
    `;

    // Update the sidebar content
    sideBarContainer.innerHTML = sideBarUl;

    // Add event listeners to the links
    const links = sideBarContainer.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Collapse the sidebar when a link is clicked
            sideBarContainer.style.height = '0px';
            setTimeout(() => {
                sideBarContainer.style.visibility = 'hidden';
            }, 300); // Match the transition duration
            displaySidebarContainer = false;
        });
    });
};

