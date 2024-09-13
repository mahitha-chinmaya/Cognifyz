// Get the current hour
const currentHour = new Date().getHours();

// Variable to hold the greeting message
let greeting;

// Determine the greeting based on the current time
if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

// Display the greeting in an alert box
alert(greeting);
