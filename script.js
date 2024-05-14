let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]);
fruits.push("Grapes");
console.log(fruits);
console.log(fruits[2]);
fruits.pop();

let person = {
    firstName:"John",
    lastName: "Doe",
    age:30,
    hobbies:["Reading", "Travelling"],
    address:{
        street:"123 Main St",
        city: "Anytown",
        country:"USA"
    }
};

console.log(person.firstName);
console.log(person.address.city);

person.age = 31;
person.hobbies.push("Cooking");

console.log(person.hobbies);

for (let i = 0; i < 5; i++) {
    console.log(i);
}


for (let i = fruits.length; i >= 0; i--){
    console.log(fruits[i]);
}


let x = 8;
if (x>5) {
   let h = "hello"
    console.log(h)
} else {
    console.log("bye")
}

let age = 19

if (age >= 18) {
    if (age < 21) {
        console.log("You are an adult but not yet allowed to drink.");
    } else {
        console.log("You are an adult and allowed to drink.");
    }
} else {
    console.log("You are a minor.")
}