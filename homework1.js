// This code converts a number from the binary numeral system (base 2) to the decimal system (base 10).
// It contains the `convertBinaryToDecimal` function, which takes a binary number as a string input
// and returns the equivalent number in the decimal system.

function convertBinaryToDecimal(binaryString) {
    // Initialize variables for the calculation
    let decimalValue = 0; // Stores the resulting decimal value
    let power = 0; // Tracks the current power of 2

    // Traverse the binary number from right to left (least significant digit first)
    for (let i = binaryString.length - 1; i >= 0; i--) {
        // Get the current digit as a number
        let digit = parseInt(binaryString[i], 10);

        // If the digit is not 0 or 1, throw an error (binary numbers only contain these digits)
        if (digit !== 0 && digit !== 1) {
            throw new Error("Invalid character in binary number.");
        }

        // Add the contribution of the current digit, multiplied by the corresponding power of 2, to the decimal value
        decimalValue += digit * Math.pow(2, power);

        // Move to the next power of 2 for the next digit
        power++;
    }

    // Return the resulting decimal value
    return decimalValue;
}

// Example usage
try {
    // Test binary number
    const binaryInput = "1001"; // 1001 in binary corresponds to 9 in decimal

    // Perform the conversion
    const decimalOutput = convertBinaryToDecimal(binaryInput);

    // Output to the console
    console.log(`Binary number: ${binaryInput} -> Decimal number: ${decimalOutput}`);
} catch (error) {
    // Handle errors
    console.error(`An error occurred: ${error.message}`);
}
