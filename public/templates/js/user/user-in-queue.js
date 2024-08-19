// Sample data for drivers
const drivers = [
    { id: 1, name: "Driver Hey", phone: "123-456-7890", queue: 10, arrival: "10 minutes", location: { lat: 40.7128, lng: -74.0060 } },
    { id: 2, name: "Driver 2", phone: "987-654-3210", queue: 5, arrival: "5 minutes", location: { lat: 34.0522, lng: -118.2437 } },
    // Add more drivers as needed
  ];
  
  // Get driver ID from URL
  function getDriverIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('driverId');
  }
  
  // Find driver by ID
  function findDriverById(driverId) {
    return drivers.find(driver => driver.id == driverId);
  }

  
  
  // Initialize the map with OpenStreetMap
  function initMap(location) {
    const map = L.map('map').setView([location.lat, location.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Create a custom icon element
  const customIcon = L.divIcon({
    html: '<i class="bx bxs-navigation bx-md"></i>', // Bootstrap icon
    iconSize: [26, 26] // Size of the icon
  });
  
    L.marker([location.lat, location.lng], { icon: customIcon }).addTo(map)
      .bindPopup(driver.name)
      .openPopup();
  }
  
  // Populate driver info
  function populateDriverInfo(driver) {
    $("#driver-name").text(driver.name);
    $("#driver-phone").text("Phone: " + driver.phone);
    $("#driver-queue").text("People in queue: " + driver.queue);
    $("#driver-arrival").text("Estimated arrival: " + driver.arrival);
    initMap(driver.location);
  }
  
  // Leave queue button click handler
  $("#leave-queue").click(function() {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to leave the queue?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, leave the queue!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Left!',
          'You have left the queue.',
          'success'
        ).then(() => {
          window.location.href = 'local-user.html'; // Redirect to another page
        });
      }
    });
  });
  
  $(document).ready(function() {
    const driverId = getDriverIdFromUrl();
    const driver = findDriverById(driverId);
  
    if (driver) {
      populateDriverInfo(driver);
    } else {
      alert("Driver not found");
    }
  });
  