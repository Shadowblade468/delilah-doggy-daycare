let dailyRate = 35;
let totalDays = 0;
let totalCost = 0;

// Selecting all day buttons and other necessary elements
const days = document.querySelectorAll('.day-selector li');
const clearButton = document.getElementById('clear-button');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const costDisplay = document.getElementById('calculated-cost');

days.forEach(day => {
    day.addEventListener('click', () => {
        if (!day.classList.contains('clicked')) {
            day.classList.add('clicked');
            totalDays++;
        }
        recalculateCost();
    });
});

clearButton.addEventListener('click', () => {
    days.forEach(day => {
        day.classList.remove('clicked');
    });
    totalDays = 0;
    recalculateCost();
});

halfDayButton.addEventListener('click', () => {
    dailyRate = 20;
    fullDayButton.classList.remove('clicked');
    halfDayButton.classList.add('clicked');
    recalculateCost();
});

fullDayButton.addEventListener('click', () => {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    recalculateCost();
});

function recalculateCost() {
    totalCost = dailyRate * totalDays;
    costDisplay.innerHTML = totalCost;
}
