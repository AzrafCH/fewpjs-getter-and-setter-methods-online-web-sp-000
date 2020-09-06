// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return 2 * 3.14 * this.radius
  }

  get area() {
    return 3.14 * this.radius ** 2
  }

  set diameter(newDiameter) {
    return this.radius/2
  }

  set circumference(newCircumference) {
    return Math.pi * diameter()
  }

  set area(newArea) {
    return Math.pi * this.radius ** 2
  }
}
