// Create variables for the welcome message
var greeting = "[null]";
var name = "[null]";
var message = "[null]";

// concat vars
var welcome = greeting+name+message;

var sign = "[null]";
var tiles = "[null]";
var subTotal = "[null]";
var shipping = "[null]";
var grandTotal = "[null]";
//write function();
 //initialize vars
(function(){
initializeVars();
setTextContentById('greeting',welcome  );
setTextContentById('userSign',sign );
setTextContentById('tiles', titles);
setTextContentById('subTotal',subTotal );
setTextContentById('shipping', shipping);
setTestContentById('grandTotal', grandTotal);
 }

 function setTextContentById (getId, setText){
   var s = document.getElementById (getId);
   s.textContent = setText;
 }
  function initializeVars(){
    howdy = "Hello";
    name = 'You';
    message = ', please check your order:';
    welcome = greeting+name+message;

// Create variables to hold details about the sign
  sign = 'Montague House';
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;

  subTotal = "$" subTotal;
  shipping = "$" shipping;
  grandTotal = "$" grandTotal;
}
//function set
function reset(){
  event.preventDefault();
  greeting = "[null]";
  tiles = "[0]";
  subTotal "[10]";
  shipping = "[10]"
  grandTotal = "[10]";
  
+setTextContentById("greeting", welcome);
+setTextContentById("userSign",sign );
+setTextContentById("tiles", titles);
+setTextContentById("subTotal",subTotal );
+setTextContentById("shipping", shipping);
+setTestContentById("grandTotal", grandTotal);
}
//function pay
function payNow() {
setTextContentById("greeting",welcome  );
setTextContentById("userSign",sign );
setTextContentById("tiles", titles);
setTextContentById("subTotal",subTotal );
setTextContentById("shipping", shipping);
setTestContentById("grandTotal", grandTotal);
}