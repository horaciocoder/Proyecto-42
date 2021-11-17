class Drops {
    constructor(x, y) {
        var options = {
            restitution: 0,
            density: 0.1,
            friction: 0.8
        }
        this.rain = Bodies.circle(x, y, 5, options);
        World.add(world, this.rain);
        this.width = 5;
        this.height = 5;
    }
    display() {
        var pos = this.rain.position;
        fill("rgb(35, 75, 205)");
        ellipse(pos.x, pos.y, this.width, this.height);
    }
}