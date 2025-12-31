const validateFunction = (password) => {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasSpecialCharacter = false;
    let hasNumber = false;

    const result = {
        isvalid: true,
        error: []
    };

    if (password.length < 8) {
        result.isvalid = false;
        result.error = ['Too short'];
        return result;
    }

    [...password].forEach(element => {
        if (element >= 'A' && element <= 'Z') {
            hasUpperCase = true;
        } else if (element >= 'a' && element <= 'z') {
            hasLowerCase = true;
        } else if (element >= '0' && element <= '9') {
            hasNumber = true;
        } else {
            hasSpecialCharacter = true;
        }
    });

    if (!hasUpperCase) {
        result.isvalid = false;
        result.error.push('Missing uppercase');
    }
    if (!hasLowerCase) {
        result.isvalid = false;
        result.error.push('Missing lowercase');
    }
    if (!hasNumber) {
        result.isvalid = false;
        result.error.push('Missing number');
    }
    if (!hasSpecialCharacter) {
        result.isvalid = false;
        result.error.push('Missing special characters');
    }

    return result;
};

const output = validateFunction('Gani@123');
console.log(`Validation result: ${JSON.stringify(output)}`);
