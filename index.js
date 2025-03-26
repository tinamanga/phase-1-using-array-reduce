const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const products = [
    { name: "Shampoo", price: 4.99 },
    { name: "Donuts", price: 7.99 },
    { name: "Cookies", price: 6.49 },
    { name: "Bath Gel", price: 13.99 },
  ];
  
  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price;
    }
  
    return totalPrice;
  }
  
  console.log(getTotalAmountForProducts(products)); // 33.46
  
  function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
      accum = reducer(accum, element);
    }
    return accum;
  }
  
  function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
  }
  
  const couponLocations = [
    { room: "Living room", amount: 5 },
    { room: "Kitchen", amount: 2 },
    { room: "Bathroom", amount: 1 },
    { room: "Master bedroom", amount: 7 },
  ];
  
  console.log(ourReduce(couponLocations, couponCounter, 0)); // 15
  
  console.log(couponLocations.reduce(couponCounter, 0)); // 15

  const doubledAndSummed = [1, 2, 3].reduce(function (accumulator, element) {
    return element * 2 + accumulator;
  }, 0);
  
  console.log(doubledAndSummed); // 12
  
  const letters = ["a", "b", "c", "b", "a", "a"];

const lettersCount = letters.reduce(function (countObj, currentLetter) {
  if (currentLetter in countObj) {
    countObj[currentLetter]++;
  } else {
    countObj[currentLetter] = 1;
  }
  return countObj;
}, {});

console.log(lettersCount); // { a: 3, b: 2, c: 1 }

const artsShowcases = {
    Dance: [],
    Visual: [],
    Music: [],
    Theater: [],
    Writing: [],
  };
  
  const studentSorter = {
    showcaseAssign: function (student) {
      // Placeholder for an actual function that returns the showcase type based on the student's name
      const showcaseMap = {
        "Alice": "Dance",
        "Bob": "Music",
        "Charlie": "Visual",
        "David": "Writing",
        "Eve": "Theater"
      };
      return showcaseMap[student];
    }
  };
  
  const incomingStudents = ["Alice", "Bob", "Charlie", "David", "Eve"];
  
  const groupedStudents = incomingStudents.reduce(function (showcases, student) {
    const showcase = studentSorter.showcaseAssign(student);
    showcases[showcase].push(student);
    return showcases;
  }, artsShowcases);
  
  console.log(groupedStudents);
  
  

const totalBatteries = batteryBatches.reduce(function (accum, batch) {
  return accum + batch;
}, 0);

console.log(totalBatteries); // Total count of batteries
