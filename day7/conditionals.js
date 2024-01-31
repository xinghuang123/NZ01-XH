// Conditional Statements
// if statement
let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// else if statement
let temperature = 3;
if (temperature < 0) {
    console.log("It`s freezing!")
} else if (temperature >= 0 && temperature < 20) {
    console.log("It`s cool outside.");
} else {
    console.log("It`s a warm day.")
}

// switch statement
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("It`s the start of the week");
        break;
    case "Friday":
        console.log("It`s the end of the week.");
        break;
    default:
        console.log("It`s a regular day.");
}