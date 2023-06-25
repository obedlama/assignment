//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}

function cal(){

distance = Number(rideDetails.distance.replace(/[^\d]/g, ''));
totalPrice = rideDetails.unitKmPrice*distance
  console.log(totalPrice)
}

cal()
//Q2 write a js function that checks if the object has status success or not
//should return true or false


const status1 ={
    status: 'onTheWay'
}
const status2 ={
    status: 'success'
}
const checkIfSucces=(x)=>{
if(x.status=='success'){
return true }
 else {
  return false
 }
}

checkIfSucces(status1)  

checkIfSucces(status2) 
