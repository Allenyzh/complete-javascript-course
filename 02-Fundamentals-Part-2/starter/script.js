"use strict";
/*
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) {
//   console.log(`I can drive :D`);
// }

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (scoreDolphins, scoreKoalas) => {
  console.log(
    scoreDolphins >= 2 * scoreKoalas
      ? `Dolphins win! (${scoreDolphins} vs. ${scoreKoalas})`
      : scoreKoalas >= 2 * scoreDolphins
      ? `Koalas win! (${scoreKoalas} vs. ${scoreDolphins})`
      : `No team wins...`
  );
};

console.log(`Dolphins has an average score of ${scoreDolphins}`);
console.log(`Koalas has an average score of ${scoreKoalas}`);

checkWinner(scoreDolphins, scoreKoalas);


const foo = () => {
  let a = 7;
  return a === "7" ? true : false;
};
console.log(foo());

const allen = [1, 2, 3, 4, 5, 6, 7];
for (let a = 1; a <= 10; a++) {
  console.log(
    allen.indexOf(a) === -1
      ? `The Number ${a} is not in the array`
      : `The Number ${a} is in the array and it is at ${
          allen.indexOf(a) === 1
            ? `1st`
            : allen.indexOf(a) === 2
            ? `2nd`
            : allen.indexOf(a) === 3
            ? `3rd`
            : `${allen.indexOf(a)}th`
        } position.`
  );
}


const calcTip = (billValue) => {
  return billValue >= 50 && billValue <= 300
  ? billValue * 0.15
  : billValue * 0.2;
};
const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((bill, index) => bill + tips[index]);
console.log(calcTip(100), bills, tips, totals);



const allen = {
  名字: "镇颢",
  姓: "杨",
  英文名: "Allen",
  年龄: 2024 - 1995,
  工作: "学生&Uber司机",
  朋友: ["sharon", "hdcola", "lucca"],
};

// let input = prompt(
//   "你想知道关于allen的什么信息?请输入名字,姓,年龄,工作,或朋友"
// );

// while (input) {
//   if (allen[input]) {
//     console.log(allen[input]);
//     break;
//   } else {
//     input = prompt("!!!请输入'名字','姓','年龄','工作',或'朋友'!!!");
//   }
// }

allen.location = "canada";
allen["INS"] = "@allen";
console.log(allen);

console.log(`${allen.英文名} has ${allen.朋友.length} friends, and his best friend is called ${allen.朋友[0]}`);



const allen = {
  名字: "镇颢",
  姓: "杨",
  英文名: "Allen",
  出生年份: 1995,
  工作: "学生&Uber司机",
  朋友: ["sharon", "hdcola", "lucca"],
  有无驾照: false,

  // calcAge: function (出生年份) {
  //   return 2090 - 出生年份;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2090 - this.出生年份;
  // },

  calcAge: function () {
    this.年龄 = 2024 - this.出生年份;
    return this.年龄;
  },

  getSummary: function () {
    return (this.summary = `${this.英文名} is a ${this.年龄}-years old ${
      this.工作
    }, and he has ${this.有无驾照 ? "a" : "no"} driver's license`);
  },
};

// console.log(allen.calcAge());

// console.log(allen.年龄);

allen.calcAge();
allen.getSummary();

console.log(
  `${allen.英文名} is a ${allen.年龄}-years old ${allen.工作}, and he has ${
    allen.有无驾照 ? "a" : "no"
  } driver's license`
);

// console.log(allen.getSummary());
console.log(allen.summary);

const mark = {
  fullName: "Mark Miller",
  mass: "78",
  height: "1.69",
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};
const john = {
  fullName: "John Smith",
  mass: "92",
  height: "1.95",
  calcBMI: function () {
    return (this.bmi = this.mass / (this.height * this.height));
  },
};
mark.calcBMI();
john.calcBMI();
console.log(
  `${
    mark.bmi > john.bmi
      ? `${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)}) is higher than ${john.fullName}'s BMI (${john.calcBMI().toFixed(1)})!`
      : `${john.fullName}'s BMI (${john.calcBMI().toFixed(1)}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)})!`
  }`
);


// for loops keeps runing while the condition is true
for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}`)
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven", { allen: "AY", hdcola: "HD" }],
];
const types = [];

for (let i = 0; i <= jonasArray.length - 1; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2024 - years[i]);
  console.log(ages[i]);
}
console.log("---BREAKE WITH STRING---");
for (let i = 0; i <= jonasArray.length - 1; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("---BREAKE WITH NUMBER---");
for (let i = 0; i <= jonasArray.length - 1; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}


// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven", { allen: "AY", hdcola: "HD" }],
// ];

// for (let i = jonasArray.length - 1; i > -1; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----------Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
//   }
// }
// let rep = 1;
// while (rep <= 10) {
//   console.log(`While: Lifting weights repetition ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
let i = 0;
// console.log(dice);
if (dice === 6) {
  console.log(`You diced a 6!`);
} else {
  while (dice !== 6) {
    dice = Math.trunc(Math.random() * 6) + 1;
    i++;
    console.log(`No.${i} You rolled a ${dice}`);
    console.log(dice === 6 ? `You diced a 6 after ${i} times` : "Next:");
  }
}
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  } else {
    return;
  }

  const ave = sum / arr.length;
  return ave;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  // console.log(calcTip(bills[i]));
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

let averageValue = calcAverage(totals);

console.log(tips);
console.log(totals);
console.log(averageValue);
