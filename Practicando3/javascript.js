function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  const john = new Person("John", "Smith");
  const mario = new Person("Mario", "Rossi");
  
  john.greets = function () {
    return `Hello ${this.name} ${this.surname}!`;
  };
  
  
  Person.prototype.greets = function () {
    return `Hello I'am ${this.name} ${this.surname}!`;
  };
  
  mario.greets()
  
