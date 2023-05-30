class Person {
  constructor(
      private name: string,
      private age: number
  ) { }

  public getDetails(): string {
      return (`${this.name} is ${this.age} years old`)
  }

}

class Student extends Person {
  constructor(
      name: string,
      age: number,
      private grade: string
  ) {
      super(name, age)
  }

  public getGrade(): string {
      return `Grade = ${this.grade}`;
  }
}