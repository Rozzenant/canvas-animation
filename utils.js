function fill_map(world_map){
    Array.from(world_map).forEach(coords => {
        context.fillStyle = "green"
        context.fillRect(div(coords.x, MAP_SCALE), div(coords.y, MAP_SCALE), 
                           div(TILE, MAP_SCALE), div(TILE, MAP_SCALE));
    });
}

function ray_casting(player){
    line = new Line(player.x, player.y);

    cur_angle = player.angle - HALF_FOV; //Начальный луч
    [x0, y0] = [player.x, player.y];
    for (let ray = 1; ray <= NUM_RAYS; ray++){
        sin_a = Math.sin(cur_angle);
        cos_a = Math.cos(cur_angle);
        for (let depth = 1; depth <= MAX_DEPTH; depth++){
            x = x0 + depth * cos_a;
            y = y0 + depth * sin_a;
            line.end = [x, y];
            // drawLine(line);
            x = div(x, TILE) * TILE;
            y = div(y, TILE) * TILE;
            if (Array.from(world_map).some(coords => coords.x === x && coords.y === y)) {
                depth *= Math.cos(player.angle - cur_angle); // изменяем глубину, чтобы избежать рыбьего глаза
                proj_height = PROJ_COEF / depth;
                color = 255 / (1 + depth * depth * 0.00005);
                context.fillStyle = `rgb(${color}, ${div(color, 2)}, ${div(color, 3)})`;
                context.fillRect(ray * SCALE, HALF_HEIGHT - div(proj_height, 2), SCALE, proj_height);
                //ray * SCALE - стена по X, HALF_HEIGHT - div(proj_height, 2) - смещение стены до середины
                //SCALE - размер 1 блока стены, proj_height - проекционная высота
                break;
            }
        }
        cur_angle += DELTA_ANGLE;
    }
}

function fill_background(){
    context.fillStyle = "skyblue";
    context.fillRect(0, 0, WIDTH, HALF_HEIGHT);
    context.fillStyle = "#696969"
    context.fillRect(0, HALF_HEIGHT, WIDTH, HALF_HEIGHT);
}