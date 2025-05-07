// Start animations + music on first tap or click (supports Safari on iPhone)
window.addEventListener('DOMContentLoaded', () => {
  const playMusicAndStart = () => {
    const music = document.getElementById('background-music');
    music.play().catch((e) => {
      console.log('Music autoplay blocked:', e);
    });
    document.body.classList.remove("container");
  };

  // Support both desktop and iPhone touch
  window.addEventListener('click', playMusicAndStart, { once: true });
  window.addEventListener('touchstart', playMusicAndStart, { once: true });
});
