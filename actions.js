
function drawLine(line) {
    context.beginPath();
    context.moveTo(line.start_x, line.start_y);
    context.lineTo(line.end_x, line.end_y);
    context.strokeStyle = "#FFFF33";
    context.lineWidth = 1;
    context.stroke();
}

function drawCircle(x, y) {
    context.beginPath();
    context.arc(x, y, div(15, MAP_SCALE), 0, Math.PI * 2);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
}