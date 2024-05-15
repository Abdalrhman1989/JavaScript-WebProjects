// Funktion til at validere e-mailadresse
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Funktion til at validere password
function validatePassword(password) {
    return password.length >= 8;
}

// Funktion til at tjekke alle inputs
function validateForm(email, password) {
    if (!validateEmail(email)) {
        console.log("E-mailadressen er ikke gyldig.");
        return false;
    }
    if (!validatePassword(password)) {
        console.log("Passwordet skal være på mindst 8 tegn.");
        return false;
    }
    console.log("Begge felter er korrekt udfyldt.");
    return true;
}

// Eksempel på brug af funktionerne
const email = "test@example.com";
const password = "password123";
validateForm(email, password);
