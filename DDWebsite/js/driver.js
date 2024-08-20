class Driver extends User {
    constructor(phoneNumber, name, location, car) {
      super(phoneNumber, name, location);
      this.drivingStatus = 'Not driving'; // Initially set to "Not driving". Could be either driving, not driving, or on break.
      this.car = car; // Car object
      this.riderQueue = new Queue(); // Queue of riders
    }
  
    setDrivingStatus(status) {
        const validStatuses = ['Driving', 'Not driving', 'On a break'];
        if (validStatuses.includes(status)) {
          this.drivingStatus = status;
          console.log(`${this.name} driving status is now "${status}".`);
        } else {
          console.log(`Invalid status: ${status}. Valid statuses are: ${validStatuses.join(', ')}.`);
        }
      }
  
    addToFrontOfQueue(rider) {
      this.riderQueue.unshift(rider);
      rider.driverQueue = this;
      console.log(`${rider.name} has been added to the front of ${this.name}'s queue.`);
    }
  
    addToBackOfQueue(rider) {
      this.riderQueue.push(rider);
      rider.driverQueue = this;
      console.log(`${rider.name} has been added to the back of ${this.name}'s queue.`);
    }
  
    removeRider(rider) {
      this.riderQueue = this.riderQueue.filter(r => r !== rider);
      rider.driverQueue = null;
      console.log(`${rider.name} has been removed from ${this.name}'s queue.`);
    }
  }