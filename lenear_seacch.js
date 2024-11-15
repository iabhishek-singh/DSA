const  tragate = 78;
const arr = [4 ,6,7 ,78 ,90 ,43 ,1];

let length  = arr.length;

const result =linearSeatch(arr , tragate);

function linearSeatch(arr , tragate) {
    for (let i = 0; i<length ; i++){
        if (arr[i] === tragate){
            return `Element Found at index ${i}`;
            break;
        }
    }
    return "Element Not Found";
}
console.log("Result:- " ,result);


/**
 * Time complecity
 * Best case = O(1)
 * Average case O(n/2) = O(n)
 * Worst case  = O(n)
 */