// JavaScript to toggle mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  // Toggle mobile menu visibility
  mobileMenu.style.display = mobileMenu.style.display === "none" ? "block" : "none";
});

// Function to open links in a new tab
function openLink(url) {
  window.open(url, '_blank');
}

// JavaScript to toggle service content visibility with smooth transition
function toggleServiceContent(serviceId) {
    const content = document.getElementById(serviceId);
    content.classList.toggle('open'); // Add/remove 'open' class to toggle visibility
}

// JavaScript to toggle team content visibility
function toggleTeam(teamId) {
    const content = document.getElementById(teamId);
    content.classList.toggle('open'); // Add/remove 'open' class to toggle visibility
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('fade-in-visible'); // Add class to trigger fade-in
      }
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Initially trigger the check to handle elements already in viewport
document.addEventListener('DOMContentLoaded', handleScroll);

// Function to open project modal
function openModal(projectId) {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');

  // Dynamically set the modal content based on the clicked project
  if (projectId === 'firefly') {
    title.textContent = 'Solar Panel Tracking System';
    content.innerHTML = `
      <p>This project involved designing a solar panel tracking system using Arduino and C++.</p>
      <img src="/imgs/fullsolar.jpg" alt="FireFly" class="w-full h-auto mt-4">
      <p class="mt-4">Tags: Hardware Programming, Arduino, C++</p>
      <h4 class="mt-6 text-xl font-semibold">Watch the Demo Video:</h4>
      <video width="100%" height="auto" autoplay muted class="rounded-lg mt-4">
        <source src="/vids/testsolar.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else if (projectId === 'prola') {
    title.textContent = 'Drainage Monitoring System';
    content.innerHTML = `
      <p>Flooding, exacerbated by climate change, has become a major global concern, affecting millions, with urban drainage systems often lacking real-time monitoring (CSSR, NCA4; WHO, 2019). In Catbalogan City, Samar, Philippines, the city's vulnerability to tropical storms and flooding is intensified by rapid urbanization and aging infrastructure. Research by Chocat et al. (2007) and Larsen & Gujer (1997) highlights the critical role of drainage systems in managing stormwater, but emphasizes the need for real-time monitoring to prevent inefficiencies and flood risks.</p>
      <img src="/imgs/drainage.png" alt="Prola" class="w-full h-auto mt-4">
      <p class="mt-4">Tags: Hardware Programming, Arduino, C++</p>
      <h4 class="mt-6 text-xl font-semibold">Watch the Demo Video:</h4>
      <video width="100%" height="auto" autoplay muted class="mt-4">
        <source src="/vids/drainage.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else if (projectId === 'example') {
    title.textContent = 'Poarms';
    content.innerHTML = `
      <p>As a front-end developer at this capstone project, I’m working on a system designed to collect, store, and manage student data for the College of Engineering. The system tracks student profiles, performance, Course Learning Outcomes (CLOs), and program outcomes. It plays a key role in monitoring student progress and evaluating the effectiveness of educational programs. The system generates various reports, such as attainment reports for CLOs, progress reports for program outcomes, and suggestions for program improvements. These reports help faculty and administrators monitor student advancement, identify areas needing improvement, and make informed decisions to enhance the quality of education.</p>
      <img src="/imgs/po.png" alt="Example" class="w-full h-auto mt-4">
      <p class="mt-4">Tags: C#, WinForms, Programming</p>
      <h4 class="mt-6 text-xl font-semibold">Watch the Demo Video:</h4>
      <video width="100%" height="auto" autoplay muted class="mt-4">
        <source src="/vids/potest.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else if (projectId === 'demo') {
    title.textContent = 'MilkTea Shop';
    content.innerHTML = `
      <p>An e-commerce website developed using Node, Express, featuring product adding, editing, deleting..</p>
      <img src="/imgs/teatest.png" alt="Demo" class="w-full h-auto mt-4">
      <p class="mt-4">Tags: Node.js, Express.js, Webdev</p>
      <h4 class="mt-6 text-xl font-semibold">Visit the Link for Testing:</h4>
      <a href="https://milktea-5srx.onrender.com/" target="_blank" class="mt-4 text-blue-500 hover:underline">Click here</a>
    `;
  } else if (projectId === 'doc') {
    title.textContent = 'Document Tracking System';
    content.innerHTML = `
      <p>A modern web tracking application built with Node.js, Express.</p>
      <img src="/imgs/track.png" alt="Demo" class="w-full h-auto mt-4">
      <p class="mt-4">Tags: Node.js, Express.js, Webdev</p>
      <h4 class="mt-6 text-xl font-semibold">Github:</h4>
      <a href="https://github.com/JohnX44/Doctracking" target="_blank" class="mt-4 text-blue-500 hover:underline">Click here</a>
    `;
  }

  modal.classList.remove('hidden');
}

// Function to close project modal
function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
}

// ** Contact Modal Logic **

// Function to open the contact modal
function openContactModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('hidden');
}

// Function to close the contact modal
function closeContactModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.add('hidden');
}

// Attach the 'openContactModal' function to the "Get in touch" button
const contactButton = document.querySelector(".get-in-touch-btn"); // The button should have this class
contactButton.addEventListener("click", openContactModal);

// Attach the 'closeContactModal' function to the close button inside the modal
const closeContactButton = document.querySelector("#contactModal button");
closeContactButton.addEventListener("click", () => closeContactModal());
