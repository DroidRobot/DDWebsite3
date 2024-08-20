class Driver{


    constructor(name, phone, shift){
        this.name=name;
        this.phone=phone;
        this.shift=shift;
        this.rideQueue=new queue();
    }

    getName(){
        return this.name;
    }

    getPhone(){
        return this.phone;
    }

    getShift(){
        return this.shift;
    }

    addRider(rider){
        this.rideQueue.enqueue(rider);
    }

    dropRider(){
        this.rideQueue.dequeue();
    }



}