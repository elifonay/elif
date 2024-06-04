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

let jj = document.getElementById('elif');

jj.addEventListener('click', function(event) {
    console.log('Button clicked!', event);
});

function countRabbits() {
    for(let i=1; i<=3; i++){
        alert("Rabbit number " + i);
    }
    }


    const menu = document.getElementById('menu');

    const circle = document.getElementById('circle');
    




document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    circle.style.left = `${e.pageX - width/2}px`;
    circle.style.top=` ${e.pageY - height/2}px`;

 });