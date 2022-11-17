function getUserAge () { return this.age }; const myAwesomeObject = { name : "Bill", age: 55, getAge: getUserAge };
console.log(myAwesomeObject.getAge());