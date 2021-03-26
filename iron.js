class Log{
    constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3,
          'restitution':0.8
        };
    this.body = Bodies.rectangle(500, 500, 15, 40, options);
    this.width = 15;
    this.height = 40;
    World.add(world, this.body);
    };
    display(){
        push();
        fill('yellow')
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y, this.width, this.height);
        pop();

      }
}