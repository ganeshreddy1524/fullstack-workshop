const prime = (limit) => {
    let arr = [];

    for (let i = 2; i <= limit; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            arr.push(i);
        }
    }

    console.log(`Prime numbers up to ${limit}: ${arr.map(n => n).join(', ')}`);
};

prime(29);
