function gradeGenerator() {
   
    let marks = parseInt(prompt("Enter student marks (0 to 100):"));

        if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid input.");
        return;
    }


    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    
    console.log(`Grade: ${grade}`);
}

gradeGenerator();
