// Updated main.js with INTENTIONAL ERRORS for testing
function calculateSum(a, b) {
    // INTENTIONAL ERROR: Missing validation - should check types
    return a + b; // This will cause issues with non-numbers
}

function processData(data) {
    // INTENTIONAL ERROR: Inconsistent variable naming
    let result = []; // Should be processedResults for consistency
    // INTENTIONAL ERROR: Missing validation
    for (let i = 0; i < data.length; i++) {
        result.push(data[i] * 2); // No type checking
    }
    return result;
}

// INTENTIONAL ERROR: Unused variable
const unusedVar = "This is not used anywhere";

// INTENTIONAL ERROR: Missing semicolon
console.log("Hello World")
