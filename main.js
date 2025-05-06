// Start animations + music on first click
window.addEventListener('click', () => {
  const music = document.getElementById('background-music');
  music.play().catch((e) => {
    console.log('Music autoplay blocked:', e);
  });
  document.body.classList.remove("container");
}, { once: true });
