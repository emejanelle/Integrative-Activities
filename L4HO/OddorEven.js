function numberChecker(n) {
    if (n % 2 == 0) {
        return " it is EVEN!";
    } else {
        return "it is ODD :<<";
    }
}

console.log("Is the number even or odd? Who knows??? Only you know :>>\n\n")

console.log("For loops on the go!")
for (let i = 1; i <= 10; i++) {
    console.log(i); 
}

console.log("\n\nUsed while loops!")
let i = 1; 
while (i <= 10){
    console.log("The number is " + i + " and " + numberChecker(i));
    i++;
}
