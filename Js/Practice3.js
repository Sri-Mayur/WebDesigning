// Write a JS program to rotate a string Web Designing. This is done by removing one letter from the string and attaching it to front.
//Write a JS program to find out if 1st January will be a Sunday between 2014 and 2050.

for(year=2014; year<2051; year++){
    let date = 1;
    let month = 0;

    var current = new Date(year, month, date);

    if(current.getDay() == 0){
        console.log(current);
    }

}

//Write a JS program to calculate the days left until next Christmas.

let todayDate = new Date();
let Christmas = new Date(2023, 11, 25);

let dayLeft = Math.ceil((Christmas - todayDate) / (1000 * 60 * 60 * 24));

console.log(dayLeft);

//Take the input from the user and calculate the multiplication and division of the 2 numbers.
 /*var first = prompt("Enter the first number: ");
 var second = prompt("Enter the second number: ");

 mul = first * second;
 div = first % second;

 console.log(mul);
 console.log(div);*/

// Write a JS program to findout the area of the triangle where three sides are 5, 6, and 7.

let a = 5;
let b = 6;
let c = 7;

s = (a + b + c)/2;

area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));

console.log(Math.floor(area));

// Write a JS program to find whether the given integer is between 20 and 100.

var integer = 0;

if(integer>=20 && integer<=100){
console.log("True");
}else{
    console.log("False");
}

//Create a new string from the string with the first character of the given string added at the front and back.

var givenString = "ABCDEFG";
var n = givenString.length;
var newString = "";

newString += givenString[0];

for(var i=0; i<n; i++){
    newString += givenString[i];
}

newString += givenString[0];

console.log(newString);