let score = parseInt(prompt("Enter the score"));

if (score >= 90) {
    console.log("You entered " + score + ", it is grade A");
} else if (80 <= score && score < 90) {
    console.log("You entered " + score + ", it is grade B");
} else if (70 <= score && score < 80) {
    console.log("You entered " + score + ", it is grade C");
} else if (60 <= score && score < 70) {
    console.log("You entered " + score + ", it is grade D");
} else if (score < 60) {
    console.log("You entered " + score + ", it is grade F");
}