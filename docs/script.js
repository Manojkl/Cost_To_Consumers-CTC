const totalAmount = 280000000000; // ₹2800 crores in rupees

const secondsInYear = 365 * 24 * 60 * 60;
const minutesInYear = 365 * 24 * 60;
const hoursInYear = 365 * 24;
const daysInYear = 365;
const monthsInYear = 12;

const burnRates = {
    perSecond: totalAmount / secondsInYear,
    perMinute: totalAmount / minutesInYear,
    perHour: totalAmount / hoursInYear,
    perDay: totalAmount / daysInYear,
    perMonth: totalAmount / monthsInYear,
    perYear: totalAmount
};

let startTime = Date.now();

// ... your existing code ...

function updateBurn() {
    
    const now = Date.now();
    const elapsedMs = now - startTime;

    const elapsedSeconds = elapsedMs / 1000;
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);
    const elapsedMonths = Math.floor(elapsedDays / (365 / 12));
    const elapsedYears = Math.floor(elapsedDays / 365);

    const burntSoFar = {
        perSecond: burnRates.perSecond * elapsedSeconds,
        perMinute: burnRates.perMinute * elapsedMinutes,
        perHour: burnRates.perHour * elapsedHours,
        perDay: burnRates.perDay * elapsedDays,
        perMonth: burnRates.perMonth * elapsedMonths,
        perYear: burnRates.perYear * elapsedYears
    };

    document.getElementById('burnSec').textContent = `₹${Math.floor(burntSoFar.perSecond).toLocaleString('en-IN')}`;
    document.getElementById('burnMin').textContent = `₹${Math.floor(burntSoFar.perMinute).toLocaleString('en-IN')}`;
    document.getElementById('burnHour').textContent = `₹${Math.floor(burntSoFar.perHour).toLocaleString('en-IN')}`;
    document.getElementById('burnDay').textContent = `₹${Math.floor(burntSoFar.perDay).toLocaleString('en-IN')}`;
    document.getElementById('burnMonth').textContent = `₹${Math.floor(burntSoFar.perMonth).toLocaleString('en-IN')}`;
    document.getElementById('burnYear').textContent = `₹${Math.floor(burntSoFar.perYear).toLocaleString('en-IN')}`;

    // Calculate leftover hours, minutes, seconds for timer display
    const displayDays = elapsedDays;
    const displayHours = elapsedHours % 24;
    const displayMinutes = elapsedMinutes % 60;
    const displaySeconds = Math.floor(elapsedSeconds % 60);

    // Update elapsed time display
    document.getElementById('elapsedTime').textContent =
        `Elapsed Time: ${displayDays} days ${displayHours} hrs ${displayMinutes} min ${displaySeconds} sec`;

    // New: Total burnt and percentage
    const totalBurnt = burntSoFar.perSecond; // total burnt so far based on seconds elapsed
    const percentageBurnt = (totalBurnt / totalAmount) * 100;

    // Format nicely with commas, 6 decimal places for % to show fine changes
    const totalBurntFormatted = `₹${Math.floor(totalBurnt).toLocaleString('en-IN')}`;
    const percentageFormatted = percentageBurnt.toFixed(6);

    document.getElementById('totalBurnt').innerHTML = `
        Money Burnt So Far: <span style="color:#d9534f;">${totalBurntFormatted}</span> 
        (<span style="color:#5cb85c;">${percentageFormatted}%</span>)
        `;

}

// Update every 0.5 seconds
setInterval(updateBurn, 500);

// Initial call
updateBurn();
