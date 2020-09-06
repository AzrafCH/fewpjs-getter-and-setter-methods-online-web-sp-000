// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    this.radius * 2
  }

  get circumference() {
    Math.pi * diameter()
  }

  get area() {
    Math.pi * this.radius ** 2 
  }
}
