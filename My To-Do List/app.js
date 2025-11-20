
document.getElementById("eklebtn").addEventListener("click",gorevekle);

function gorevekle(){
    let yenigorevmtn = document.getElementById("yenigorevmtn").value;
    let gorevsatiri = document.createElement("li");
    let gorevmtn = document.createTextNode(yenigorevmtn);
    gorevsatiri.appendChild(gorevmtn);
    document.getElementById("liste").appendChild(gorevsatiri);
    silbutonuekle(gorevmtn,gorevsatiri);
    checkboxekle(gorevmtn,gorevsatiri);
    console.log(gorevmtn);
}

function silbutonuekle(gorevmtn,gorevsatiri){
    if(gorevmtn!=null){
        let silbtn = document.createElement("button");
        silbtn.addEventListener("click",function(){
            gorevsatiri.remove();
        });
        silbtn.innerText="Sil";
        gorevsatiri.appendChild(silbtn);
    }
}

function checkboxekle(gorevmtn,gorevsatiri){
    if(gorevmtn!=null){
        let checkkutu = document.createElement("input");
        checkkutu.type="checkbox";
        gorevsatiri.appendChild(checkkutu);
    }
}







