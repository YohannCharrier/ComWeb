function Shape(x,y){
    this.center = new Point(x,y);
}

Shape.prototype.draw = function(context){};
Shape.prototype.getCenter = function(){return this.center};
Shape.prototype.setCenter = function(center){
        this.center = center;
    };


