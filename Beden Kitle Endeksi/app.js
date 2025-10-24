let kilo=Number(window.prompt("Lütfen kilonuzu giriniz: "));
let boy=Number(window.prompt("Lütfen boyunuzu giriniz: "));

boy=boy/100;

let vki = kilo/(boy*boy);

window.alert("Beden kitle endeksiniz: "+vki);