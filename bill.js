let paneer = document.getElementById("paneer");
let daal = document.getElementById("daal");
let roti = document.getElementById("roti");
let rice = document.getElementById("rice");
let billBtn = document.getElementById("billBtn");

billBtn.addEventListener('click', function(){
   let pQuant =  document.getElementById('quant1').innerHTML = paneer.value;
   let pPrice =  document.getElementById('price1').innerHTML = 220 * pQuant;
   
   //Daal Price
   let dQuant =  document.getElementById('quant2').innerHTML = daal.value;
   let dPrice =  document.getElementById('price2').innerHTML = 100 * dQuant;

   //rice Price
   let rQuant =  document.getElementById('quant3').innerHTML = rice.value;
   let rPrice =  document.getElementById('price3').innerHTML = 100 * rQuant;
 
   //Roti price
   let tQuant =  document.getElementById('quant4').innerHTML = roti.value;
   let tPrice =  document.getElementById('price4').innerHTML = 15 * tQuant;

   let total = document.getElementById('totalAmnt').innerHTML = pPrice + dPrice + rPrice + tPrice;

   let gst = document.getElementById('gstAmnt').innerHTML = (total * 18)/100;

   let totalAmnt = document.getElementById('billAmnt').innerHTML = total + gst;
});