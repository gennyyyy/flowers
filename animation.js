document.addEventListener('DOMContentLoaded', () => {
    const flower = document.getElementById('flower');

    // Start with the growing animation
    flower.classList.add('growing');

    // Listen for the end of the grow animation
    flower.addEventListener('animationend', (event) => {
        if (event.animationName === 'grow') {
            flower.classList.remove('growing');
            flower.classList.add('waving');
        }
    });

    // Create stars
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100; // Cover full height

        star.style.left = `${x}vw`;
        star.style.top = `${y}vh`;

        // Random animation delay and duration
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 3;

        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;

        document.body.appendChild(star);
    }
});
