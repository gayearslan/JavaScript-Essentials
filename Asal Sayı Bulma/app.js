let sayi = Number(prompt("Denemek istediğiniz sayıyı giriniz: "));
let sonuc= true;
for(let i =2;i<sayi;i++){
    if(sayi%i==0){
        sonuc =false;
        break;
    }
}

if(sonuc){
    alert(sayi+"asaldr");
}
else{
    alert(sayi+"asal değildir");
}


