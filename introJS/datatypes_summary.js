//PRIMITIVE DATA-TYPES
// CALL BY VALUE. STORED SINGLE VALUES
// TYPES:- STRING, NUMBER, BOOLEAN, NULL ,UNDEFINED, SYMBOL, BIGINT

//STRING
const subjectname ="math"
//number
const score = 100
//boolean
const IsLoggedIn = false
//null
const outsidetemp =null// object
//undefined
 let username
//symbol
const id = Symbol("2003")
const secondId = Symbol("2003")
console.log(id === secondId);
//bigint
const bigNumber = 28784683787645646n


//NON-PRIMITIVE DATA-TYPES
//CALL BY REFERENCE. STORED MUTLIPLE VALUE
//TYPES:- ARRAY, OBJECT, FUNCTION

//array
const anime =["jjk","demonslayer","one peice","naturo","AOT"];

//object
let student= {
    name: "manisha",
    age: 20
};

//function
function add(a,b) {
    return a+b;
}

//datatype pata karne ke liye
console.log(typeof score);
console.log(typeof null);
console.log(typeof username);
console.log(typeof bigNumber);

console.log(typeof add);
console.log(typeof student);



