import promptSync from 'prompt-sync';
const prompt = promptSync();


const array = [];
for (let i = 0; i < 50000; i++) {
    array[i] = (Math.round(Math.random() * 100000));
}
var x = +prompt("enter first number",);
while (x != -999) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == x) break;
    }
    if (i < array.length) {
        console.log(`Found ${x} at ${i}`);
        console.log(`counter is ${counter}`);
    }
    else{
        console.log(`Can't find ${x} in the aaray`);
        console.log(`counter is ${counter}`);
    }


    x = +prompt("enter next number",);

}
// console.log(array);
// const x = prompt('Enter a number to check: ');
// const filter = array.filter(number => number == x);
// console.log(filter);

// let find = array.findIndex(number => number == x);
// console.log(find);

const newArray = array.sort((a, b) => a < b ? -1 : 1);
console.log(newArray);
var y = +prompt("enter next number");
let lower = 0;
let upper = newArray.length;
let found = false;
var counter=0;

while (upper > lower && !found) {
    var index = Math.floor((upper + lower) / 2);
    counter++;
    if (y == newArray[index])
        found = true;
    else if (y > newArray[index])
        lower = index + 1;
    else
        upper = index - 1;
}
if (found) {
    console.log(`${y} Found at ${index}`)
    console.log(`counter is ${counter}`);
}
else {
    console.log(`${y} Not found`);
    console.log(`counter is ${counter}`);
}



// let f=22;


// find index:
// for (let i=0; i<newArray.length; i++) {
//     if (x==newArray[i])
//         break;
//         console.log(i);
// }

// const array = Array(50000)
//     .fill()
//     .map(() => Math.round(50000 * Math.random()));

