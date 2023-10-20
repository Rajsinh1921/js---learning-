const marks = 80;

if (marks > 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("A+");
    } else if (marks >= 70) {
        console.log("B+");
    } else if (marks >= 60) {
        console.log("C+");
    } else if (marks >= 40) {
        console.log("D+");
    } else if (marks <= 33) {
    console.log("Failed");
    }

} else {
    console.log("Fail");
}