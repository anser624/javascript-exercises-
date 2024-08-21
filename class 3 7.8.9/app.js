// // ==================// Assignment #6-9====================
// // =================// JAVASCRIPT===========================
// // ================// MATH EXPRESSIONS ===========================
// // ================// Start ===========================

// Question:====01

// var a = 20;
// a = ++a;
// document.write("The value of ++a is :" + a + "<br>")
// document.write("Now the value of a is :" + a + "<br><br>")


// document.write("The value of a++ is :" + a + "<br>")
// a++;
// document.write("Now the value of a is :" + a + "<br><br>")

// --a;
// document.write("The value of --a is :" + a + "<br>")
// document.write("Now the value of a is :" + a + "<br><br>")

// document.write("The value of a-- is :" + a + "<br>")
// a--;
// document.write("Now the value of a is :" + a + "<br><br>")


// Question:02

// var userName = prompt("Enter Your Name")
// alert("Assalamualaikum")

// Question:03


// var tableOf = prompt("Table of") ;


// document.write("<h1>"+"Table of ", tableOf +"</h1>" + "<br><br>")
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*1) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*2) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*3) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*4) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*5) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*6) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*7) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*8) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*9) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*10) + "<br></br>" )


// Question:04

// a) Take three subjects' names from the user
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// b) Total marks for each subject is 100
// var totalMarks = 100;

// c) Take obtained marks for each subject from the user
// var marks1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
// var marks2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
// var marks3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));

// d) Calculate total obtained marks and percentage
// var totalObtained = marks1 + marks2 + marks3;
// var totalMaxMarks = totalMarks * 3;
// var percentage = (totalObtained / totalMaxMarks) * 100;

// e) Show the result in the browser using a table
// document.write(`
//     <h2>Student Marks Report</h2>
//     <table border="1" cellspacing="0" cellpadding="10">
//         <thead>
//             <tr>
//                 <th>Subject</th>
//                 <th>Total Marks</th>
//                 <th>Obtained Marks</th>
//                 <th>Percentage</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>${subject1}</td>
//                 <td>${totalMarks}</td>
//                 <td>${marks1}</td>
//                 <td>${((marks1 / totalMarks) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subject2}</td>
//                 <td>${totalMarks}</td>
//                 <td>${marks2}</td>
//                 <td>${((marks2 / totalMarks) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td>${subject3}</td>
//                 <td>${totalMarks}</td>
//                 <td>${marks3}</td>
//                 <td>${((marks3 / totalMarks) * 100).toFixed(2)}%</td>
//             </tr>
//             <tr>
//                 <td><strong>Total</strong></td>
//                 <td><strong>${totalMaxMarks}</strong></td>
//                 <td><strong>${totalObtained}</strong></td>
//                 <td><strong>${percentage.toFixed(2)}%</strong></td>
//             </tr>
//         </tbody>
//     </table>
// `);



// // ==================// Assignment # 6-9====================
// // =================// JAVASCRIPT===========================
// // ================// End===========================