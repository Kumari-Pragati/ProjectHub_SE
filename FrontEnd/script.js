const arr = [
  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Inarat Hussain",
    gender: "Female",
    stop: "Education Hub | Kevdi",
    timing: "5pm",
    vehicle_type: "Car",
    vehicle: "Maruti 800",
    vehicle_no : "AS-3456",       
  },

  {
  image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
  name: "John Doe",
  gender: "Male",
  stop: "Example Stop",
  timing: "10am",
  vehicle_type: "Auto",
  vehicle: "Auto",
  vehicle_no : "AB-1234",  
  },
  
  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Hula Bula",
    gender: "Male",
    stop: "Example Stop",
    timing: "10am",
    vehicle_type: "Auto",
    vehicle: "Auto",
    vehicle_no : "AB-1234",  
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Devrikh",
    gender: "Male",
    stop: "Education Hub | Kevdi",
    timing: "6pm",  
    vehicle_type: "Car",
    vehicle: "Nano",
    vehicle_no : "DU-3492",        
  },               

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Arpita",
    gender: "Female",
    stop: "Dinosaur Park",
    timing: "1pm",
    vehicle_type: "Car",
    vehicle: "Volswagon",
    vehicle_no : "SD-4675",          
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Sneha",
    gender: "Female",
    stop: "INS Khukri",
    timing: "2pm",
    vehicle_type: "Car",
    vehicle: "Swift Dezire",
    vehicle_no : "GY-9008",          
  },

  {
    image: "https://as1.ftcdn.net/v2/jpg/02/14/31/90/1000_F_214319001_5E7Yd1Sp0nqZTxTxxIIHMut2YpR7BVq6.jpg",
    name: "Gaganpreet",
    gender: "Male",
    stop: "Una",
    timing: "1am",
    vehicle_type: "Car",
    vehicle: "Swift Dezire",
    vehicle_no : "UP-1234",          
  }
];






document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const destination = urlParams.get('destination');


  const searchInput = document.getElementById('search');
  searchInput.value = destination;

});
