const nums = [10, 21, 36, 41 ,67];
// result = [1,3,6,10]

// optimal way
const ans = new Array(nums.length);

ans[0] = nums[0];
for(let i = 1; i< nums.length; i++){
    ans [i] = ans [i-1] + nums [i];
}
console.log(ans);

// const ans = new Array(nums.length).fill(0);

// // Brute Force Solution 

// for (let index = 0; index < nums.length; index++) {
//     for (let j = 0; j <= index; j++) { // 1, 2 ,3
//         ans[index] = ans[index] + nums [j]; // ans[index] = 0  +  nums [j] = 1 => 1, then : ans[index] = 1 +  nums [j]  = 2 => 3  ; ans[index] = 3 + nums [j] = 3 =>
//     }

// }
// console.log(ans);
// //o(n2)

let arr = ["2" ,"3","4"];
let an = arr.shift();
// delete arr[0];
console.log(an);


let s = 0;
var array = [10, 15, 20,30];
array.forEach(function myFunction(element){
    s  = s+ element ;
});
console.log(s);
let p = [];
console.log(p.isEmpty());

