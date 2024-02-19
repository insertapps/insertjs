// Get all <time> elements with a datetime attribute
const timeElements = document.querySelectorAll('time[datetime]');

// Get today's date
const today = new Date();

// Iterate through each element and update its text
timeElements.forEach(function (timeElement) {
    // Get the date from the datetime attribute
    const dateAttribute = timeElement.getAttribute('datetime');
    const date = new Date(dateAttribute);

    // Calculate the time difference
    const timeDifference = today - date;

    // Update the element's text based on the time difference
    if (timeDifference < 86400000) { // Less than 1 day (1 day = 86400000 milliseconds)
        const hoursAgo = Math.floor(timeDifference / 3600000);
        timeElement.textContent = hoursAgo + " hour" + (hoursAgo === 1 ? "" : "s") + " ago";
    } else if (timeDifference < 2592000000) { // Less than 30 days (30 days = 2592000000 milliseconds)
        const daysAgo = Math.floor(timeDifference / 86400000);
        timeElement.textContent = daysAgo + " day" + (daysAgo === 1 ? "" : "s") + " ago";
    } else if (timeDifference < 31536000000) { // Less than 1 year (1 year = 31536000000 milliseconds)
        const monthsAgo = Math.floor(timeDifference / 2592000000);
        timeElement.textContent = monthsAgo + " month" + (monthsAgo === 1 ? "" : "s") + " ago";
    } else {
        const yearsAgo = Math.floor(timeDifference / 31536000000);
        timeElement.textContent = yearsAgo + " year" + (yearsAgo === 1 ? "" : "s") + " ago";
    }
});
