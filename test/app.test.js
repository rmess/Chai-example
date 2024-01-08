const {Cube,Panier} = require('../src/app');
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Basket Class', () => {
    let basket;
    let cube1;
    let cube2;
  
    beforeEach(() => {
      basket = new Panier();
      cube1 = new Cube(2, 10);
      cube2 = new Cube(3, 15);
    });
  
    it('should add a cube to the basket', () => {
      basket.addCube(cube1);
      expect(basket.basket).to.have.lengthOf(1);
      expect(basket.basket[0]).to.deep.equal(cube1);
    });
  
    it('should remove a cube from the basket', () => {
      basket.addCube(cube1);
      basket.addCube(cube2);
      basket.removeCube(cube1);
      expect(basket.basket).to.have.lengthOf(1);
      expect(basket.basket[0]).to.equal(cube2);
    });
  
    it('should calculate the total price of cubes in the basket', () => {
      basket.addCube(cube1);
      basket.addCube(cube2);
      const totalPrice = basket.calculateTotalPrice();
      expect(totalPrice).to.equal(10 + 15);
    });
  });