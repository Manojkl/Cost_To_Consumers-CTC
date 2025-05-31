const totalAmount = 280000000000; // ₹2800 crores in rupees
// Define your project start date (YYYY-MM-DD format)
const projectStartDate = new Date('2025-03-07T00:00:00Z'); // Adjust time zone if needed

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

// let startTime = Date.now();
const startTime = projectStartDate.getTime();

// ... your existing code ...

function updateBurn() {
    const now = Date.now();
    const elapsedMs = now - startTime;

    const elapsedSeconds = Math.floor(elapsedMs / 1000);
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

    // Update Burnt So Far
    document.getElementById('burnSec').textContent = `₹${Math.floor(burntSoFar.perSecond).toLocaleString('en-IN')}`;
    document.getElementById('burnMin').textContent = `₹${Math.floor(burntSoFar.perMinute).toLocaleString('en-IN')}`;
    document.getElementById('burnHour').textContent = `₹${Math.floor(burntSoFar.perHour).toLocaleString('en-IN')}`;
    document.getElementById('burnDay').textContent = `₹${Math.floor(burntSoFar.perDay).toLocaleString('en-IN')}`;
    document.getElementById('burnMonth').textContent = `₹${Math.floor(burntSoFar.perMonth).toLocaleString('en-IN')}`;
    document.getElementById('burnYear').textContent = `₹${Math.floor(burntSoFar.perYear).toLocaleString('en-IN')}`;

    // Update Burn Rate
    document.getElementById('rateSec').textContent = `₹${Math.floor(burnRates.perSecond).toLocaleString('en-IN')}`;
    document.getElementById('rateMin').textContent = `₹${Math.floor(burnRates.perMinute).toLocaleString('en-IN')}`;
    document.getElementById('rateHour').textContent = `₹${Math.floor(burnRates.perHour).toLocaleString('en-IN')}`;
    document.getElementById('rateDay').textContent = `₹${Math.floor(burnRates.perDay).toLocaleString('en-IN')}`;
    document.getElementById('rateMonth').textContent = `₹${Math.floor(burnRates.perMonth).toLocaleString('en-IN')}`;
    document.getElementById('rateYear').textContent = `₹${Math.floor(burnRates.perYear).toLocaleString('en-IN')}`;

    // Update Time Units Passed
    document.getElementById('elapsedSec').textContent = elapsedSeconds;
    document.getElementById('elapsedMin').textContent = elapsedMinutes;
    document.getElementById('elapsedHour').textContent = elapsedHours;
    document.getElementById('elapsedDay').textContent = elapsedDays;
    document.getElementById('elapsedMonth').textContent = elapsedMonths;
    document.getElementById('elapsedYear').textContent = elapsedYears;

    // Update Elapsed Time Display (existing)
    const displayDays = elapsedDays;
    const displayHours = elapsedHours % 24;
    const displayMinutes = elapsedMinutes % 60;
    const displaySeconds = Math.floor(elapsedSeconds % 60);
    document.getElementById('elapsedTime').textContent =
        `Elapsed Time: ${displayDays} days ${displayHours} hrs ${displayMinutes} min ${displaySeconds} sec`;

    // Update Total Burnt and Percentage
    const totalBurnt = burntSoFar.perSecond;
    const percentageBurnt = (totalBurnt / totalAmount) * 100;
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