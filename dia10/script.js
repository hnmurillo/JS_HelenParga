function fetchCardPareja(){
    let xhr = new XMLHttpRequest();
    let cardID = dcument.getElemntById("cardID").value;
    console.log(cardID);
    let url =`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1/${cardID}`;
    xhr.open(`GET`,url,true);
    xhr.onreadystatechange= function(){
        if (this.readyState === 4 && this.status == 200){
            let reponse =JSON.parse(this.responseText);
            console.log(response);
            displayParejas(response)
     
    } else if (this.readyState ===4){
        console.log("Error:",this.statusText);
    }

};
xhr.send();
}
 function displayParejas(data){
    let cardinfo=document.getElementById("Parejascarta");
 }