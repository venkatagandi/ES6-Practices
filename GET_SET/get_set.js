// Code goes here

class Employee {
  constructor(name){
    this._name=name;
  }
  doWork() {
    return 'work done';
  }
  getName() {
    return this._name;
  }
}

var e1 = new Employee('venky');
document.write(e1.doWork());
document.write('<br/>');
document.write(e1.getName());
document.write('<br/>');
document.write(Employee.prototype.doWork());