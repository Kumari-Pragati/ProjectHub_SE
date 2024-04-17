document.getElementById("searchform").addEventListener(onsubmit,function (event){
//   event.preventDefault(); // Prevent form submission
            
//     const searchTerm = document.getElementById('searchInput').value;
//     fetch(`/search?term=${searchTerm}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     // Clear previous search results
//                     document.getElementById('searchResults').innerHTML = '';

//                     // Displaying search results
//                     data.forEach(car => {
//                         const carInfo = document.createElement('div');
//                         carInfo.innerHTML = `<strong>${car.make} ${car.model}</strong> - Year: ${car.year}, Color: ${car.color}, Price: ${car.price}, Mileage: ${car.mileage}, Condition: ${car.condition}`;
//                         document.getElementById('searchResults').appendChild(carInfo);
//                     });
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data:', error);
//                 });
// })
