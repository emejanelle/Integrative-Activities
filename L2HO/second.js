let a;
let b;
let z;

function addNumbers(a, b) {
    return a + b;
}

console.log (addNumbers(5,10));

a = (prompt("First digit: "));
b = (prompt("Second digit: "));

if (confirm("Do you want to continue getting the sum of the digits? ") == true) {

    z = addNumbers(Number(a),Number(b));

    console.log("First digit: " + a);
    console.log("Second digit: " + b);
    console.log("The sum of " + a + " + " + b + " is " + z + ".");
    alert("The sum of " + a + " and " + b + " is " + z + ".");
} 
else {
    console.log("You cancelled adding the digits.");
    alert("You cancelled adding the digits.");
}


