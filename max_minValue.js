const a = [3, 6, 7, 1, 2];

let max = a[0],
    min = a[0];

for (let index = 0; index < a.length; index++) {
    if (a[index] > max) {
        max = a[index];
    }
    if (a[index] < min) {
        min = a[index];
    };

}

console.log("Maximum value ", max);
console.log("Miniumm value", min);

/**
 * Time Complexity - O(n);
 * Space Complexity - O(1);
 */



// Concatenate given Array twice M - 3 > T - 2

let arr1 = [1, 2, 3];
let len = arr1.length;
for (let index = 0; index < len; index++) {
    arr1[len + index] = arr1[index];
}

for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
}

/**
 * Time Complexity = O(n) (First loop) + O(n) (Secons loop) = O(n);
 * Space Complexity - O(n);
*/


// Leetcode Concatenate Problem M - 3 > T - 2

