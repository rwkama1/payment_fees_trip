class Destination_Pay
{
    constructor(pdestination,pprice,pnumberfees)
    {
        this.destination=pdestination;
        this.price=pprice;
        this.numberfee=pnumberfees;
    }
    calculate_payment_trip=()=>
    {
        let total=0;
        let fee_value=0;
        if(this.numberfee>6)
        {
            total=50;

        }
        else
        {
            total=0;
        }
        total=total+this.price;
        fee_value=total/this.numberfee;
        return {fee_value,total}
    }
   
}
module.exports={Destination_Pay}