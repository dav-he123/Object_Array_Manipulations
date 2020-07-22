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
  let objComp;
  let arrFirst = [];

  metals.forEach(function (elem) {
    objComp = elem.composition;
    // console.log(objComp);
    arrFirst.push(objComp);
  });

  // console.log(arrFirst);

  arrFirst.forEach(function (elem) {
    // console.log(elem.iron);
  });

  // console.log(result);

  // for (const elements of metals) {
  //   for (const keys of Object.keys(elements["composition"])) {
  //     result[keys] = [];
  //   }
  // }

  // for (const elements of metals) {
  //   for (const [keys, values] of Object.entries(elements["composition"])) {
  //     result[keys].push(values);
  //   }
  // }

  // for (const [keys, values] of Object.entries(result)) {
  //   result[keys] = averageFuncSecond(values).toFixed(3);
  // }

  // console.log(result);
};

// let averageFuncSecond = function (elem) {
//   let arr = elem.reduce((a, b) => a + b) / elem.length;
//   return arr;
// };

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
    resultAns[metalsUpdate[element].type] = [];
  }
  // console.log(resultAns);

  for (const elem in metalsUpdate) {
    resultAns[metalsUpdate[elem].type].push(metalsUpdate[elem].name);
  }

  // console.log(resultAns);

  return resultAns;
};

listMetalsByTypeForIn(metalsUpdate);

// Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

let listMetalsSortedForIn = function (metalsUpdate) {
  let resultAns = metalsUpdate.sort((a, b) =>
    a.composition.carbon < b.composition.carbon
      ? 1
      : b.composition.carbon < a.composition.carbon
      ? -1
      : 0
  );

  // console.log(resultAns);

  let result = [];

  for (const element in resultAns) {
    result.push(resultAns[element].name);
  }
  // console.log(result);
  return result;
};

listMetalsSortedForIn(metalsUpdate);

// Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

let listMetalsAverageForIn = function (metalsUpdate) {
  let result = {};

  for (const elements in metalsUpdate) {
    // console.log(metalsUpdate[elements]);
    for (const elem in metalsUpdate[elements].composition) {
      // console.log(elem);
      result[elem] = [];
    }
  }

  // console.log(result);

  for (const elements in metalsUpdate) {
    // console.log(metalsUpdate[elements]);
    for (const elems in metalsUpdate[elements].composition) {
      // console.log(elems);
      // console.log(metalsUpdate[elements].composition.elems);
      result[elems].push(metalsUpdate[elements].composition[elems]);
    }
  }

  // console.log(result);

  for (const elem in result) {
    // console.log(result[elem]);
    result[elem] = averageFuncForIn(result[elem]).toFixed(3);
  }

  // console.log(result);

  return result;
};

let averageFuncForIn = function (elem) {
  let arr = elem.reduce((a, b) => a + b) / elem.length;
  return arr;
};

listMetalsAverageForIn(metalsUpdate);

// Part 5 - Solving the questions differently

const metalsLast = [
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

const allMetalsLast = function (metalsLast) {
  let result = [];
  let values;

  let finalResult = metalsLast.map(function (x) {
    values = x.name;
    return values;
  });

  // console.log(finalResult);

  return finalResult;
};

allMetalsLast(metalsLast);

// Question 2: Create a list of all metals with their type in the collection

const allMetalsTypeLast = function (metalsLast) {
  let finalResult = metalsLast.map(function (x) {
    return x.name + " " + x.type;
  });

  // console.log(finalResult);

  return finalResult;
};

allMetalsTypeLast(metalsLast);

// Question 3: Create an object containing the metals by type

const metalsByTypeObject = function (metalsLast) {
  let result = {};

  metalsLast.map(function (x) {
    result[x.type] = [];
  });

  // console.log(result);

  metalsLast.map(function (x) {
    result[x.type].push(x.name);
  });

  // console.log(result);
  return result;
};

metalsByTypeObject(metalsLast);

// Question 4: Create a list of all metals sorted by their carbon concentration (in descending order)

let resultMetalsLast = metals.filter((element, index) => {
  return (
    index === 0 ||
    element.composition.carbon !== metals[index - 1].composition.carbon
  );
});

let metalsListSortedLast = function (resultMetalsLast) {
  let finalResult = resultMetalsLast.map(function (x) {
    return x.name;
  });

  // console.log(finalResult);

  return finalResult;
};

metalsListSortedLast(resultMetalsLast);

// Question 5: Create a list of every element used in the composition of the metals, and store their average concentration

let metalsListAverageLast = function (metalsLast) {
  let result = {};
  let arr;

  metalsLast.map(function (x) {
    Object.keys(x.composition).map(function (y) {
      // console.log(x.composition);
      // console.log(y);
      result[y] = [];
    });
  });

  metalsLast.map(function (z) {
    Object.entries(z.composition).map(function ([key, value]) {
      // console.log(key);
      // console.log(value);
      result[key].push(value);
    });
  });

  // console.log(result);

  let avg = function (elem) {
    let arr = elem.reduce((a, b) => a + b) / elem.length;
    return arr;
  };

  metalsLast.map((z) =>
    Object.keys(z.composition).map(function (a) {
      result[a].push(avg(result[a]));
    })
  );

  console.log(result);
  return result;
};

metalsListAverageLast(metalsLast);

// Part 6

// Question 1: In the first question, what would be more appropriate between a for..of, a forEach and map ?

// The map method would be the most appropriate because metals is an array of objects and to inspect each element
// in the array, the map method is able to iterate over the array items simply using a callback to return the array
// with the same number of elements in it already and allows you to decide what the structure of the items is.

// Question 2: In the second question, what would be more appropriate between a for..of, a forEach and map ?

// The map method would be the most appropriate because metals is an array of objects and to inspect each element
// in the array, the map method is able to iterate over the array items simply using a callback to return the array
// with the same number of elements in it already and allows you to decide what the structure of the items is.

// Question 3: In the third question, what would be more appropriate between a for..of, a forEach and map ?

// The for..of loop is the most appropriate because it can easily iterate over all the elements of an array, in this
// case it iterates over the metals array of objects to obtain the values of name and then makes the values in the
// empty object an empty array, to push in the specified names. The for..of loop is the most efficient to loop over
// array of objects.

// Question 4: In the fourth question, after sorting, what would be more appropriate between a for..of, a forEach and map ?
// The map method is the most appropriate because it creates a new array with elements inserted as the map function allows
// functions to be invoked within the method itself.

// Question 5: In the fifth question, what would be more appropriate between a for..of, a forEach and map ?
// The for..of loop is the most appropriate because it iterates of over the objects (elements) in the metals array as
// Object.keys, Object.values, and Object.entries can be use to extract key and values of the objects, as well it
// invokes iteraration hooks with staments that can be executed to find the average of the array such as in this
// question.
