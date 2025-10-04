// Updated utils.js with INTENTIONAL ERRORS for testing
class DataProcessor {
    constructor() {
        this.data = null;
    }
    
    // INTENTIONAL ERROR: Missing validation - should check input type
    process(input) {
        this.data = input; // No validation!
        return this.data.map(x => x * 2); // Will crash if input is not array
    }
    
    // INTENTIONAL ERROR: No error handling
    save() {
        localStorage.setItem('data', JSON.stringify(this.data)); // No try-catch!
    }
}

// INTENTIONAL ERROR: Still using global variable
var globalCounter = 0; // Should be let or const

// INTENTIONAL ERROR: Function name doesn't match variable
function incrementCounter() { // Should be incrementGlobalCounter
    globalCounter++;
    return globalCounter;
}

// INTENTIONAL ERROR: Missing JSDoc documentation
function helperFunction() {
    return "This function has no documentation";
}
