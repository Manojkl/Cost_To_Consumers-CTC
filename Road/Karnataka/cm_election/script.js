const timer = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");

// Fixed start time: Assume countdown started on June 1, 2023
const startDate = new Date("2023-06-01T00:00:00+05:30");
const electionDate = new Date("2028-05-01T08:00:00+05:30");

function updateTimer() {
    const now = new Date();
    const totalTime = electionDate - startDate;
    const remaining = electionDate - now;
    const elapsed = now - startDate;

    if (remaining <= 0) {
        timer.innerHTML = "🗳️ It's Election Day!";
        progressBar.style.width = "100%";
        percentage.textContent = "100% time elapsed.";
        return;
    }

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);
    const milliseconds = remaining % 1000;

    timer.innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s 
    <span style="font-size: 1rem">${milliseconds.toString().padStart(3, '0')}ms</span>
  `;

    const percentElapsed = (elapsed / totalTime) * 100;
    progressBar.style.width = percentElapsed.toFixed(6) + "%";
    percentage.textContent = `${percentElapsed.toFixed(6)}% time elapsed`;
}

setInterval(updateTimer, 50);
