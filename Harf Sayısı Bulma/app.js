//20.00
let metin = "Gaye Javascript ogreniyor ";

let harf = prompt("harfi giriniz:");

let sonuc= bul(harf);
alert(sonuc);

let kelimesayisi = kackelime();
alert(kelimesayisi);

function bul(harf){
    let sayac=0;
    for(let i =0;i<metin.length;i++){
        if(harf===metin.charAt(i)){
            sayac++;
        }
    }
    return sayac;
}


function kackelime(){
    let sayac=0;
    for(let i =0;i<metin.length;i++){
        if(metin.charAt(i)===' '){
            sayac++;
        }
    }
    return sayac;
}