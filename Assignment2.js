//Question no 1
// var character = prompt("Enter any character");
// if (character.charCodeAt>=65 && character.charCodeAt<=90) {
// document.write("Character is a capital letter");

// }

//Question no 2
var a = prompt("Enter your number");

if (a>10) {

    document.write("A is greater");
 
}
 if(a<=10) {
    document.write("A is smaller<br>");

}

 //Question no 3
var randomNumber = prompt("Enter Random number");
if(randomNumber<0){
    document.write("Your number is negative");
} if(randomNumber>0){
    document.write("Your number is positive<br><br>");

}


//Question no 4
function vowelChecker (char) {
  
    if (char === 'a'||'e'||'i'||'o'||'u') {
        return "The character is a Vowel";
    }
    else {
    return "The character is a Consonant";
    }
}
  
console.log (vowelChecker ("e"));

//Question no 5
var correctPassword = "123xyz";
var userPassword = prompt("Enter your Password");
if( userPassword == correctPassword){

    document.write("Correct! The password you entered matches the original password");

}
if (userPassword !== correctPassword) {
        document.write("Incorrect password  " + userPassword +"<br>");
}

//Question no 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else if ( hour > 18) {
greeting = "Good evening";
}

// Question no 7

var usertime = prompt("Enter time");
if(usertime>=0000 && usertime < 1200){
    document.write("Good Morning")

}
var usertime = prompt("Enter time");
if(usertime>=1200 && usertime < 1700){
    document.write("Good Afternoon")

}
var usertime = prompt("Enter time");
if(usertime>=1700 && usertime < 2100){
    document.write("Good Evening")

}
var usertime = prompt("Enter time");
if(usertime>=2100 && usertime < 2359){
    document.write("Good Night")

}






