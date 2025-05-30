import './styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
  const showVideoBtn = document.getElementById("show-video-btn");
  const videoContainer = document.getElementById("video-container");

  if (showVideoBtn && videoContainer) {
    showVideoBtn.addEventListener("click", () => {
      videoContainer.classList.add("hero__video--active");
      showVideoBtn.style.display = "none"; // спрячем кнопку
    });
  } else {
    console.warn('Элемент showVideoBtn или videoContainer не найден в DOM');
  }
});
