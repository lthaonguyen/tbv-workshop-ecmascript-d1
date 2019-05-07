test('has a constructor for initialization', () => {
  // Create an Animal class
  // Add a constructor that takes one param, the name.
  // Set this.name to the name passed in
  class Animal {
    constructor(name) {
      this.name = name
    }
  }
  
  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBeUndefined()
  expect(dog.name).toBe('Dog')
})

test('constructor can have default param values', () => {
  // Create an Animal class with a constructor
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
  }
  // Make your class default (using default params) the name to 'Honey Badger'

  const animal = new Animal()
  const dog = new Animal('Dog')

  expect(animal.name).toBe('Honey Badger')
  expect(dog.name).toBe('Dog')
})

test('can have instance methods', () => {
  // Create an Animal class, pass in the name to the constructor, and add a sayName function to the class definition
  class Animal {
    constructor(name = 'Honey Badger') {
      this.name = name
    }
    sayName () {
      return `My name is: ${this.name}`
    }
  }
  const animal = new Animal()

  expect(animal.sayName).toBeDefined()
  expect(Animal.sayName).toBeUndefined()
  expect(animal.sayName()).toBe('My name is: Honey Badger')
})

test('can have static methods', () => {
  // Create an Animal class, pass in the name to the constructor,
  // and add a create method that takes a name and returns an instance
  class Animal {
    constructor(name) {
      this.name = name
    }
    static create () {
      return this.name
    }
  }

  const animal = new Animal()

  expect(animal.create).toBeUndefined()
  expect(Animal.create).toBeDefined()
})

test('can extend another class', () => {
  // Create an Animal class
  class Animal {
    constructor(name) {
      this.name = name
    }
  }
  // Create a Dog class that extends Animal
  // Add sayName to Dog
  class Dog extends Animal {
    sayName() {
      return `My name is: ${this.name}`
    }
  }

  const dog = new Dog('Fido')

  expect(dog instanceof Dog).toBe(true)
  expect(dog instanceof Animal).toBe(true)
  expect(Animal.prototype.sayName).toBeUndefined()
  expect(Dog.prototype.sayName).toBeDefined()
})

test('can use property setters and getters', () => {
  // Create an Animal class (don't pass name into constructor)
  // Add property setter for name
  // Add property getter for name
  class Animal {
    constructor() {
      this._name = '';
    }
    set name(value) {
        this._name = value 
    }
    get name() {
      return `${this._name} type of animal`
    }
  }
  
  const animal = new Animal()
  animal.name = 'Dog'
  expect(animal.name).toBe('Dog type of animal')
  animal.name = 'Cat'
  expect(animal.name).toBe('Cat type of animal')
})
