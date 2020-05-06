function Rectangle(widht,height){
    this.widht = widht;
    this.height = height;

}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.draw = function (context){
    context.beginPath();
    context.rect(this.getCenter().getX(),this.getCenter().getY(),this.widht,this.height);
    context.stroke();
};



