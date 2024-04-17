const arr = [
  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Inarat Hussain",
    gender: "Female",
    stop: "Education Hub | Kevdi",
    timing: "5pm",
    vehicle: "Maruti 800",
    vehicle_no : "AS-3456",       
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Devrikh",
    gender: "Male",
    stop: "Education Hub | Kevdi",
    timing: "6pm",  
    vehicle: "Nano",
    vehicle_no : "DU-3492",        
  },               

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Arpita",
    gender: "Female",
    stop: "Dinosaur Park",
    timing: "1pm",
    vehicle: "Volswagon",
    vehicle_no : "SD-4675",          
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Sneha",
    gender: "Female",
    stop: "INS Khukri",
    timing: "2pm",
    vehicle: "Swift Dezire",
    vehicle_no : "GY-9008",          
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Gaganpreet",
    gender: "Male",
    stop: "Una",
    timing: "1am",
    vehicle: "Swift Dezire",
    vehicle_no : "UP-1234",          
  }
];








// Function to populate options for a select element
function populateOptions(field) {
  // Get unique values for the specified field from the array
  const uniqueValues = [...new Set(arr.map(item => item[field]))];

  // Sort the unique values alphabetically
  uniqueValues.sort();

  // Get the select element by its ID
  const select = document.getElementById(field);

  // Clear existing options
  select.innerHTML = '';

  // Add an "All" option
  const allOption = document.createElement('option');
  allOption.value = 'All';
  allOption.textContent = 'All';
  select.appendChild(allOption);

  // Add options for each unique value
  uniqueValues.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

// Function to create tiles
function createTile(data) {
  const container = document.getElementById('container');

  // Create a new tile element
  const tile = document.createElement('div');
  tile.classList.add('tile');

  // Populate tile with data
  const content = `
      
  <img src="${data.image}" alt="">
  
  <div id="content">    
    <h2>${data.name}</h2>
    <p>${data.gender}</p>
    <p>${data.stop}</p>
    <p>${data.timing}</p>
    <p>${data.vehicle}</p>
    <p>${data.vehicle_no}</p>

    </div>   

  `;
  tile.innerHTML = content;

  // Add tile to the container
  container.appendChild(tile);
}

// Create tiles for each item in the arr array
arr.forEach(item => {
  createTile(item);
});

// Populate options for each field
['name', 'gender', 'stop', 'timing', 'vehicle', 'vehicle_no'].forEach(field => {
  populateOptions(field);
});

// Create tiles for each item in the array
arr.forEach(item => {
  createTile(item);
});

document.addEventListener('DOMContentLoaded', function() {
    // Extract destination from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');

    // Set the destination value to the search input field
    const searchInput = document.getElementById('search');
    searchInput.value = destination;

    // Trigger filtering based on the pre-filled destination
    filterTiles();
});

// Function to filter tiles based on search input
function filterTiles() {
    // Get search input value
    var searchInput = document.getElementById("search").value.toLowerCase();
console.log(searchInput);
    // Get all tiles
    var tiles = document.querySelectorAll('.tile');

    // Loop through each tile
    tiles.forEach(function(tile) {
        // Get tile content
        var content = tile.textContent.toLowerCase();

        // Check if the search query matches the tile content
        if (content.includes(searchInput)) {
            tile.style.display = 'block'; // Show the tile
        } else {
            tile.style.display = 'none'; // Hide the tile
        }
    });
}

