
function drawLine(canvas) {
    line1 = new Line(0, 0, WIDTH, HEIGHT);
    context.beginPath();
    context.moveTo(line1.start_x, line1.start_y);
    context.lineTo(line1.end_x, line1.end_y);
    context.strokeStyle = "#33FF33";
    context.lineWidth = 10;
    context.stroke();

    line2 = new Line(0, HEIGHT, WIDTH, 0)
    context.beginPath();
    context.moveTo(line2.start_x, line2.start_y);
    context.lineTo(line2.end_x, line2.end_y);
    context.strokeStyle = "#FFFF33";
    context.lineWidth = 4;
    context.stroke();
}

function drawCircle() {
    clearCanvas(canvas);
    ctx.beginPath();
    ctx.arc(xPos, yPos, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}