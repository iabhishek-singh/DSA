// TWO WAY TO DECLEAR ARRAY     M - 1
const arr = ["fruits", 1, 4, [2, 3]];

let a = new Array("fruits", 1, 4, [2, 3]);

console.log(arr);
console.log(a);
console.log(a[3][0]);


// MODIFYING IN ARRAY   M - 2

arr[1] = 5;
console.log(arr);

// push
arr.push(7);
console.log("push",arr);
// unshift
arr.unshift(0);
console.log("unshift",arr);

// pop
arr.pop();
console.log("pop",arr);

// sift
arr.shift();
console.log("sift",arr);

// adding

arr[7] = "mangoes";
console.log("adding",arr);
console.log("adding",arr.length);


const st = ["1", 2, "Three"];
console.log(typeof (st[0]));

var c = "5",
    c2 = 2,
    csu = c % c2
console.log(csu);
// However, note that if you use the + operator with a string, JavaScript might treat it as a concatenation rather than addition:


// Iterating through Array  
console.log("Iterating through Array using for loop\n"); 

//for loop
let number = [1,2,3,4,5,6];
for (let index = 0; index < number.length; index++) {
   console.log(number[index]);   
}

// forEach
console.log("Iterating through Array using forEach loop\n"); 
number.forEach(num => console.log(num));

number.forEach(number => console.log(number));




