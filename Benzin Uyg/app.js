let dizel = 24.53, benzin=22.25, lpg=11.1;

let yakitTipi =prompt("Yakıt tipinizi seciniz: 1-Dizel 2-Benzin 3-LPG ");
while(yakitTipi!=1 && yakitTipi!=2 &&yakitTipi!=3){
    alert("Lutfen gecerli bir secim yapınız!");
    yakitTipi =prompt("Yakıt tipinizi seciniz: 1-Dizel 2-Benzin 3-LPG ");

}

let yakitLt = prompt("Yüklenecek yakıt litresini giriniz: ");

if(yakitTipi==1){
    //prompt fonskiyonu string değer döndürür(kullanıcıdan girilen)
    let tutar = 24.53*yakitLt;
    alert("Tutarınız: "+tutar);
}
else if(yakitTipi==2){
    let tutar = 22.25*yakitLt;
    alert("Tutarınız: "+tutar);
}
else{
    let tutar = 11.1*yakitLt;
    alert("Tutarınız: "+tutar);
}