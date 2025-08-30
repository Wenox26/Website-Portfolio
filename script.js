// FOR HAMBURGER MENU ANIMATION & MENU LINKS

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


//FOR THE VIDEO FLEX HOVER PLAY
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video');

videoContainer.addEventListener('mouseover', () => {
  video.muted = false;
  video.play();
});

videoContainer.addEventListener('mouseout', () => {
  video.muted = true;
  video.pause();
});

