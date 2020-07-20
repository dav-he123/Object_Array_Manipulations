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
    for (const [key] of Object.entries(element["composition"])) {
      result[key] = [];
      finalResult[key] = [];
    }
  }

  // console.log(finalResult);

  for (const element of metals) {
    for (const [key, value] of Object.entries(element["composition"])) {
      // console.log(value);
      // console.log(value);
      result[key].push(value);
    }
  }

  // console.log(result);

  for (const [key, values] of Object.entries(result)) {
    // console.log(average(elem));
    // console.log(result[key]);
    // console.log(values);
    result[key] = average(values);
  }

  // console.log(result);

  return result;

  // for (const elem of Object.values(result)) {
  //   // console.log(average(elem));
  //   console.log(elem);
  // }

  // let arr;

  // for (const elem of Object.values(result)) {
  //   arr = elem.reduce((a, b) => a + b, 0) / elem.length;
  //   console.log(arr);
  // }
};

let average = function (elem) {
  let arr =
    elem.reduce((a, b) => {
      return a + b;
    }) / elem.length;
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

// Part 2 - Solving the questions differently

// Question 1: Create a list of all metals in the collection

// `["1084", "1075", "80CrV2", "S30V", "420HC"]`

let listMetals = function (metals) {
  let result = [];

  for (const element of metals) {
    result.push(element.name);
  }
  // console.log(result);
};

listMetals(metals);

// Question 2: Create a list of all metals with their type in the collection

let typeMetals = function (metals) {
  let result = [];

  for (const element of metals) {
    result.push(element.name + " " + element.type);
  }

  // console.log(result);
};

typeMetals(metals);

// Question 3: Create an object containing the metals by type

let metalsByTypeList = function (metals) {
  let result = {};

  for (const element of metals) {
    result[element.type] = [];
  }

  // console.log(result);

  for (const elem of metals) {
    result[elem.type].push(elem.name);
  }
  // console.log(result);
};

metalsByTypeList(metals);

// Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

let metalsListDescending = function (metals) {
  let resultMetals = metals.sort(function (x, y) {
    return y.composition.carbon - x.composition.carbon;
  });

  let result = [];

  // console.log(resultMetals);

  for (const elements of metals) {
    result.push(elements.name);
  }

  // console.log(result);
};

metalsListDescending(metals);

// Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

let metalsListAverage = function (metals) {
  let result = {};

  for (const elements of metals) {
    for (const keys of Object.keys(elements["composition"])) {
      result[keys] = [];
    }
  }

  for (const elements of metals) {
    for (const [keys, values] of Object.entries(elements["composition"])) {
      result[keys].push(values);
    }
  }

  for (const [keys, values] of Object.entries(result)) {
    result[keys] = average(values).toFixed(3);
  }

  // console.log(result);
};

let averageFunc = function (elem) {
  let arr = elem.reduce((a, b) => a + b) / elem.length;
  return arr;
};

metalsListAverage(metals);

// Part 3 - Solving the questions differently

// Question 1: Create a list of all metals in the collection

let listMetalsCollection = function (metals) {
  let result = [];
  metals.forEach((element) => result.push(element.name));

  // console.log(result);
  return result;
};

listMetalsCollection(metals);

// Question 2: Create a list of all metals with their type in the collection

let listMetalsInCollection = function (metals) {
  let result = [];

  metals.forEach((element) => result.push(element.name + " " + element.type));

  // console.log(result);
};

listMetalsInCollection(metals);

// Question 3: Create an object containing the metals by type

let listMetalsByType = function (metals) {
  let result = {};
  metals.forEach((element) => (result[element.type] = []));

  metals.forEach((elem) => result[elem.type].push(elem.name));

  // console.log(result);
};

listMetalsByType(metals);

// Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

let listMetalsSortedBy = function (metals) {
  let resultMetals = metals.sort(function (x, y) {
    return y.composition.carbon - x.composition.carbon;
  });

  let result = [];

  resultMetals.forEach((element) => result.push(element.name));

  // console.log(result);
};

listMetalsSortedBy(metals);

// Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

let listMetalsAverage = function (metals) {
  let result = {};

  for (const elements of metals) {
    for (const keys of Object.keys(elements["composition"])) {
      result[keys] = [];
    }
  }

  for (const elements of metals) {
    for (const [keys, values] of Object.entries(elements["composition"])) {
      result[keys].push(values);
    }
  }

  for (const [keys, values] of Object.entries(result)) {
    result[keys] = averageFuncSecond(values).toFixed(3);
  }

  // console.log(result);
};

let averageFuncSecond = function (elem) {
  let arr = elem.reduce((a, b) => a + b) / elem.length;
  return arr;
};

listMetalsAverage(metals);

// Part 4 - Solving the questions differently

const metalsUpdate = [
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

// Question 1: Create a list of all metals in the collection

let listMetalsSecond = function (metalsUpdate) {
  // console.log(metals);
  let resultAns = [];

  for (const element in metalsUpdate) {
    // console.log(element);
    resultAns.push(metalsUpdate[element].name);
  }
  // console.log(resultAns);

  return resultAns;
};

listMetalsSecond(metalsUpdate);

// Question 2: Create a list of all metals with their type in the collection

let listMetalsForIn = function (metalsUpdate) {
  // console.log(metals);
  let resultAns = [];

  for (const element in metalsUpdate) {
    // console.log(element);
    resultAns.push(
      metalsUpdate[element].name + " " + metalsUpdate[element].type
    );
  }
  // console.log(resultAns);

  return resultAns;
};

listMetalsForIn(metalsUpdate);

// Question 3: Create an object containing the metals by type

let listMetalsByTypeForIn = function (metalsUpdate) {
  // console.log(metals);
  let resultAns = {};

  for (const element in metalsUpdate) {
    // console.log(metalsUpdate[element].type);
    resultAns[metalsUpdate[element].type] = [];
  }

  for (const elem in metalsUpdate) {
    resultAns[metalsUpdate[elem].type].push(metalsUpdate[elem].name);
  }
  console.log(resultAns);

  return resultAns;
};

listMetalsByTypeForIn(metalsUpdate);
