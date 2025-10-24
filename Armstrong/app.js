let sayi = Number(prompt("Armstrong mu hesaplamak istediğiniz sayıyı giriniz: "));
let temp = sayi;
let basamakSayisi = 0;

// Basamak sayısını bulma
while (temp > 0) {
    temp = Math.floor(temp / 10);
    basamakSayisi++;
}

let sonuc = 0;
temp = sayi;

// Armstrong kontrolü
while (temp > 0) {
    let basamak = temp % 10;
    temp = Math.floor(temp / 10);
    sonuc += Math.pow(basamak, basamakSayisi);
}

if (sonuc === sayi) {
    alert("Sayınız Armstrong sayısıdır.");
} else {
    alert("Sayınız Armstrong sayısı değildir.");
}
