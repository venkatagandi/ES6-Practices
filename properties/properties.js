class Employee{
  constructor(name,color){
    this._name = name;
    this._color = color;
  }

  get name(){
    return this._name.toUpperCase();
  }
  set name(newValue) {
    this._name = "hi " + newValue;
    return newValue;
  }
}

var e1 = new Employee('vicky','brown');

document.write(e1.name);
document.write("<br/>");
e1.name = 'venky';
document.write(e1.name);