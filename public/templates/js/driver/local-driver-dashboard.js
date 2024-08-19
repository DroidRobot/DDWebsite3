document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById('status');
    const changeStatusButton = document.getElementById('change-status');
    const queueInfoElement = document.getElementById('queue-info');

    let currentStatus = 'Offline'; // Initial status

    changeStatusButton.addEventListener('click', function() {
        if (currentStatus === 'Offline') {
            currentStatus = 'Driving';
            changeStatusButton.textContent = 'Stop Driving';
            // Fetch and display the first passenger in the queue
            fetchNextPassenger();
        } else {
            currentStatus = 'Offline';
            changeStatusButton.textContent = 'Start Driving';
            queueInfoElement.innerHTML = '<p>No passengers in queue</p>';
        }
        statusElement.textContent = currentStatus;
    });

    function fetchNextPassenger() {
        // Simulate fetching the next passenger
        const nextPassenger = { name: "John Doe", phone: "123-456-7890" };

        if (nextPassenger) {
            queueInfoElement.innerHTML = `
                <p>Name: ${nextPassenger.name}</p>
                <p>Phone: ${nextPassenger.phone}</p>
                <button id="start-trip">Start Trip</button>
            `;

            document.getElementById('start-trip').addEventListener('click', function() {
                // Logic to start the trip
                alert('Trip started with ' + nextPassenger.name);
                // Reset queue display or update it
                fetchNextPassenger(); // Optionally fetch next passenger again
            });
        } else {
            queueInfoElement.innerHTML = '<p>No passengers in queue</p>';
        }
    }
});
