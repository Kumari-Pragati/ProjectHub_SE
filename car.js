const search = document.querySelector('#searchInput');
const btn = document.querySelector('#submitBtn');
// const searchResult=
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let searchValue=search.value
    fetch('http://localhost:8080/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            searchTerm: searchValue 
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }      
        return response.json();
    })
    .then(data => {
        // Handle the response data here
        const searchResultDiv = document.querySelector('.searchResults');
        // Clear any previous search results
        searchResultDiv.innerHTML = '';

        if (data.result.length === 0) {
            // Car not found message
            const notFoundMessage = document.createElement('h2');
            notFoundMessage.classList.add('notFound');
            notFoundMessage.textContent = 'Car not found';
            searchResultDiv.appendChild(notFoundMessage);
        } else {
            // Loop through the data array and create HTML elements for each car
            data.result.forEach(car => {
                const carDiv = document.createElement('div');
                carDiv.classList.add('car');
        
                const makeModelYear = document.createElement('p');
                makeModelYear.classList.add('makeModelYear');
                makeModelYear.textContent = `${car.Make} ${car.Model} ${car.Year}`;
                carDiv.appendChild(makeModelYear);
        
                const mileagePrice = document.createElement('p');
                mileagePrice.classList.add('mileagePrice');
                mileagePrice.textContent = `Mileage: ${car.Mileage} | Price: $${car.Price}`;
                carDiv.appendChild(mileagePrice);
        
                const description = document.createElement('p');
                description.classList.add('description');
                description.textContent = car.Description;
                carDiv.appendChild(description);
        
                // Split the ImageURLs string into an array of image URLs
                const imageUrls = car.ImageURLs.split(',');
                const images = document.createElement('div');
                images.classList.add('images');
        
                // Loop through the image URLs and create img elements for each
                imageUrls.forEach(imageUrl => {
                    const img = document.createElement('img');
                    img.src = `${car.Make}/${imageUrl}`;
                    images.appendChild(img);
                });
                carDiv.appendChild(images);
                searchResultDiv.appendChild(carDiv);
            });
        } 
    })
    .catch(error => {
        console.error('Error:', error);
    });
        
});
