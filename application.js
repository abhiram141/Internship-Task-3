// Get references to the DOM elements
const form = document.getElementById("application-form");
const companyNameInput = document.getElementById("company-name");
const positionInput = document.getElementById("position");
const applicationDateInput = document.getElementById("application-date");
const statusSelect = document.getElementById("status");
const applicationsList = document.getElementById("applications");

// Function to add a new application
function addApplication(event) {
    event.preventDefault();

    const companyName = companyNameInput.value;
    const position = positionInput.value;
    const applicationDate = applicationDateInput.value;
    const status = statusSelect.value;

    if (companyName && position && applicationDate) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${companyName}</span> - ${position}<br>
            Application Date: ${applicationDate}<br>
            Status: ${status}
        `;
        applicationsList.appendChild(li);

        // Clear form fields
        companyNameInput.value = "";
        positionInput.value = "";
        applicationDateInput.value = "";
        statusSelect.value = "Applied";
    }
}

// Add event listener to the form
form.addEventListener("submit", addApplication);
