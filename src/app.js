class Cube {
    constructor(length,price = 0) {
        this.length = length;
        this.price = price;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Panier {
    constructor() {
        this.basket = new Array();
    }

    addCube (cube) {
        this.basket.push(cube)
    }

    removeCube(cube) {
        const index = this.basket.indexOf(cube);
        if (index !== -1) {
          this.basket.splice(index,1);
        }
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        for (const cube of this.basket) {
          totalPrice += cube.price;
        }
        return totalPrice;
    }

}

module.exports = {
    Cube:Cube,
    Panier:Panier
}