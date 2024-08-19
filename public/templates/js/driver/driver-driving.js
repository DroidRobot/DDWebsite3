document.addEventListener("DOMContentLoaded", function() {

    const randomCities = [
        [34.0522, -118.2437], // Los Angeles
        [40.7128, -74.0060],  // New York
        [41.8781, -87.6298],  // Chicago
        [37.7749, -122.4194], // San Francisco
        [29.7604, -95.3698]   // Houston
    ];

    // Select a random city from the array
    const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];


    const mapContainer = document.getElementById('map');
    const map = L.map('map').setView(randomCity, 12);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create a custom icon element
    const customIcon = L.divIcon({
        html: '<i class="bx bxs-navigation bx-md"></i>', // Bootstrap icon
        iconSize: [26, 26] // Size of the icon
        
    });

    let locationMarker = L.marker(randomCity, { icon: customIcon }).addTo(map)
        .bindPopup(`<b>Your Location</b>`);

    $("#start-driving").click(function() {
        Swal.fire({
            title: 'Driving Confirmation',
            text: `Are you sure you want to start driving?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Trip Started!',
                    'Users will now start joining your queue.',
                    'success'
                )
                document.getElementById('start-driving').classList.add('d-none');
                document.getElementById('stop-driving').classList.remove('d-none');
            }
        });
    });


    $("#stop-driving").click(function() {
        Swal.fire({
            title: 'Driving Confirmation',
            text: `Are you sure you want to end your current drive?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes.'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Trip Ended',
                    'Users will be prevented from joining your queue',
                    'success'
                )
                document.getElementById('start-driving').classList.remove('d-none');
                    document.getElementById('stop-driving').classList.add('d-none');
            }
        });
    });

});
