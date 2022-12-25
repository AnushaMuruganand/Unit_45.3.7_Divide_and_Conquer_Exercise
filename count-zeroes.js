function countZeroes(arr) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let count = 0;

    while (leftIdx <= rightIdx) {

        // Finding the middle index and middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        // console.log(leftIdx, rightIdx, middleIdx);


        // Checking if middleVal is 1, if so move the leftIdx to the right 1
        if (middleVal === 1) {
            leftIdx = middleIdx + 1;
        }

        // Checking if previous element from the middleIdx in arr is 0, move the rightIdx to the left by 1 from middleIdx
        else if (arr[middleIdx - 1] === 0) {
            rightIdx = middleIdx - 1;
        }
            
        // else return the number of 0's in the arr and also put leftIdx value beyond rightIdx value so that the while loop terminates
        else {
            count = arr.length - middleIdx;
            leftIdx = rightIdx + 1;
        }
    }
    
    return count;

}


// *********** Version of solution

// function countZeroes(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     let firstZero = findFirst(arr);
//     if (firstZero === -1) return 0;
  
//     return arr.length - firstZero;
// }
  
// function findFirst(arr, lowIdx = 0, highIdx = arr.length - 1) {
//     if (highIdx >= lowIdx) {
//         let midIdx = lowIdx + Math.floor((highIdx - lowIdx) / 2);
//         if ((midIdx === 0 || arr[midIdx - 1] === 1) && arr[midIdx] === 0) {
//             return midIdx;
//         } else if (arr[midIdx] === 1) {
//             return findFirst(arr, midIdx + 1, highIdx);
//         }
//         return findFirst(arr, lowIdx, midIdx - 1);
//     }
//     return -1;
// }

module.exports = countZeroes