// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return Math.pi * diameter()
  }

  get area() {
    return Math.pi * this.radius ** 2
  }
}
