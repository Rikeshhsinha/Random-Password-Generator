const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lenValue = document.getElementById("lenValue");
const strengthText = document.getElementById("strength");

lenValue.textContent = lengthSlider.value;

lengthSlider.oninput = () => {
    lenValue.textContent = lengthSlider.value;
};

function generatePassword() {
    const length = lengthSlider.value;
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+~{}[]<>?";

    let chars = "";
    if (document.getElementById("uppercase").checked) chars += upper;
    if (document.getElementById("lowercase").checked) chars += lower;
    if (document.getElementById("numbers").checked) chars += number;
    if (document.getElementById("symbols").checked) chars += symbol;

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    passwordBox.value = password;
    checkStrength(password);
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password Copied!");
}

function checkStrength(password) {
    let strength = "Weak";
    if (password.length >= 12) strength = "Medium";
    if (password.length >= 16) strength = "Strong";

    strengthText.textContent = "Strength: " + strength;
}
