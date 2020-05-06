class Circle1 extends Shape1{
    private radius : number;
    constructor(radius : number){
        super(new Point1(0,0));
        this.radius = radius;
    }
    draw1(context) : void {
        context.beginPath();
        context.arc(this.center.getX1(),this.center.getY1(),this.radius,0,2*Math.PI);
        context.stroke();
    }
}