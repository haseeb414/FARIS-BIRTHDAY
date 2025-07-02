// 🎯 Countdown to July 29
function updateCountdown() {
  const target = new Date("2025-07-29T00:00:00");
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "🎉 It's Your Birthday Today! 🎁";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// 🔁 Call the function now + every second
updateCountdown(); // Initial call
setInterval(updateCountdown, 1000); // Keep updating every second
