text_map = [
    "WWWWWWWWWW",
    "W........W",
    "W..W.WWWWW",
    "W..W..W..W",
    "W.....W..W",
    "W.....WW.W",
    "W..WWWW..W",
    "W........W",
    "W..WWWW..W",
    "WWWWWWWWWW",
];

const world_map = new Set();

for (let y = 0; y < text_map.length; y++) {
    for (let x = 0; x < text_map[y].length; x++) {
        if (text_map[y][x] === "W") {
            const xy = { x: x * TILE, y: y * TILE };
            world_map.add(xy);
        }
    }
}