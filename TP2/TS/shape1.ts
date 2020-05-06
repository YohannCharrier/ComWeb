abstract class Shape1{
    protected center : Point1;
    constructor(center : Point1){
        this.center = center;
    }
    abstract draw1(context) : void;
    setCenter1(center : Point1){
        this.center = center;
    }
}