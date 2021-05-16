const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500)

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}

/////////////////////////////////////////////

function foo(b) {
    let a = 10
    return a + b + 11
  }
  
  function bar(x) {
    let y = 3
    return foo(x * y)
  }
  
  console.log(bar(7)) //returns 42


  ////////////////////////////////////

  (function() {

    console.log('this is the start');
  
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0
  
    console.log('this is just a message');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 0);
  
    console.log('this is the end');
  
  })();
  
  // "this is the start"
  // "this is just a message"
  // "this is the end"
  // "Callback 1: this is a msg from call back"
  // "Callback 2: this is a msg from call back"



  ///////////////////////////////////

 // 'use strict';

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);




/////////////////////////////////////////////////////////////////////////////////////////////////////////


var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//OR

var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}


////////////////////////


<button onclick="myFunction1()">Sort Alphabetically</button>
<button onclick="myFunction2()">Sort Numerically</button>

<p id="demo"></p>

<script>
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}

function myFunction2() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}
</script>


//sort array randomly
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});


var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
}



/////////////
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value + "<br>";
}

////
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}

var cars = ['BMW', 'Volvo', 'Mini'];
var x;

for (x of cars) {
  document.write(x + "<br >");
}

while (i < 10) {
    text += "The number is " + i;
    i++;
  }





  //errors
//   <!DOCTYPE html>
// <html>
// <body>

// <p>Please input a number between 5 and 10:</p>

// <input id="demo" type="text">
// <button type="button" onclick="myFunction()">Test Input</button>
// <p id="p01"></p>

// <script>
function myFunction() {
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
{/* </script>

</body>
</html> */}

// class
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return "I have a " + this.carname;
    }
  }
  
  mycar = new Car("Ford");
  document.getElementById("demo").innerHTML = mycar.present();