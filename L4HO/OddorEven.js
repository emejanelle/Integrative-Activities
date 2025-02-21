function numberChecker(n) {
    if (n % 2 == 0) {
        console.log (n + " is EVEN!")
    } else {
        console.log (n + " is ODD :<<")
    }
}

console.log("Is the number even or odd? Who knows??? Only you know :>>\n\n")

for (let i = 1; i <= 10; i++) {
    console.log(i);
    numberChecker(i);
}