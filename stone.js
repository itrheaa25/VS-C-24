class Stone{
    constructor(x, y) {
        var options = {
          'density':12,
          'friction': 0.9,
          'restitution':0.8
        };
    this.body = Bodies.rectangle(530, 500, 15, 10, options);
    this.width = 15;
    this.height = 10;
    World.add(world, this.body);
    };
    display(){
        push();
        stroke('blue')
        fill('white')
        rectMode(CENTER)
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }
 