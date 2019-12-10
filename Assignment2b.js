// Question no 1

var city = "karachi";
var a = prompt("Enter your city name");
if(city = a){

    document.write("Welcome to Karachi <br>");

}

//Question no 2
var genderA = "male";
var genderB = "female";
var b = prompt("Enter you Gender");
if( genderA = b){
  document.write("Good Morning Sir!");
}
else if( genderB = b){
    document.write("Good Morning Ma'am <br><br>");
  }

//Question no 3
 var red = "Must Stop"; 
 var green = "Move now";
 var yellow = "ready to move" ;
 var c = prompt("Enter the color of road traffic signal");
if (c == red ){
    document.write(red);

}
else if (c == green){
    document.write(green);

}
if (c = yellow ){
    document.write(yellow);

}
 //Question no 4
 var totalfuel = 0.25;
 var userfuel = prompt("Enter your fule ");
 if(userfuel < totalfuel){
document.write("Please refill the fuel in your car <br>");

 }

 // question no 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
     alert("car is smaller than cat");
      }



