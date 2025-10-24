let sayi=Number(prompt("Faktöriyelini hesaplamak istediğniiz sayıyı giriniz: "));

if(sayi==1 || sayi==0){
    alert(1);
}
else{
    for(let i =sayi-1;i>=1;i--){
        sayi=sayi*i;
    }

    alert(sayi);

}

