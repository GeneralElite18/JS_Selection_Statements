console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let num = 18;
let guess = window.prompt("Guess the number");

if(guess < num){
  console.log("too low");
}
else if(guess > num){
  console.log("too high");
}
else{
  console.log("Congratulations!!!");
}

let birthMonth = window.prompt("What is your birth month?");

switch(birthMonth){
  case "12":
  case "1":
  case "2":
    console.log("Winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("Spring");
    break;
  case "6":
  case "7":
  case "8":
    console.log("Summer");
    break;
  case "9":
  case "10":
  case "11":
    console.log("Fall");
    break;
  default:
    console.log("Not a vaild month number!");
    break;
}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch(colorId){
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch(sizeId){
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);