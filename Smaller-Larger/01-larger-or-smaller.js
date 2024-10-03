function compareNumbers() {
    // Retrieve the input values
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultText = "";

    // Simple conditional statements to compare the numbers
    if (num1 > num2) {
        resultText = `The larger number is: ${num1}`;
    } else if (num2 > num1) {
        resultText = `The larger number is: ${num2}`;
    } else {
        resultText = "Both numbers are equal.";
    }

    // Display the result
    document.getElementById('result').innerText = resultText;
}
