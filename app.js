const overlay = document.querySelector('.overlay');
const modalContainer = document.querySelector('.modal-content');
const projectsContainer = document.querySelector('.projectCards');
const modalClose = document.querySelector('.modal-close');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let currentModalIndex = 0;


let projects = [
    {projectImage: 'img/project1.png', projectName: 'Profile Page Concept', projectDescription: 'At the very start of my dev program, I built an interactive web profile page as a first exploration of layout and styling.', projectSkills: 'HTML, CSS, & Git.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-1/'},
    {projectImage: 'img/project2.png', projectName: 'Experimental Mobile-first Responsive Layout', projectDescription: 'An exploration of mobile-first and responsive design techniques for a hypothetical developer page. Works on mobile through desktop.', projectSkills: 'Mobile-first Approach, Responsive Design, & HTML/CSS.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-2/'},
    {projectImage: 'img/project3.png', projectName: 'Online Registration Form', projectDescription: 'A mobile-friendly registration form with required fields that alert the user to missing information.', projectSkills: 'Mobile-first Approach, Responsive Design, & HTML/CSS.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-3/'},
    {projectImage: 'img/project4.png', projectName: 'Style Guide SASS Refactor', projectDescription: 'Took an existing CSS-only style guide and refactored it into clean, maintainable SASS.', projectSkills: 'SASS.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-4/'},
    {projectImage: 'img/project5.png', projectName: 'Interactive Photo Gallery', projectDescription: 'An interactive photo gallery featuring a lightbox and dynamic search bar.', projectSkills: 'Javascript, jQuery, & hand-coded search.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-5/'},
    {projectImage: 'img/project6.png', projectName: 'Game Show App', projectDescription: 'A word guessing game where players use a custom, onscreen keyboard to guess a randomly selected phrase. (Desktop/Tablet)', projectSkills: 'Javascript/HTML/CSS.', projectLink: 'https://akhazoyan.github.io/Techdegree-Project-6/'}
];


// Display Modal
function displayModal(selectedProject){
    selectedProject = projects[selectedProject];
    let modalHTML = `
        <a class="modalImageLink" target="_blank" href="${selectedProject.projectLink}"><img class="largeProjectImage" src="${selectedProject.projectImage}" alt="Preview image of ${selectedProject.projectName}"/></a>
        <div class="text-container">
            <h2 class="projectName">${selectedProject.projectName}</h2>
            <p class="projectInfo">${selectedProject.projectDescription}</p>
            <p class="projectSkills"><span class="skills">Skills Used:</span> ${selectedProject.projectSkills}</p>
            <a target="_blank" href="${selectedProject.projectLink}">View Full Project!</a>
        </div>
    `;

    overlay.classList.remove("hidden");
    overlay.classList.add("show");
    modalContainer.innerHTML = modalHTML;

    if(selectedProject === projects[5]) {
        next.style.display = 'none';
    } else {
        next.style.display = 'block';
    }
    if(selectedProject === projects[0]) {
        previous.style.display = 'none';
    } else {
        previous.style.display = 'block';
    }
}


// Click Event to Show the Modal
projectsContainer.addEventListener('click', function(e) {
    if (e.target !== projectsContainer) {
        let card = e.target.closest('img');
        let index = card.getAttribute('data-index');
        currentModalIndex = parseInt(index);
        displayModal(index);
    }
});


//Close the Modal
modalClose.addEventListener('click', function() {
    if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
        overlay.classList.add('hidden');
    }
});

overlay.addEventListener('click', function(e) {
    if (overlay.classList.contains('show') && e.target === overlay) {
        overlay.classList.remove('show');
        overlay.classList.add('hidden');
    }   
});


//Next and Previous Buttons
next.addEventListener('click', function() {
    displayModal(currentModalIndex + 1);
    currentModalIndex += 1;
});

previous.addEventListener('click', function() {
    displayModal(currentModalIndex - 1);
    currentModalIndex -= 1;
});