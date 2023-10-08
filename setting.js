// Здесь находятся основные функции, константы и настройки связанные с Canvas

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let WIDTH = 720;
let HEIGHT = 480;
let FPS = 10;

function resizeCanvas(canvas) {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

function clearCanvas(canvas) {
    canvas.width = canvas.width;
}