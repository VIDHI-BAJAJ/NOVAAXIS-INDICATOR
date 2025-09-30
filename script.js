// Countdown
const targetDate = new Date("Oct 1, 2025 20:50:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    clearInterval(timer);
    return;
  }

  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("hours").innerText = String(hours).padStart(2,'0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2,'0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2,'0');
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector('.faq-icon');
    answer.classList.toggle('show');
    icon.textContent = answer.classList.contains('show') ? '−' : '+';
  });
});
