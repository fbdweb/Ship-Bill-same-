/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

var shipName=document.getElementById('shippingName');
var shipZip=document.getElementById('shippingZip');
var billName=document.getElementById('billingName');
var billZip=document.getElementById('billingZip');

function billingFunction(){
  if (document.getElementById('same').checked){
   billZip.value=shipZip.value;
   billName.value=shipName.value;
  }
  else{
    billZip.value="";
   billName.value="";
  }
}
