
const yeniSatir="\r\n";

let metin ="ATM'ye Hoşgeldiniz!"+yeniSatir
+"1-Bakiye Görüntüleme"+yeniSatir+"2-Para Cekme"+yeniSatir
+"3-Para Yatırma"+yeniSatir+"4-Çıkış";

let secim=0;

let bakiye=0;
while(secim!=-1){
    secim=prompt(metin);
    switch(secim){
        case "1":
            alert("Bakiyeniz: "+bakiye);
            break;
        case "2":
            let cekilecek=Number(prompt("Çekmek istediginiz miktari giriniz: "));
            bakiye-=cekilecek;
            alert("Yeni Bakiyeniz: "+bakiye);
            break;
        case "3":
            let yatirilacak=Number(prompt("Yatırmak istediginiz miktari giriniz: "));
            bakiye+=yatirilacak;
            alert("Yeni Bakiyeniz: "+bakiye);
            break;
        case "4":
            secim=-1;
            break;
        default:
            alert("Lutfen gecerli bir secim yapiniz");
            break;
        }
}