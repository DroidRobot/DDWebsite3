class User {
    constructor(phoneNumber, name, location) {
      this.phoneNumber = phoneNumber;
      this.name = name;
      this.location = location;
      this.driverQueue = null; // Initially, the user is not in any driver's queue
    }
  
    // Method to add the user to a driver's rider queue
    addToDriverQueue(driver) {
      if (this.driverQueue) {
        console.log(`${this.name} is already in a queue. Remove from the current queue before adding to another.`);
      } else {
        driver.addRider(this);
        this.driverQueue = driver;
        console.log(`${this.name} has been added to ${driver.name}'s queue.`);
      }
    }
  
    // Method to remove the user from their current driver's queue
    removeFromQueue() {
      if (this.driverQueue) {
        this.driverQueue.removeRider(this);
        console.log(`${this.name} has been removed from ${this.driverQueue.name}'s queue.`);
        this.driverQueue = null;
      } else {
        console.log(`${this.name} is not in any queue.`);
      }
    }
  }
  
  // Example Driver class for context
  class Driver {
    constructor(name) {
      this.name = name;
      this.riderQueue = [];
    }
  
    addRider(rider) {
      this.riderQueue.push(rider);
    }
  
    removeRider(rider) {
      this.riderQueue = this.riderQueue.filter(r => r !== rider);
    }
  }
  
  // Example usage
  const user1 = new User('123-456-7890', 'John Doe', 'Downtown');
  const driver1 = new Driver('Alice');
  
  user1.addToDriverQueue(driver1); // John Doe has been added to Alice's queue.
  user1.removeFromQueue();         // John Doe has been removed from Alice's queue.
  