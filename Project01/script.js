function generateFields() {

    let count = document.getElementById("subjectCount").value;
    let subjectsDiv = document.getElementById("subjects");

    subjectsDiv.innerHTML = ""; // clear old fields

    if (count <= 0 || count === "") {
        alert("Enter valid number of subjects!");
        return;
    }

    for (let i = 1; i <= count; i++) {
        subjectsDiv.innerHTML +=
            `<input type="number" id="sub${i}" placeholder="Enter marks for Subject ${i}"><br>`;
    }
}

function calculateResult() {

    let name = document.getElementById("name").value;
    let count = document.getElementById("subjectCount").value;

    if (!name || count <= 0) {
        document.getElementById("result").innerHTML = "Please fill all details!";
        return;
    }

    let total = 0;

    for (let i = 1; i <= count; i++) {
        let marks = parseFloat(document.getElementById("sub" + i).value);

        if (isNaN(marks)) {
            document.getElementById("result").innerHTML = "Please enter all marks!";
            return;
        }

        total += marks;
    }

    let percentage = total / count;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 75) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Student Name: " + name + "<br>" +
        "Total Marks: " + total + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade;
}