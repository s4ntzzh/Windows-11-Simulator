// 1. Relógio
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock(); 

// 2. Menu Iniciar
const startMenu = document.getElementById('startMenu');
const startButton = document.getElementById('startButton');

function toggleStartMenu() {
    startMenu.classList.toggle('show');
    startButton.classList.toggle('active');
}

// 3. Funções da Janela
const myWindow = document.getElementById('myWindow');

function openWindow() {
    myWindow.style.display = 'block';
    startMenu.classList.remove('show');
    startButton.classList.remove('active');
}

function closeWindow() {
    myWindow.style.display = 'none';
}

// 4. Fechar Menu ao clicar fora
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!target.closest('.start-button') && !target.closest('.start-menu')) {
        startMenu.classList.remove('show');
        startButton.classList.remove('active');
    }
});


// 5. Arrastar a Janela (Drag Functionality)
const titlebar = document.getElementById('windowTitlebar');
let isDragging = false;
let offset = { x: 0, y: 0 };

titlebar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offset.x = e.clientX - myWindow.offsetLeft;
    offset.y = e.clientY - myWindow.offsetTop;
    myWindow.style.zIndex = 1000; 
    titlebar.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    myWindow.style.left = (e.clientX - offset.x) + 'px';
    myWindow.style.top = (e.clientY - offset.y) + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    titlebar.style.cursor = 'grab';
    myWindow.style.zIndex = 50;
});