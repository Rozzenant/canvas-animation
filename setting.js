// Здесь находятся основные функции, константы и настройки связанные с Canvas
function div(val, by){
    return (val - val % by) / by;
}

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const WIDTH = 1000;
const HEIGHT = 600;
const HALF_HEIGHT = div(HEIGHT, 2);
const TILE = 100;
const PLAYER_SPEED = 10;
const FOV = Math.PI / 3;
const HALF_FOV = FOV / 2;
const NUM_RAYS = 200;
const MAX_DEPTH = 800;
const DELTA_ANGLE = FOV / NUM_RAYS;
const SCALE = div(WIDTH, NUM_RAYS);
const DIST = NUM_RAYS / (2 * Math.tan(HALF_FOV));
const PROJ_COEF = DIST * TILE * 3; 
const MAP_SCALE = 5;

function resizeCanvas(canvas) {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
}

function clearCanvas(canvas) {
    canvas.width = canvas.width;
}