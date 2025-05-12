//Random Password Generator

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeNumbers){

    const lowerChars   = "abcdefghijklmnopqrstuvwxyz";
    const upperChars   = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "123456789";
    const symbolChars  = "!@#$%^&*()_+-={}[]|\:;`'<>,.?/~)";

    let allowedChars ="";
    let password = "";

    allowedChars += includeLowercase ? lowerChars: "";
    allowedChars += includeUppercase ? upperChars : "";
    allowedChars += includeNumbers ? numbersChars: "";
    allowedChars += includeSymbols ? symbolChars: "";

    if (length<= 5 ) {
        return `(password lenght must be at least 1)`;

    }

    if (allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;

    }

    for ( i = 0; i < length; i++ ) {

        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];

    }

    return password;

}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers   = true;
const includeSymbols   = true;

const Password = generatePassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);

console.log(`Generated Password: ${Password}`);









