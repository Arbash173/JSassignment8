// |||||||||||||||||||||||||||||||||||||||||||| MATH METHODS (Ch # 26 - 30) |||||||||||||||||||||||||||||||||||||||||||||

// ***************************************** Question # 01 *****************************************

// var user = +prompt("Enter a positive integer: \n(Example: 3.14238 , 1.98763 etc)");
// var round = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);
// document.write("Number: " + user + "<br/> Round off value: " + round + "<br/> Floor value: " + floor + "<br/> Ceil value: " + ceil);

// ***************************************** Question # 02 *****************************************

// var user = +prompt("Enter a negative floating point number: \n(Example: -3.14238 , -1.98763 etc)");
// var round = Math.round(user);
// var floor = Math.floor(user);
// var ceil = Math.ceil(user);
// document.write("Number: " + user + "<br/> Round off value: " + round + "<br/> Floor value: " + floor + "<br/> Ceil value: " + ceil);

// ***************************************** Question # 03 *****************************************

// var user = +prompt("Enter a number: ");
// document.write("The absolute value of " + user + " is " + Math.abs(user));

// ***************************************** Question # 04 *****************************************

// var user = +prompt("How many times you want to roll dice?");
// for(var i=0; i<user; i++){
//     var dice = Math.random();
//     dice = dice * 6;
//     document.write("Random dice value: " + Math.ceil(dice) + "<br/>");
// }

// ***************************************** Question # 05 *****************************************

// var user = +prompt("How many times you want to toss coin?");
// for(var i=0; i<user; i++){
//     var coin = Math.random();
//     coin = coin * 2;
//     coin = Math.ceil(coin);
// if(coin === 1){
//     toss = "Tails";
// }else{
//     toss = "Heads";
// }   
//     document.write(coin + "<br/>Random coin value: " + toss + "<br/> <br/>");
// }

// ***************************************** Question # 06 *****************************************

// var num = Math.random();
// document.write("Random number between 1 & 100: " + Math.ceil(num * 100));

// ***************************************** Question # 07 *****************************************

// var user = prompt("Enter your weight in kilograms:");
// if(user.indexOf('.')){  
//     document.write("The weight of user is " + parseFloat(user) + " kilogram")
// }else{
//     document.write("The weight of user is " + parseInt(user) + " kilogram")
// }

// ***************************************** Question # 08 *****************************************

// var user = +prompt("Enter a number between 1 to 10: ")
// var num = Math.random();
// num = Math.ceil(num * 10);
// if(user === num){
//     alert("Congratulations!");
// }else{
//     alert("Try Again.");
// }