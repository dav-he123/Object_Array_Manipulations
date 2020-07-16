const metals = [
  {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "1075",
    type: "Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200,
  },
  {
    name: "80CrV2",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium: 0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100,
  },
  {
    name: "S30V",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium: 0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200,
  },
  {
    name: "420HC",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel: 0.5,
      silicon: 0.6,
      chromium: 0.12,
      manganese: 0.01,
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200,
  },
];

// Part 1 - Solving the problems in your own way

// Question 1: Create a list of all metals in the collection

const allMetals = function (metals) {
  let result = [];

  for (const element of metals) {
    result.push(element.name);
  }

  // console.log(result);

  return result;
};

allMetals(metals);

// Question 2: Create a list of all metals with their type in the collection

const listOfMetals = function (metals) {
  let result = [];

  for (const element of metals) {
    result.push(element.name + " " + element.type);
  }

  // console.log(result);

  return result;
};

listOfMetals(metals);

// Question 3: Create an object containing the metals by type

const metalsByType = function (metals) {
  let result = {};

  for (const element of metals) {
    result[element.type] = [];
  }

  // console.log(result);

  for (const arrElement of metals) {
    result[arrElement["type"]].push(arrElement["name"]);
  }

  // console.log(result);
  return result;
};

metalsByType(metals);

// Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

// ["1084", "80CrV2","1075", "S30V", "420HC"]

let resultMetals = metals.sort(function (x, y) {
  return y.composition.carbon - x.composition.carbon;
});

// let resultMetals = metals.sort((a, b) =>
//   a.composition.carbon < b.composition.carbon
//     ? 1
//     : a.composition.carbon > b.composition.carbon
//     ? -1
//     : 0
// );

// console.log(resultMetals);

const metalsList = function (resultMetals) {
  let result = [];

  for (const element of resultMetals) {
    result.push(element["name"]);
  }

  // console.log(result);

  return result;
};

metalsList(metals);

// ["1084", "80CrV2","1075", "S30V", "420HC"]

// Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

let avgConcentration = function (metals) {
  let result = {};
  let finalResult = {};

  for (const element of metals) {
    // console.log(element["composition"]);
    for (const [key] of Object.entries(element["composition"])) {
      result[key] = [];
    }
  }

  // console.log(result[key]);

  for (const element of metals) {
    for (const [key, value] of Object.entries(element["composition"])) {
      // console.log(value);

      result[key].push(value);
    }
  }

  // console.log(result);

  let arr;

  for (const elem of Object.values(result)) {
    arr = elem.reduce((a, b) => a + b, 0) / elem.length;
    console.log(arr);
  }

  // console.log(arr);
};

let average = function (elem) {
  let arr = elem.reduce((a, b) => a + b, 0) / elem.length;
  return arr;
};

avgConcentration(metals);

// {
//   carbon: 0.004,
//   chrome: 0.4,
//   chromium: 0.12,
//   iron: 98,
//   manganese:0.01,
//   molybdenium: 0.2,
//   nickel:0.5,
//   phosphorus: 0.025,
//   silicon:0.6,
//   sulfur: 0.025,
//   vanadium:0.4,
// }
