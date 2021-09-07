function gradesPrint(grade) {
    if (grade < 3) {
        console.log("Fail (2)");
    } else if (grade >= 3 && grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

gradesPrint(3.33);
// Poor (3.33)

gradesPrint(4.50);
// Very good (4.50)

gradesPrint(2.99);
// Fail (2)