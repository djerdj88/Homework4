function createFunction() {
    function sayHello(){
        console.log("hello");
    }
    return sayHello;
}

//var function1 = createFunction();
//function1();



function createFunctionPrinter(input) {
    function getInput(){
        console.log(input);
    }

    return getInput;
};

// UNCOMMENT THESE TO TEST YOUR WORK!
//var printSample = createFunctionPrinter('sample');
//printSample();
//var printHello = createFunctionPrinter('hello');
//printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



function addByX(x) {
    function addByNum (num){
        return num + x;
    }
    return addByNum;
}

var addByTwo = addByX(2);
var addByNine = addByX(9);
// now call addByTwo with an input of 1
//console.log(addByTwo(1));
//console.log(addByNine(33));
// now call addByTwo with an input of 2
//console.log(addByTwo(2));


//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
    let counter = 0;
    let result;
    function callback(num){
        counter++;
        if (counter < 2){
            return result = func(num);
        }
        else{
            return result;
        }
    }
    return callback;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
//console.log(onceFunc(4));  //should log 6
//console.log(onceFunc(10));  //should log 6
//console.log(onceFunc(9001));  //should log 6


function after(count, func) {
    let counter = 0;
    function callback(){
        counter++;
        if (counter == count){
            return func();
        }
        else{
            return console.log("Nothing");
        }
    }

    return callback;
}

var called = function() { console.log('hello') };
var afterCalled = after(4, called);

/* afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed
afterCalled(); // -> nothing is printed */


function delay(func, wait) {
    setTimeout(function(){
    func()},wait);
}

var fun = function(){console.log("Hellooo");};
var fun1 = function(){console.log("Hi");};

delay(fun,3000);

delay(fun1,1000);