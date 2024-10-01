// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const xascsa = '23';
if (x === 23) console.log(23);

console.log(xascsa);
console.log();
*/

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] != 'number') continue;

    if (temps[i] > max) {
      max = temps[i];
    }

    if (temps[i] < min) {
      min = temps[i];
    }
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 4, 5, 23, 1], [9, 0, -45, 5]);
console.log(amplitudeNew);
