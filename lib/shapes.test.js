// Imports Triangle, Square, and Circle classes from shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Tests for a triangle with a black background 
describe("Triangle test", () => {
  test("test for a triangle with a lack background", () => {
    const shape = new Triangle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="black" />'
    );
  });
});

// Tests for a square with a black background
describe("Square test", () => {
  test("test for a square with a black background", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="black" />'
    );
  });
});

// Tests for a circle with a black background
describe("Circle test", () => {
  test("test for a circle with a black background", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="115" r="80" fill="black" />'
    );
  });
});