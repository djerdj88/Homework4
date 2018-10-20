// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
//console.log(addTwo(3));
//console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
//console.log(addS('pizza'));
//console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++){
    newArr.push(callback(array[i]));
  }

  return newArr;
}

function multiplyByTwo(num){
  return num * 2;
}

//console.log(map([1, 2, 3], addTwo));
//console.log(map([1,2,3,4,5], multiplyByTwo));

// Challenge 4
function forEach(array, callback) {
    for (let i = 0;i < array.length; i++){
        callback(array[i]);
    }
}


var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
  alphabet += char;
})
//console.log(alphabet)


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  const newArr = [];
  forEach(array, function(el){
    newArr.push(callback(el));
  })

  return newArr;
}

//console.log(map([1, 2, 3], addTwo));
//console.log(map([1,2,3,4,5], multiplyByTwo));

//Extension 2
function reduce(array, callback, initialValue) {
  let sum = initialValue;
  if (initialValue === undefined){
    sum = 0;
  }
  else{
    forEach(array, function(el){
      sum = callback(sum,el);
    });
  }
  return sum;
}

var nums = [4, 1, 3, 9];
var add = function(a, b) { return a + b; }
//console.log(reduce(nums, add, 0));

//Extension 3 with Reduce
function intersection(arrays) {
  return arrays.reduce(function(array, nextArray){
    let newArr = [];
    forEach(array,function(el){
      if(nextArray.includes(el)){
        newArr.push(el);
        //console.log(array,nextArray,newArr);
      //console.log("-----------------------------------------------------------");
      }
    });
    return newArr;
  }, arrays[0]);
}


//console.log(intersection([5, 10, 15, 20, 7], [15, 88, 5], [1, 10,, 15, 20, 5]));
// should log: [5, 15]

//Extension 3 without Reduce
function intersection(...arrays) {
    let newArr = arrays[0];
  for (let i = 1; i < arrays.length; i++){
    for (let j = 0; j< newArr.length; j++){
        if (!arrays[i].includes(newArr[j])){
          newArr.splice(newArr.indexOf(newArr[j]),1);
        }
    }
  }
    return newArr;
}

//console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 20], [1, 5, 10, 15, 20]));
// should log: [5, 15]

//Extension 4 with Reduce
 function union(arrays) {
  return arrays.reduce(function(arr, nextArr){
    let newArr = arr;
    forEach(nextArr,function(el){
      if (arr.includes(el) === false){
        newArr.push(el);
      }
    });
    return newArr;
  }, []);
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 7, 3, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100] 


//Extension 4 without Reduce
function union(...arrays) {
    let newArr = arrays[0];
    for (let i = 1; i < arrays.length; i++){
      for (let j = 0; j< arrays[i].length; j++){
          if (!newArr.includes(arrays[i][j])){
            newArr.push(arrays[i][j]);
          }
      }
    }
    return newArr;
}

//console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100] 

//Extension 5
function objOfMatches(array1, array2, callback) {
    const obj = {};
    for (let i = 0; i < array1.length; i++){
      if (callback(array1[i]) === array2[i]){
        obj[array1[i]] = array2[i];
      }
    }
    return obj;
}

//console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  for (let i = 0; i < arrVals.length; i++){
    obj[arrVals[i]] = [];
    for (let j = 0; j < arrCallbacks.length; j++){
      (obj[arrVals[i]])[j] = arrCallbacks[j](arrVals[i]);
    }
  }
  return obj;
}

//console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

