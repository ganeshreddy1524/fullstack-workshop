const runApp = () => {
    console.log('Hello from external file!');
    console.log({ Name: 'ganesh', age: 21 });

    const users = [
        { Name: 'ganesh', age: 21 },
        { Name: 'ganesh', age: 26 }
    ];

    console.table(users);

    let age = 23;

    let Name = prompt("What is your name");
    let colour = prompt("What is your favorite color?");

    alert(`Welcome ${Name} to India`);

    // Array method usage (review suggestion)
    users.map(user =>
        console.log(`User: ${user.Name}, Age: ${user.age}`)
    );
};

runApp();
