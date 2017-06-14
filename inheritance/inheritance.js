// Code goes here

class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newValue) {
    if (newValue) {
      this._name = newValue;
    }
  }
  doWork() {
    return 'free';
  }

  toString() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this._title = title;
  }
  get title() {
    return this._title;
  }
  doWork() {
    return super.doWork() + "paid";
  }

}


var e1 = new Employee('venky', 'director');
var p1 = new Person("Alex");
document.write(p1.doWork());
document.write(p1.toString());
document.write("<br/>");
document.write(e1.doWork());
document.write("<br/>");
document.write(e1.toString());

let makeEveryOneWork = function(...people){
  var results = [];
  for(var i=0;i<people.length;i++){
    if(people[i].doWork){
   // if(people[i] instanceOf Person){
    results.push(people[i].doWork());
    }
  };
  return results;
}
document.write('<br/>');
document.write(makeEveryOneWork(e1,p1,{}));



