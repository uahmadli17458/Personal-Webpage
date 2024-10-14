function getUserInfo() {

    const fullName = prompt("Enter your full name:");
    const grade = prompt("Enter your course grade:");

    alert("Hello, " + fullName);

    if (grade >= 50) {
        alert("You passed the course!");
    } else {
        alert("You failed the course.");
    }
}
getUserInfo();
