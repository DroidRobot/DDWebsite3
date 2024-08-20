class queue{
    constructor(){
        this.riders=[];
        this.head=0;
        this.tail=0;
    }

    enqueue(rider){
        this.riders.push(rider);
    }

    dequeue(){
        if (this.isEmpty()){
            return "empty";
        }
        return this.riders.shift();
    }

    isEmpty(){
        return this.riders.length === 0;
    }

    peek(){
        if (this.isEmpty()){
            return "empty";
        }
        return this.riders[0];
    }

}

