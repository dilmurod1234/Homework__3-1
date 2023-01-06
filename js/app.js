
var money = prompt('Enter your money');
var dollar = 10900;
var euro = 12272.64;
var ticket = dollar * 500;
var hotel = dollar * 250;
var museum = euro * 120;
var all = ticket + hotel + museum;
if (all <= money){
    console.log("Oq yo'l, Alisher");
}
if (all > money){
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
}