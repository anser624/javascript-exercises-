 //////////////////////////////////////////////////////////
 /////////////=============chapter==9-11=========/////////
 ////////////////////////////////////////////////////////
 
 ///////////////========question---1==============//////


    ///1. Write a program to take “city” name as input from user. If 
    //user enters “Karachi”, welcome the user like this: 
    //“Welcome to city of lights”

    // var city = prompt("enter your city name")

    // if(city == "karachi"){
    //     document.write("<h1>welcome to the city of lights</h1>")
    // }
    // if(city == "lahore"){
    //     document.write("<h1>welcome to the city of foods</h1>")
    // }
    // else{
    //     document.write("<h1>i have no info about</h1>" + `<h1>${city}</h1>`)    
    // }

 ///////////////========question---2==============//////

        //2. Write a program to take “gender” as input from user. If the
        // user is male, give the message: Good Morning Sir. If the 
        // user is female, give the message: Good Morning Ma’am.

        // var gender = prompt("male or female enter", "male")

        // if (gender == "male"){
        //     document.write("<h1>Good Morning Sir</h1>"  + " <h1> have a good day</h1>")
        // }
        // if (gender == "female"){
        //     document.write("<h1>Good Morning Mam</h1>"  + " <h1> have a good day</h1>")
        // }

 ///////////////========question---3==============//////

//  var signal = prompt("Enter a signal color","red")

//  if(signal == "red"){
//     document.write(`<h1>${signal}</h1>` + "<h2>Must stop</h2>")
//  }
//  if(signal == "yellow"){
//     document.write(`<h1>${signal}</h1>` + "<h2>Ready to go</h2>")
//  }
//  if(signal == "green"){
//     document.write(`<h1>${signal}</h1>` + "<h2>Go now</h2>")
//  }

 ///////////////========question---4==============//////

//  4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”


// var fuel = +prompt("Enter your fuel in liters")

// if (fuel <= 1.5){
//     document.write("Please Refill The Fuel In Your Car")
// }
// if(fuel >1.5){
//     document.write("no worry u have fuel in your car")
// }


 ///////////////========question---6==============//////

//  6. Write a program to take input the marks obtained in three
//  subjects & total marks. Compute & show the resulting
//  percentage on your page. Take percentage & compute 
//  grade as per following table:



// var totalMarks = +prompt("enter your total marks")
//  var obtainMark = +prompt("enter your obtain marks")

//  var percentage = (obtainMark / totalMarks) * 100 ;

//   document.write("marksheet")

//  if (percentage >= 80){
//         document.write("Total marks" + totalMarks + "<br>")
//         document.write("obtain marks" + obtainMarklMarks + "<br>")
//         document.write("percentage" + percentage + "<br>")
//         document.write("Grade = B "  + "<br>")
//         document.write("Excellent"  + "<br>")
//  }

 ///////////////========question---6==============//////

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var num = prompt("enter a number 1 to 10 \n guess number the correct to see");

// if(num == 8){
//     document.write("*BINGO*" + "<br>" + "<h1>YOU ARE BRILLIANT</h1>")
// }
// if(num < 8){
//     document.write("*NOP*" + "<br>" + "<h1>YOU ARE GOING DOWN</h1>")
// }
// if(num > 8){
//     document.write("*NOP*" + "<br>" + "<h1>YOU ARE GOING UP</h1>")

// }
 ///////////////========question---8==============//////

// var input = +prompt("use any number to know its even or odd")
// input = input % 3;
// if(input === 0 ){
//     document.write("this is divisible by 3")
// }
// else {
//     document.write("this is not divisble by 3")

// }

 ///////////////========question---9==============//////

// var input = +prompt("use any number to know its even or odd")
// input = input % 2;
// if(input === 0 ){
//     document.write("its even number")
// }
// else {
//     document.write("it is odd number")

// }

 ///////////////========question---10==============//////

//  var temp = +prompt("enter tempratue","like 30,40")


//  if(temp >= 40){
//     document.write("<h2>its to hot outside 40</h1>")
//  }
//  else if(temp >= 30){
//     document.write("<h2>the weather today is normal 30</h1>")
//  }
//  else if(temp >= 20){
//     document.write("<h2>today weather is cool 20</h1>")
//  }
//  else if(temp >= 10){
//     document.write("<h2>omg! today weather is so cool 10</h1>")
//  }

 ///////////////========question---11==============//////

//  var input1 = +prompt("Enter your first value");
//  var operatore = prompt("Enter your operator","+ , - , * , / , %");
//  var input2 = +prompt("Enter your sec value");
//  var sum = input1 + input2
//  var sub = input1 - input2
//  var multi = input1 * input2
//  var division = input1 / input2
//  var modulse = input1 % input2


//  if( operatore == "+"){
//     document.write((input1+input2));
//  }
//  else if ( operatore == "-"){
//     document.write((input1-input2))
//  }
//  else if ( operatore == "*"){
//     document.write((input1*input2))
//  }
//  else if ( operatore == "/"){
//     document.write((input1/input2))
//  }
//  else if ( operatore == "%"){
//     document.write((input1%input2))
//  }