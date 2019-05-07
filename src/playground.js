import React from 'react'

class Car {
  constructor() {
    this.wheels = 4;
    this.type = 'Hatchback'
  }

}




//inheritance! 
class Ford extends Car {
  constructor() {
    super()
    this.window = 4;
  }
}

const ford = new Ford();

console.log(ford.wheels)

