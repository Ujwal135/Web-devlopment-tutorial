// geter and seater in JS
class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if(value.length < 4) {
      console.log("name is to short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("Joh");
console.log(user.name);

user.name = "Harry"
console.log(user.name)