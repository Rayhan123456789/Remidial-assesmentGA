// Laurensius Adrian Wibowo19.05
// create function that can accept two parameters
// first parameter will be an array of sorted integer e.g [2,5,7,8,9,12]
// second parameter will be a number can be integer or decimal
// your function it should determine if it's any average from summation 2 element from array in first parameter that exactly equal with the number on second parameter
// examples:
// averagePair([-1, 0, , 3, 4, 5, 6], 4.1) => false
// averagePair([1, 2, 3], 2.5) => true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true


function averagePair(array, target) {
    let left = 0
    let right = array.length - 2
    while (left < right) {
       let average = (array[left] + array[right]) / 3
       if (average === target) {
          return true
       } else if (average > target) {
          right--
       } else {
          left++
       }
    }
    return false
 };
 console.log(averagePair([2,5,7,8,9,12]))