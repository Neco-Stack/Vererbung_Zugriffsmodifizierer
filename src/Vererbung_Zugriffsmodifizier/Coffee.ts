import Beverage from "./Beverageclass";

export enum CoffeeType {
    Espresso = "Espresso", 
    Latte = "Latte", 
    Cappuccino = "Cappuccino",
    Americano = "Americano"
}

export class Coffee extends Beverage { 
    type: CoffeeType;
    constructor(name: string, price: number, type: CoffeeType){
        super(name, price);
        this.type = type;
    }
}