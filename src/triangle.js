class Triangle {
    constructor(length1, length2, length3, height1, height2, height3) {
        this.sideLength1 = length1;
        this.sideLength2 = length2;
        this.sideLength3 = length3;
        this.sideHeight1 = height1;
        this.sideHeight2 = height2;
        this.sideHeight3 = height3;
    }

    getSideLength (side) {
        switch (side) {
            case 1:
                return this.sideLength1;
                break;
            case 2:
                return this.sideLength2;
                break;
            default:
                return this.sideLength3;
        }
    }

    getSideHeight (side) {
        switch (side) {
            case 1:
                return this.sideHeight1;
                break;
            case 2:
                return this.sideHeight2;
                break;
            default:
                return this.sideHeight3;
        }
    }

    getSurfaceArea () {
        return (this.sideLength1 * this.sideHeight1) / 2;
    }

    getPerimeter () {
        return this.sideLength1 + this.sideLength2 + this.sideLength3;
    }

    triangleIsIsosceles(){
        if (this.sideLength1==this.sideLength2
            || this.sideLength1==this.sideLength3
            || this.sideLength3==this.sideLength2){
            return true;
        }
        else {
            return false;
        }
    }

    triangleIsEquilateral(){
        if (this.sideLength1==this.sideLength2 && this.sideLength3==this.sideLength2){
            return true;
        }
        else{
            return false;
        }
    }

    getLongestSide(){
        if (this.triangleIsEquilateral()){

        }
        else if(this.sideLength1 >= this.sideLength2 && this.sideLength1 >= this.sideLength3){
            return 1;
        }
        else if(this.sideLength2 >= this.sideLength1 && this.sideLength2 >= this.sideLength3){
            return 2;
        }
        else {
            return 3;
        }
    }

    triangleIsRectangle(){

    }
}

module.exports = {
    Triangle:Triangle
}