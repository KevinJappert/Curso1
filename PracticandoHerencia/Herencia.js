class Person {
    constructor(name, surname) {
      this.name = name
      this.surname = surname;
      this.age = null;
    }
  }
  
  const person = new Person("Maria", "Perez");
  
  class Programmer extends Person {
    constructor(language, name, lastname) {
      super(name, lastname)
      this.language = language;
    }
  }
  
  const programmer = new Programmer("python", "mcmillan", "joe")

  console.log(programmer)
  console.log(person)
  
  