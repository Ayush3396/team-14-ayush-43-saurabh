document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    const updateDisplay = () => {
        counterDisplay.textContent = count;
        // Subtle animation
        counterDisplay.style.transform = 'scale(1.1)';
        setTimeout(() => {
            counterDisplay.style.transform = 'scale(1)';
        }, 100);
    };

    incrementBtn.addEventListener('click', () => {
        count++;
        updateDisplay();
    });

    resetBtn.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
});
