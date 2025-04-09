//js-practice-examples

//01-numbers-1-to-10.js
for (let i=1; i<=10; i++){
    console.log(i);
}

// 02-sum-1-to-10.js
let sum=0;
for (let i=1; i<=10; i++){
    sum+=i;
}
console.log("ჯამი:", sum);

//03-print-array-elements.js
let numbers =[1,2,3,4,5,6];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//04-countdown-10-to-1.js
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//05-reverse-string.js
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));

//06-reverse-array.js
let numBers = [1, 2, 3, 4, 5];
let reversedNum = [];

for (let i = numBers.length - 1; i >= 0; i--) {
    reversedNum.push(numBers[i]);
}
console.log(reversedNum);

//07-even-or-odd.js
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " არის ლუწი");
    } else {
        console.log(i + " არის კენტი");
    }
}
