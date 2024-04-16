// Add your JavaScript code here
// Get the hero section
const heroSection = document.getElementById('hero');

// Create a video element
const videoElement = document.createElement('video');
videoElement.src = 'https://cdn.pixabay.com/video/2020/04/13/35889-407193331_tiny.mp4'; // Video URL
videoElement.autoplay = true;
videoElement.loop = true;
videoElement.muted = true; // Mute the video to prevent autoplay restrictions
videoElement.playsInline = true; // Necessary for iOS Safari

// Set video element styles
videoElement.style.position = 'absolute';
videoElement.style.top = '0';
videoElement.style.left = '0';
videoElement.style.width = '100%';
videoElement.style.height = '100%';
videoElement.style.objectFit = 'cover';
videoElement.style.zIndex = '-999';

// Append the video element to the hero section
heroSection.appendChild(videoElement);

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const categorySlider = document.getElementById('categorySlider');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    scrollAmount += 200; // Adjust this value based on category width
    categorySlider.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= 200; // Adjust this value based on category width
    categorySlider.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Define concert locations and their coordinates
const concertLocations = [
    { name: "Location 1", coordinates: { x: 100, y: 100 } },
    { name: "Location 2", coordinates: { x: 200, y: 200 } },
    { name: "Location 3", coordinates: { x: 300, y: 300 } },
    // Add more concert locations as needed
];

// Function to create location icons and tooltips
function createLocationIcons() {
    const mapOverlay = document.getElementById('mapOverlay');
    const locationList = document.getElementById('locationList');

    concertLocations.forEach(location => {
        const icon = document.createElement('img');
        icon.src = 'https://cdn-icons-png.flaticon.com/128/149/149059.png';
        icon.alt = 'Concert Location';
        icon.classList.add('location-icon');
        icon.style.position = 'absolute';
        icon.style.left = `${location.coordinates.x}px`;
        icon.style.top = `${location.coordinates.y}px`;

        const tooltip = document.createElement('span');
        tooltip.textContent = location.name;
        tooltip.classList.add('tooltip');
        icon.appendChild(tooltip);

        mapOverlay.appendChild(icon);

        const listItem = document.createElement('li');
        listItem.textContent = location.name;
        locationList.appendChild(listItem);
    });
}

// Call the function to create location icons
createLocationIcons();

// Function to show/hide tooltips on hover
document.querySelectorAll('.location-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.querySelector('.tooltip').style.visibility = 'visible';
    });
    icon.addEventListener('mouseout', () => {
        icon.querySelector('.tooltip').style.visibility = 'hidden';
    });
});
