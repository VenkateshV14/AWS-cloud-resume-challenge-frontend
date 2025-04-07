console.log("Welcome to Venkatesh's AWS Cloud Resume Challenge!");

// Function to fetch and show visitor count
async function getVisitorCount() {
    const apiUrl = "https://9l2tv5xuna.execute-api.us-east-1.amazonaws.com/count";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const visitorElement = document.getElementById("visitor-count");

        if (visitorElement) {
            visitorElement.innerText = data.visits || 0; // Correct key used here
        } else {
            console.warn("Visitor count element not found.");
        }
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
}

// Call the function when the page loads
window.onload = getVisitorCount;
