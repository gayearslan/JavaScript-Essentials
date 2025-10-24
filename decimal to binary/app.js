cevir(6);

function cevir(number){
    let binary="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
            binary+=1;
            break;
        }
    }
    let result = reverse(binary);
    alert(binary);
}

function reverse(binary){
    let revBin="";
    for(let i = binary.length-1;i>=0;i--){
        revBin=binary.charAt(i);
    }
    return revBin;
}