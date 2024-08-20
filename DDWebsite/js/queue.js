class Queue {
    constructor() {
      this.riders = []; // Array to hold the riders
    }
  
    // Add a rider to the back of the queue
    enqueue(rider) {
      this.riders.push(rider);
      console.log(`${rider.name} has been added to the queue.`);
    }
  
    // Remove a rider from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log('The queue is empty. No rider to dequeue.');
        return null;
      }
      const removedRider = this.riders.shift();
      removedRider.driverQueue = null;
      console.log(`${removedRider.name} has been removed from the queue.`);
      return removedRider;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.riders.length === 0;
    }
  
    // Peek at the first rider in the queue without removing them
    peek() {
      if (this.isEmpty()) {
        console.log('The queue is empty.');
        return null;
      }
      return this.riders[0];
    }
  
    // Print the current state of the queue
    printQueue() {
      if (this.isEmpty()) {
        console.log('The queue is empty.');
      } else {
        console.log('Current queue:');
        this.riders.forEach((rider, index) => {
          console.log(`${index + 1}. ${rider.name}`);
        });
      }
    }
  
    // Add a rider to the front of the queue
    addToFront(rider) {
      this.riders.unshift(rider);
      rider.driverQueue = this;
      console.log(`${rider.name} has been added to the front of the queue.`);
    }
  }
