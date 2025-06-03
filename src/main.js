import './styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
  const showVideoBtn = document.getElementById("show-video-btn");
  const videoContainer = document.getElementById("video-container");
  const heroContainer = document.querySelector(".hero__container");

  if (showVideoBtn && videoContainer && heroContainer) {
    showVideoBtn.addEventListener("click", () => {
      heroContainer.classList.add("hero__container--video-active");
      showVideoBtn.style.display = "none"; // спрячем кнопку
    });
  } else {
    console.warn('Один из элементов не найден: showVideoBtn, videoContainer или heroContainer');
  }
});
