let xPos = div(WIDTH, 2);
let yPos = div(HEIGHT, 1.5);

function main() {
    resizeCanvas(canvas);
    
    player = new Player(xPos, yPos, 1.5 * Math.PI / 2);
    fill_background();
    ray_casting(player);
    fill_map(world_map);
    player.render();

    const keys = {};

    document.addEventListener('keydown', function(event) {
        keys[event.key] = true;
        moveKeys();
    });

    document.addEventListener('keyup', function(event) {
        keys[event.key] = false;
        moveKeys();
    });

    function moveKeys() {
        if (keys['q']) {
            player.angle -= 0.05;
        }
        if (keys['e']) {
            player.angle += 0.05;
        }

        sin_a = Math.sin(player.angle)
        cos_a = Math.cos(player.angle)

        if (keys['w']) {
            player.x += PLAYER_SPEED * cos_a;
            player.y += PLAYER_SPEED * sin_a;
        }
        if (keys['s']) {
            player.x -= PLAYER_SPEED * cos_a;
            player.y -= PLAYER_SPEED * sin_a;
        }
        if (keys['a']) {
            player.x += PLAYER_SPEED * sin_a;
            player.y -= PLAYER_SPEED * cos_a;
        }
        if (keys['d']) {
            player.x -= PLAYER_SPEED * sin_a;
            player.y += PLAYER_SPEED * cos_a;
        }

        clearCanvas(canvas);
        fill_background();
        ray_casting(player);
        fill_map(world_map);
        player.render();
    }
}


// setInterval(main, 1000/FPS)
main();
