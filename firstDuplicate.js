/**
 * Given an array a that contains only numbers in the range from 1 to a.length, 
 * find the first duplicate number for which the second occurrence has the minimal index. 
 * In other words, if there are more than 1 duplicated numbers, 
 * return the number for which the second occurrence has a smaller index 
 * than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be solution(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.
 * 
 * 
 * 
 */

// function solution(numbers) {
//   const numbersSet = new Set(numbers);
//   const duplicateNumber = {};
//   if (numbers.length === numbersSet.size) {
//     return -1;
//   }

//   numbersSet.forEach((number) => {
//     numbers.forEach((num, index) => {
//       if (num === number && duplicateNumber[number]) {
//         duplicateNumber[number] = {
//           index: index,
//           duplicate: duplicateNumber[number].duplicate + 1,
//         };
//       }

//       if (num === number && !duplicateNumber[number]) {
//         duplicateNumber[number] = {
//           index: index,
//           duplicate: 1,
//         };
//       }
//     });
//   });

//   let indexAux = Infinity;
//   let numberMinimal = -1;
//   for (const key in duplicateNumber) {
//     const number = duplicateNumber[key];
//     if (number.duplicate > 1 && indexAux > number.index) {
//       indexAux = number.index;
//       numberMinimal = key;
//     }
//   }

//   return numberMinimal;
// }

function solution(arr) {
  var dictionary = {};

  for (var i = 0; i < arr.length; i++) {
    console.log(dictionary);
    if (dictionary[arr[i]] !== undefined) {
      console.log(dictionary[arr[i]]);
      return arr[i];
    } else {
      dictionary[arr[i]] = i;
    }
  }

  return -1;
}

const result1 = solution([2, 4, 3, 5, 1]);
console.log(result1);

const result2 = solution([2, 1, 3, 5, 3, 2]);
console.log(result2);

const result3 = solution([1, 1, 2, 2, 1]);
console.log(result3);
