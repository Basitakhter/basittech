alert("Happy To Welcome You")
 confirm("Do You Want To Continou?")
 var inp = prompt("Enter the Number");
var endNumber = 20;

function generateMultiplicationTable(inp) {
  for (let i = inp; i <= endNumber; i++) {
    document.write(`<h3>Table of ${i} times:</h3>`);
    for (let j = 1; j <= 10; j++) {
      document.write(`${i} x ${j} = ${i * j}<br>`);
    }
    document.write("<br>"); // Add a newline for better readability
  }
}

// Example usage:
let inputNumber = parseInt(inp);
generateMultiplicationTable(inputNumber);


const ptr = prompt("Tell me Your Percentage")

if (ptr<= 40) {
    console.log("Your are Fail")
} else if (ptr<= 50) {
    console.log("You Are Pass. But work Hard for batter Results")
} else if(ptr<= 60){
    console.log("Grade B")
    console.log("Good You Are Pass. But work Hard for batter Results")
}else if(ptr<= 70){
    console.log("Grade A")
    console.log("Great You Are Pass. But work Hard for batter Results")
}else if(ptr<= 80){
    console.log("Grade A+")
    console.log("Excelent You Are Pass.")
}else if(ptr<= 100){
    console.log("Grade A++")
    console.log("Excelent You Are Extra Ordinary.")

}else{
    console.log("Please Input the correct data")
}

