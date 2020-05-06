var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle1 = /** @class */ (function (_super) {
    __extends(Circle1, _super);
    function Circle1(radius) {
        var _this = _super.call(this, new Point1(0, 0)) || this;
        _this.radius = radius;
        return _this;
    }
    Circle1.prototype.draw1 = function (context) {
        context.beginPath();
        context.arc(this.center.getX1(), this.center.getY1(), this.radius, 0, 2 * Math.PI);
        context.stroke();
    };
    return Circle1;
}(Shape1));
