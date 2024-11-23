const student: [string, number] = ["ivan", 85.7];

function displayStudentInfo(student: [string,number]): void{
    const [name, grade] = student;
    console.log(`Student name: ${name}`);
    console.log(`Average Grade: ${grade}`);
}

displayStudentInfo(student);