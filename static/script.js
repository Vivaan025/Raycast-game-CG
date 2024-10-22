const gameInterface = document.getElementById('gameInterface');
const startGameButton = document.getElementById('startButton');

document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gameInterface.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg)`;
});

// Start game logic with fetch request
startGameButton.addEventListener('click', function() {
    fetch('/start-game')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Add any additional logic you want after starting the game
        })
        .catch(error => console.error('Error starting the game:', error));
});
