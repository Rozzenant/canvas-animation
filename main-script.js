let xPos = 0;
let yPos = 0;

function main() {
    resizeCanvas(canvas);
    drawLine(canvas);
    
    // Слушаем события нажатия клавиш
    // document.addEventListener('keydown', function(e) {
    //     switch (e.key) {
    //     case 'ArrowUp':
    //         // Движение вверх
    //         yPos -= 10;
    //         break;
    //     case 'ArrowDown':
    //         // Движение вниз
    //         yPos += 10;
    //         break;
    //     case 'ArrowLeft':
    //         // Движение влево
    //         xPos -= 10;
    //         break;
    //     case 'ArrowRight':
    //         // Движение вправо
    //         xPos += 10;
    //         break;
    //     }
    //     // drawCircle();
    // });
}

// setInterval(main, 1000/FPS)
main();
