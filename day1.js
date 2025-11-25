// Import prompt-sync for user input
let input = require("prompt-sync")();

// Arrays to store task data
let taskNames = [];
let taskDurations = [];

// Ask how many tasks the user wants to enter
let numTasks = parseInt(input("How many tasks would you like to enter? "));

// Validate input
if (isNaN(numTasks) || numTasks <= 0) {
    console.log("Invalid number of tasks.");
} else {

    // Loop to collect each task
    for (let i = 0; i < numTasks; i++) {

        console.log(`\nTask #${i + 1}`);

        // Get task name
        let name = input("Enter task name: ");
        taskNames.push(name); // push into array

        // Get task duration
        let duration = parseFloat(input("Enter duration in hours: "));
        taskDurations.push(duration); // push into array
    }

    // Reporting using console.table()
    console.log("\nTask Names:");
    console.table(taskNames);

    console.log("Task Durations:");
    console.table(taskDurations);
}