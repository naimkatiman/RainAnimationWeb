const rainContainer = document.getElementById('rain-container');
const numDrops = 150;

function createRainDrop() {
    const drop = document.createElement('div');
    drop.classList.add('rain-drop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.width = `${1 + Math.random() * 2}px`;
    drop.style.height = `${5 + Math.random() * 15}vh`;
    drop.style.animationDuration = `${0.5 + Math.random() * 1.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    drop.style.opacity = Math.random();
    console.log('Created drop:', drop); // Debug: Log the drop creation
    drop.addEventListener('animationend', createSplash);
    return drop;
}

function createSplash(event) {
    const splash = document.createElement('div');
    splash.classList.add('splash');
    splash.style.left = event.target.style.left;
    splash.style.animationDelay = `${event.target.style.animationDuration}`;
    rainContainer.appendChild(splash);
    event.target.remove();
}

for (let i = 0; i < numDrops; i++) {
    const drop = createRainDrop();
    rainContainer.appendChild(drop);
    console.log('Appended drop:', drop); // Debug: Log the drop appending
}

// Verify the container
console.log('Rain container:', rainContainer);
