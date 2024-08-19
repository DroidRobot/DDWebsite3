document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded");

  // Dummy driver data
  const drivers = [
      { id: 1, name: "Driver 1", phone_number: "123-456-7890", people_in_queue: 10, start_time: "08:00 AM", end_time: "04:00 PM" },
      { id: 2, name: "Driver 2", phone_number: "987-654-3210", people_in_queue: 5, start_time: "08:00 AM", end_time: "04:00 PM" },
      { id: 3, name: "Driver 3", phone_number: "345-678-9012", people_in_queue: 8, start_time: "08:00 AM", end_time: "04:00 PM" },
      { id: 4, name: "Driver 4", phone_number: "456-789-0123", people_in_queue: 12, start_time: "08:30 AM", end_time: "04:30 PM" },
      { id: 5, name: "Driver 5", phone_number: "567-890-1234", people_in_queue: 6, start_time: "09:30 AM", end_time: "05:30 PM" },
      { id: 6, name: "Driver 6", phone_number: "678-901-2345", people_in_queue: 9, start_time: "07:30 AM", end_time: "03:30 PM" }
      // Add more dummy data as needed
  ];

  console.log("Drivers data:", drivers);

  // Get the main row element
  const mainRow = document.getElementById("content");
  console.log("Main row element:", mainRow);

  // Get the template element
  const template = document.getElementById("driver-template");
  console.log("Template element:", template);

  // Populate the driver list
  drivers.forEach(function(driver) {
      console.log("Processing driver:", driver);

      // Clone the template content
      const clone = document.importNode(template.content, true);

      // Update the cloned content with dynamic data
      clone.querySelector("h4").textContent = driver.name;
      clone.querySelector(".card-title").textContent = `Queue of ${driver.people_in_queue}`;
      clone.querySelector("ul li:nth-child(1)").textContent = `From ${driver.start_time} to ${driver.end_time}`;
      clone.querySelector("ul li:nth-child(2)").textContent = `Phone: ${driver.phone_number}`;

      // Set up the Join Queue button to redirect to the driver's queue page
      const joinQueueButton = clone.querySelector(".btn-join-queue");
      joinQueueButton.setAttribute("data-driver-id", driver.id);

      // Add an event listener to the Join Queue button
      joinQueueButton.addEventListener("click", function() {
          window.location.href = `local-user-in-queue.html?driverId=${driver.id}`;
      });

      // Append the cloned and updated content to the main row
      mainRow.appendChild(clone);
  });
});
