// Объявление классов примитивов и функций создания и удаления примитивов
// Подразумевается, что в классы Point, Line, Triangle, Circle получают значения типа Number или Array of Number

class Point {
    constructor(x=0, y=0){
        this._x = x;
        this._y = y;
    }

    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }

    set xy(xy) {
        [this._x, this._y] = xy;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get xy() {
        return [this._x, this._y];
    }
}

class Line {
    constructor(x1=0, y1=0, x2=0, y2=0) {
        this._start = new Point(x1, y1);
        this._end = new Point(x2, y2);  
    }

    set start(xy) {
        this._start.xy = xy;
    }

    set end(xy) {
        this._end.xy = xy;
    }

    set all_points(xy) {
        [this._start._x,
         this._start._y,
         this._end._x,
         this._end._y] = xy
    }
    
    get start_x() {
        return this._start._x
    }

    get start_y() {
        return this._start._y
    }

    get start() {
        return this._start.xy;
    }

    get end_x() {
        return this._end._x;
    }

    get end_y() {
        return this._end._y;
    }

    get end() {
        return this._end.xy;
    }

    get all_points() {
        return [this._start._x,
                this._start._y,
                this._end._x,
                this._end._y]
    }

    len() {
        return Math.SQRT2(Math.pow(this._end._x - this._start._x, 2) + 
                          Math.pow(this._end._y - this._start._y, 2))
    }
}

class Triangle {
    constructor(x1, y1, x2, y2, x3, y3) {
        this._p1 = new Point(x1, y1);
        this._p2 = new Point(x2, y2);
        this._p3 = new Point(x3, y3);
    }

    set point1(xy) {
        this._p1.xy = xy;
    }

    set point2(xy) {
        this._p2.xy = xy;
    }

    set point3(xy) {
        this._p3.xy = xy;
    }

    get point1() {
        return this._p1.xy;
    }

    get point2() {
        return this._p2.xy;
    }

    get point3() {
        return this._p3.xy;
    }
}

class Circle {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;
    }

    set x(x) {
        this._x = x;
    }

    set y(y) {
        this._y = y;
    }

    set xy(xy) {
        [this._x, this._y] = xy;
    }

    set r(r) {
        this._r = r;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get xy() {
        return [this._x, this._y];
    }

    get r() {
        return this._r;
    }

}

class Player {
    constructor(x, y, angle){
        this._x = x;
        this._y = y;
        this._x_map = div(x, MAP_SCALE);
        this._y_map = div(y, MAP_SCALE);
        this._angle = angle
        this._line_view = new Line(x, y,
                              x + WIDTH * Math.cos(angle), y + WIDTH * Math.sin(angle));
    }

    set x(x){
        this._x = x;
    }

    set y(y){
        this._y = y;
    }

    set angle(angle){
        this._angle = angle;
    }

    get x(){
        return this._x;
    }

    get y(){
        return this._y;
    }

    get angle(){
        return this._angle;
    }

    render(){
        this._x_map = div(this._x, MAP_SCALE);
        this._y_map = div(this._y, MAP_SCALE);
        this._line_view.start = [this._x_map, this._y_map];
        this._line_view.end = [this._x_map + 20 * Math.cos(this._angle),
                               this._y_map + 20 * Math.sin(this._angle)];
        
        drawLine(this._line_view);
        drawCircle(this._x_map, this._y_map);
        
    }
}