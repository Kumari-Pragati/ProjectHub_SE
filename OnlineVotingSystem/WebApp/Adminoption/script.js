// Add event listeners for each button
document.getElementById("startElectionBtn").addEventListener("click", function() {
    openModal("popupModal");
});

document.getElementById("seeAllVotersBtn").addEventListener("click", function() {
    openTable("votersTableContainer");
});

document.getElementById("verifyVoterBtn").addEventListener("click", function() {
    openVerifyVoterTable();
});

document.getElementById("displayCandidateBtn").addEventListener("click", function() {
    openTable("candidateInfoContainer");
});

document.getElementById("setDeadlineBtn").addEventListener("click", function() {
    openTable("deadlineContainer");
});

document.getElementById("giveResultBtn").addEventListener("click", function() {
    openTable("resultOptionsContainer");
});

// Function to open the specified table and close others
function openTable(tableId) {
    closeAllTablesExcept(tableId);
    var tableContainer = document.getElementById(tableId);
    tableContainer.classList.remove("hidden");
    closeModal("popupModal"); // Close the modal if open
}

// Function to open the verify voter table
function openVerifyVoterTable() {
    openTable("votersTableContainer");

    // Dummy data for voters
    var voters = [
        { name: "Nitesh", email: "np@gmail.com", phone: "1234567890", verified: false },
        { name: "Sid", email: "sid@gmail.com", phone: "0987654321", verified: false },
        { name: "Anuj", email: "anuj@gmail.com", phone: "5555555555", verified: false }
    ];

    // Populate the table with dummy voter data
    var votersTableBody = document.getElementById("votersTableBody");
    votersTableBody.innerHTML = "";
    voters.forEach(function(voter) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${voter.name}</td>
            <td>${voter.email}</td>
            <td>${voter.phone}</td>
            <td>
                <button class="verifyBtn" data-verified="${voter.verified ? 'true' : 'false'}">${voter.verified ? 'Verified' : 'Not Verified'}</button>
            </td>
        `;
        votersTableBody.appendChild(row);
    });

    // Add event listeners to verify buttons
    var verifyButtons = document.querySelectorAll(".verifyBtn");
    verifyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var isVerified = button.getAttribute("data-verified") === "true";
            if (!isVerified) {
                button.textContent = "Verified";
                button.setAttribute("data-verified", "true");
            } else {
                button.textContent = "Not Verified";
                button.setAttribute("data-verified", "false");
            }
        });
    });
}

// Function to close all tables except the specified one
function closeAllTablesExcept(exceptId) {
    var tableContainers = document.querySelectorAll("[id$='Container']");
    tableContainers.forEach(function(container) {
        if (container.id !== exceptId) {
            container.classList.add("hidden");
        }
    });
}

// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.remove("hidden");

    // Close the modal when the close button or outside the modal is clicked
    var closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        closeModal(modalId);
    });
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal(modalId);
        }
    });
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.classList.add("hidden");
}
