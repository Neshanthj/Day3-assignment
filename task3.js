//How to compare two JSON have the same properties without order?
//a) let obj1 = {name:"person 1", age:5};
//b) let obj2 = {age:5, name:"person 1"};

let obj1 = {name:"person 1", age:5};
let keys1 = Object.keys(obj1).sort();

let obj2 = {age:5, name:"person 1"};
let keys2 = Object.keys(obj2).sort();

if(JSON.stringify(keys1)===JSON.stringify(keys2)){  // compare two JSON have same properties
    console.log("compares are the same");
}else{
        console.log("compares are not the same");
    }



