document.getElementById("showCandidateInfo").addEventListener("click", function() {
  // Sample candidate data (replace this with your actual data)
  var candidates = [
    { name: "Candidate 1", votes: 100 },
    { name: "Candidate 2", votes: 80 },
    { name: "Candidate 3", votes: 120 }
  ];

  // Sort candidates by votes in descending order
  candidates.sort((a, b) => b.votes - a.votes);

  // Populate the table with candidate info
  var tableBody = document.getElementById("candidateTableBody");
  tableBody.innerHTML = ""; // Clear previous data

  candidates.forEach(candidate => {
    var row = document.createElement("tr");
    row.innerHTML = `
      <td>${candidate.name}</td>
      <td>${candidate.votes}</td>
    `;
    tableBody.appendChild(row);
  });

  // Show the table
  var table = document.getElementById("candidateTable");
  table.style.display = "block";
});
