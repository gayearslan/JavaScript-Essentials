let urun1 = {
    isim : "lenovo",
    kategori:"teknoloji",
    fiyat:3000
}
let urun2 = {
    isim : "hp",
    kategori:"teknoloji",
    fiyat:6000
}
let urun3 = {
    isim : "monster",
    kategori:"teknoloji",
    fiyat:5000
}
let urun4 = {
    isim : "asus",
    kategori:"teknoloji",
    fiyat:8000
}

let urunler = [urun1,urun2,urun3,urun4];

let kullaniciurunismi = prompt("bir urun ismi giriniz.");

let filtreliurunler = [];

filtreliurunleriDoldur(urunler);
filtreliurunleriYazdir(filtreliurunler);

function filtreliurunleriDoldur(urunler){
    urunler.forEach(function(urun){
    if(urun.isim.toUpperCase().includes(kullaniciurunismi.toUpperCase(),0)){
        filtreliurunler.push(urun);
   }
   })
}

function filtreliurunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("------------------");
        console.log("|"+urun.isim+"|"+urun.fiyat+"|"+urun.kategori);
        console.log("------------------");
    })
}





