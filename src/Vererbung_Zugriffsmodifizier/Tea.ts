import Beverage from "./Beverageclass";

export enum TeaFlavor {
    Green = "Green", 
    Black = "Black",
    Chai = "Chai", 
    Peppermint = "Peppermint"
}
export class Tea extends Beverage {
    flavor: TeaFlavor;
    constructor(name: string, price: number, flavor: TeaFlavor){
        super(name, price)
        this.flavor = flavor
    }
}