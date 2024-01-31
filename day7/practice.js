let score = parseInt(prompt("Enter the score"));

switch (true) {
    case score >= 90:
        console.log("You entered " + score + ", it is grade A.");
        break;
    case score >= 80 && score < 90:
        console.log("You entered " + score + ", it is grade B.");
        break;
    case score >= 70 && score < 80:
        console.log("You entered " + score + ", it is grade C.");
        break;
    case score >= 60 && score < 70:
        console.log("You entered " + score + ", it is grade D.");
        break;
    default:
        console.log("You entered " + score + ", it is grade F");
}