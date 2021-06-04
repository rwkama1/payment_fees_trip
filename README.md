## Description

Algorithm to enter a Destination and the amount of fees paid for the trip.
You must show the total value of the trip and how much you have to pay in each installment. Also keep in mind that if the fees are greater than 6, a surcharge of USD 50 is added to the total of the trip.

## Usage

```Javascript

 let Destination_Pay=require("./Destination_Pay").Destination_Pay;
 
let destination_pay=new Destination_Pay("Mar del Plata",496,5);
// let destination_pay=new Destination_Pay("Cordoba",645,5)
// let destination_pay=new Destination_Pay("Calafate",1240,3)
// let destination_pay=new Destination_Pay("Cataratas",595,4)
 let calc=destination_pay.calculate_payment_trip();
 if(destination_pay.numberfee>6)
 {
    console.log("A charge of USD 50 was made to the price of the trip");
 }
 console.log("The value of the fees is: USD "+calc.fee_value);
 console.log("The total to pay for the trip is: USD "+calc.total);

```