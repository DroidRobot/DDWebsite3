document.addEventListener("DOMContentLoaded", function() {
    const passengers = [
        { id: 1, name: "Alice Johnson", phone: "555-1234", location: [34.0522, -118.2437], destination: [34.0522, -118.2437] },
        { id: 2, name: "Bob Smith", phone: "555-5678", location: [40.7128, -74.0060], destination: [40.7306, -73.9352] },
        { id: 3, name: "Charlie Brown", phone: "555-8765", location: [41.8781, -87.6298], destination: [41.9206, -87.6556] },
        { id: 4, name: "Diana Ross", phone: "555-4321", location: [37.7749, -122.4194], destination: [37.7849, -122.4094] },
        { id: 5, name: "Edward Kim", phone: "555-3456", location: [29.7604, -95.3698], destination: [29.7714, -95.3588] }
    ];

    const mapContainer = document.getElementById('map');
    const map = L.map('map').setView(passengers[0] ? passengers[0].location : [0, 0], 12);

    if (!passengers.length) {
        mapContainer.style.display = 'none'; // Hide the map if there are no passengers
    } else {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }

    let currentPassengerIndex = 0;
    let currentPassenger = passengers[currentPassengerIndex];
    let historyStack = [];

    let locationMarker = L.marker(currentPassenger.location).addTo(map)
        .bindPopup(`<b>${currentPassenger.name}</b><br>Current Location`);
    let destinationMarker = L.marker(currentPassenger.destination).addTo(map)
        .bindPopup(`<b>${currentPassenger.name}</b><br>Destination`);

    function updatePassengerInfo() {
        currentPassenger = passengers[currentPassengerIndex];
        document.getElementById('passenger-name').textContent = currentPassenger.name;
        document.getElementById('passenger-phone').textContent = `Phone: ${currentPassenger.phone}`;
        document.getElementById('passenger-location').textContent = `Current Location: (${currentPassenger.location.join(', ')})`;
        document.getElementById('passenger-destination').textContent = `Destination: (${currentPassenger.destination.join(', ')})`;

        map.setView(currentPassenger.location, 12);

        locationMarker.setLatLng(currentPassenger.location).bindPopup(`<b>${currentPassenger.name}</b><br>Current Location`);
        destinationMarker.setLatLng(currentPassenger.destination).bindPopup(`<b>${currentPassenger.name}</b><br>Destination`);

        // Update map links with the new destination
        const address = currentPassenger.destination.join(',');
        updateMapLinks(address);
    }

    function updateMapLinks(address) {
        document.getElementById('waze-button').href = `https://waze.com/ul?q=${encodeURIComponent(address)}`;
        document.getElementById('google-maps-button').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
        document.getElementById('apple-maps-button').href = `https://maps.apple.com/?daddr=${encodeURIComponent(address)}`;
    }

    updatePassengerInfo(); // Initial update

    document.getElementById('arrived-pickup').addEventListener('click', function() {
        Swal.fire({
            title: 'Confirm Pickup',
            text: `Are you sure ${currentPassenger.name} has been picked up?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, arrived!'
        }).then((result) => {
            if (result.isConfirmed) {
                currentPassenger.location = currentPassenger.destination; // Move to destination
                updatePassengerInfo(); // Update UI and map

                document.getElementById('passenger-location').style.display = 'none'; // Hide current location text

                document.getElementById('arrived-pickup').classList.add('d-none');
                document.getElementById('arrived-destination').classList.remove('d-none');
            }
        });
    });

    document.getElementById('arrived-destination').addEventListener('click', function() {
        Swal.fire({
            title: 'Confirm Arrival',
            text: `Are you sure ${currentPassenger.name} has reached their destination?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, arrived!'
        }).then((result) => {
            if (result.isConfirmed) {
                historyStack.push(currentPassengerIndex); // Save current index to history stack
                currentPassengerIndex++;
                if (currentPassengerIndex < passengers.length) {
                    updatePassengerInfo(); // Update UI and map for the next passenger
                    document.getElementById('passenger-location').style.display = 'block'; // Show current location text again
                    document.getElementById('arrived-pickup').classList.remove('d-none');
                    document.getElementById('arrived-destination').classList.add('d-none');
                } else {
                    document.getElementById('passenger-name').textContent = 'No passengers in queue';
                    document.getElementById('passenger-phone').textContent = '';
                    document.getElementById('passenger-location').textContent = '';
                    document.getElementById('passenger-destination').textContent = '';
                    document.getElementById('arrived-pickup').classList.add('d-none');
                    document.getElementById('arrived-destination').classList.add('d-none');
                    mapContainer.style.display = 'none'; 
                    document.getElementById('back-to-dashboard').classList.remove('d-none');// Hide the map when no passengers are left
                }
            }
        });
    });

    document.getElementById('back-to-dashboard').addEventListener('click', function() {
        window.location.href = 'local-driver-driving.html'; 
    });

    document.getElementById('go-back').addEventListener('click', function() {
        if (historyStack.length > 0) {
            mapContainer.style.display = 'block';
            currentPassengerIndex = historyStack.pop(); // Revert to the previous passenger index
            updatePassengerInfo(); // Update UI and map for the previous passenger
            document.getElementById('passenger-location').style.display = 'block'; // Show current location text again
            document.getElementById('arrived-pickup').classList.remove('d-none');
            document.getElementById('arrived-destination').classList.add('d-none');
        } else {
            Swal.fire({
                title: 'No previous passenger',
                text: 'There are no previous passengers to revert to.',
                icon: 'info',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
        }
    });

    // Section for opening maps with directions
    document.getElementById('waze-button').addEventListener('click', function() {
        window.open(this.href, '_blank');
    });

    document.getElementById('google-maps-button').addEventListener('click', function() {
        window.open(this.href, '_blank');
    });

    document.getElementById('apple-maps-button').addEventListener('click', function() {
        window.open(this.href, '_blank');
    });
});
