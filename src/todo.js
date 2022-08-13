class Todo {
  name;
  active;

  constructor(name, active = true) {
    this.name = name;
    this.active = active;
  }
}

module.exports = Todo;
