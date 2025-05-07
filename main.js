// Start animations + music on first tap or click (supports Safari on iPhone)
window.addEventListener('DOMContentLoaded', () => {
  const playMusicAndStart = () => {
    const music = document.getElementById('background-music');
    music.play().catch((e) => {
      console.log('Music autopl blocked:', e);
    });
    document.body.classList.remove("container");
  };

  // Listen for first interaction (both mobile + desktop)
  window.addEventListener('click', playMusicAndStart, { once: true });
  window.addEventListener('touchstart', playMusicAndStart, { once: true });

  // 🌸 Create falling petals
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = 4 + Math.random() * 3 + 's';
    document.querySelector('.petals').appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 8000);
  }

  // Generate petals continuously
  setInterval(createPetal, 400);
});
