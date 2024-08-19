


document.addEventListener("DOMContentLoaded", function() {
    // Dummy driver data
    const drivers = [
        { name: "Driver 1", people_in_queue: 10, start_time: "09:00 AM", end_time: "05:00 PM", phone_number: "123-456-7890" },
        { name: "Driver 2", people_in_queue: 5, start_time: "10:00 AM", end_time: "06:00 PM", phone_number: "234-567-8901" },
        { name: "Driver 3", people_in_queue: 8, start_time: "08:00 AM", end_time: "04:00 PM", phone_number: "345-678-9012" },
        { 
            name: "Driver 4", 
            people_in_queue: 12, 
            start_time: "08:30 AM", 
            end_time: "04:30 PM", 
            phone_number: "456-789-0123" 
          },
          { 
            name: "Driver 5", 
            people_in_queue: 6, 
            start_time: "09:30 AM", 
            end_time: "05:30 PM", 
            phone_number: "567-890-1234" 
          },
          { 
            name: "Driver 6", 
            people_in_queue: 9, 
            start_time: "07:30 AM", 
            end_time: "03:30 PM", 
            phone_number: "678-901-2345" 
          }
        // Add more dummy data as needed
    ];

    // Get the main row element
    const mainRow = document.getElementById("content");

    // Fetch the content of driver-content.html from the partials folder
    fetch("partials/driver-content.html")
        .then(response => response.text())
        .then(template => {
            // Convert the template string to HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(template, 'text/html');
            const content = doc.querySelector("#driver-template").content;

            // Populate the driver list
            drivers.forEach(function(driver) {
                // Clone the template content
                const clone = document.importNode(content, true);

                // Update the cloned content with dynamic data
                clone.querySelector("h4").textContent = driver.name;
                clone.querySelector(".card-title").textContent = `Queue of ${driver.people_in_queue}`;
                clone.querySelectorAll("ul li")[0].textContent = `From ${driver.start_time} to ${driver.end_time}`;
                clone.querySelectorAll("ul li")[1].textContent = `Phone: ${driver.phone_number}`;

                // Append the cloned and updated content to the main row
                mainRow.appendChild(clone);
            });
        });
});
