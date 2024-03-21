// Create confetti
const confettiContainer = document.getElementById('confetti');
for (let i = 0; i < 50; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.animationDelay = Math.random() * 5 + 's';
  confettiContainer.appendChild(confetti);
}
