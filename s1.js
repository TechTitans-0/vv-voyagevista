document.addEventListener('DOMContentLoaded', () => {
    // Example: Add event listeners to state elements
    const states = document.querySelectorAll('.state');
    states.forEach(state => {
        state.addEventListener('click', () => {
            alert(`You clicked on ${state.querySelector('h2').textContent}`);
        });
    });
});
