document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for Discord status update
    const onlinePlayers = document.getElementById('online-players');
    onlinePlayers.textContent = '42'; // Example value, replace with actual data

    // Event countdown functionality
    const eventCountdown = document.getElementById('event-countdown');
    const eventDate = new Date('2023-12-31T00:00:00'); // Example event date
    const updateCountdown = () => {
        const now = new Date();
        const timeLeft = eventDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        eventCountdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    setInterval(updateCountdown, 1000);

    // Tab Navigation Logic
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            document.querySelectorAll('.tab-content').forEach(tc => {
                tc.style.display = (tc.id === tabId) ? 'block' : 'none';
            });
        });
    });

    // Initially nur die erste Sektion sichtbar
    document.querySelectorAll('.tab-content').forEach((tc, index) => {
        tc.style.display = index === 0 ? 'block' : 'none';
    });
});
