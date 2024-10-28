/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const julia0 = [3, 5, 2, 12, 7];
// const kate0 = [4, 1, 15, 8, 3];

// const julia1 = [9, 16, 6, 8, 3];
// const kate1 = [10, 5, 6, 1, 4];

// // const julia

// const checkDogs = function (array) {
//   let copied = Array.from(array);
//   //   console.log(copied);
//   copied = copied.slice(1, -2);
//   //   console.log(copied);
//   copied.forEach((e, i) =>
//     console.log(
//       e < 3
//         ? `Dog number ${i + 1} is still a puppy 🐶`
//         : `Dog number ${i + 1} is an adult, and is ${e} years old`
//     )
//   );
//   return copied;
// };

// console.log(`Julis's data: ${checkDogs(julia0)}`);
// console.log(`Kate's data: ${checkDogs(kate0)}`);

// console.log(`Julis's data: ${checkDogs(julia1)}`);
// console.log(`Kate's data: ${checkDogs(kate1)}`);

// const julia1 = [1, 2, 3, 4];

// // const newJulia = julia1.map(e => e + 1);

// // const array1 = julia1.filter(e => e > 2);
// const inirialValue = 0;
// const reducedJulia = julia1.reduce(function (acc, cur, i, a) {
//  acc= acc + cur;
//   console.log(acc);
// });

// // console.log(newJulia);
// // console.log(array1);
// console.log(reducedJulia);

const julia1 = [5, 2,6, 3, 9, 4];
const initialValue = 0;

const reducedJulia = julia1.reduce(function (acc, cur, i, a) {
  console.log(
    `Step ${i + 1}: acc = ${acc}, cur = ${cur}, index = ${i}, array = [${a}]`
  );
  return acc > cur ? acc : cur;
  // return acc;
}, initialValue);
console.log(reducedJulia);
