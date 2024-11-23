type User = {
    id: number;
    name: string;
    email: string;
    age: number | null;
};

const user: User = {
    id: 1,
    name: "Ivan",
    email: "ivanribak@gmail.com",
    age: 25
};

function printUserInfo(user: User): void{
    console.log(`User info: 
        ID: ${user.id}
        Name: ${user.name}
        Email: ${user.email}
        Age: ${user.age !== null ? user.age : "Not provided"}
        `);
}

printUserInfo(user);