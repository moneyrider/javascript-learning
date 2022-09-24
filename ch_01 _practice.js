// q1   create a variable  type string and add a number to it?

let a = "harry";
let b = 2;
console.log(a+b);

// q2  use typeof operator to find datatype in last question?
console.log(typeof (a+b)); 

// q3  create a const object in js can you chng it to num later?
const c = {
    name : "keshav",
    age : 22
}
console.log(c);
// c= 45; ans is no it give error

// q4 try to add a new key in const object will you able to do it in problem 3?
c["friend"] = "manav";
console.log(c);

//q5  write a dict of 5 words in js program using object datatype?
const  dict ={
    great: "good",
    happy: "cherish",
    unhappy:"sad",
    yakka: "hardwork",
    essential:"important"
}
// console.log(dict.yakka); or
console.log(dict["happy"]); 

// q6 write a name ,phoneno , and marks for student object?
const student = {
    name:"manav",
    phoneno: 8976543212,
    marks: 45

}
console.log(student);

