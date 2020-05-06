class Rectangle1 extends Shape1{
    private width : number;
    private height : number;
    constructor(width : number, height : number){
        super(new Point1(0,0));
        this.width = width;
        this.height = height;
    }
    draw1(context){
        context.beginPath();
        context.rect(this.center.getX1(),this.center.getY1(),this.width,this.height);
        context.stroke();
    }
}