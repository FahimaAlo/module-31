class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na chole na re')
    }
}

class Bus extends Vehicle{
    constructor(name, price, seat, tickerPrice){
        super(name, price);
        this.seat = seat;
        this.tickerPrice = tickerPrice;

    }

}

class Truck extends Vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}