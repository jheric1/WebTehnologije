const VjezbeAjax=(function(){

var dodajInputPolja=function(form,brojVjezbi){
    if(brojVjezbi>0 && brojVjezbi<=15 ){
      for(let i=0; i<brojVjezbi; i++){
        let div = document.createElement("div"); 
        div.setAttribute("class", "form-row");
    
        let labela = document.createElement("label");
        labela.setAttribute("for", "z"+i);
        labela.innerHTML="Broj zadataka za vjezbu " + (i+1)+": ";
    
        let input = document.createElement("input"); 
        input.value = 4; 
        input.setAttribute("min", "0");
        input.setAttribute("max", "10");
        input.setAttribute("type", "number"); 
        input.setAttribute("id", "z"+i); 
        input.setAttribute("name", "z"+i); 
    
        div.appendChild(labela);      
        div.appendChild(input); 
    
        form.appendChild(div);
      }
      
    let button = document.createElement("input");   
    button.setAttribute("type", "button");  
    button.setAttribute("value", "Posalji");
    button.setAttribute("id", "posalji");
    form.appendChild(button);  
    //button.addEventListener("click",function(){ VjezbeAjax.posaljiPodatke(form, ispisi)});
    button.addEventListener("click",function(){ VjezbeAjax.posaljiPodatke(form, (error,data)=>{
    
      if(error==null){
        ispisi(null,data);
      }
      else {
        alert("Pogresno ste unijeli broj zadataka, ponovite unos! ");
    
        
      }
    })});
    
    }
    else{
     alert("Pogresan parametar broj vjezbi, ponovite unos!");
    }
    
    
    }
    var  posaljiPodatke=function(form, fnCallback){
  
      let brojVjezbi, brojZadataka=[]; 
      brojVjezbi = form.length - 1; 
      for(let i=0; i<brojVjezbi; i++){
        brojZadataka.push(parseInt(form.elements[i].value));
      }
      
      var object = {
        brojVjezbi:brojVjezbi, 
        brojZadataka:brojZadataka
      }
    
      var ajax = new XMLHttpRequest();
      ajax.onreadystatechange = function() {// Anonimna funkcija
          if (ajax.readyState == 4 && ajax.status == 200){
              let jsonRez = JSON.parse(ajax.responseText);
             
              fnCallback(null,jsonRez);
          }
    
          else if (ajax.readyState == 4){
            let jsonRez = JSON.parse(ajax.responseText); 
        
            fnCallback(jsonRez.data,null);
          }
      }
      ajax.open("POST","http://localhost:3000/vjezbe",true);
      ajax.setRequestHeader("Content-Type", "application/json");
      ajax.send(JSON.stringify(object));
    
    
    
    }

var dohvatiPodatke=function(fnCallback){
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function(){
  if (ajax.readyState == 4 && ajax.status == 200){
    let jsonRez = JSON.parse(ajax.responseText); 
    let brojVjezbi=jsonRez.brojVjezbi;
    let zadaci=jsonRez.brojZadataka;
    let pogresni=[];
    if(brojVjezbi<1 || brojVjezbi>15){
        pogresni.push("brojVjezbi");
        
    }
    
    for(var i=0; i<zadaci.length; i++){
        if(zadaci[i]<0 || zadaci[i]>10){
            pogresni.push("z"+(i+1));
        }
    }
    if(brojVjezbi!=zadaci.length || zadaci.length<0 || zadaci.length>15 ){
      pogresni.push("brojZadataka");
  }

    let objekat={
      status:'error',
      data:"Pogresan parametar "+ pogresni
  }
  

  if(pogresni.length>0) {
    res.status(404);
    res.send(JSON.stringify(objekat));
    return;
}
    fnCallback(null,jsonRez);
  }

else if (ajax.readyState == 4 && ajax.status==400){
  let jsonRez = JSON.parse(ajax.responseText); 
  fnCallback(jsonRez.data,null);
}
  }
  ajax.open("GET","http://localhost:3000/vjezbe",true);
  ajax.setRequestHeader("Content-Type", "application/json");
  ajax.send();

}



var iscrtajVjezbe=function(odabirVjezbe,objekat){
  vjezbeDivs = []; 
  var brojVjezbi1=objekat.brojVjezbi;
  var brojZadataka1=objekat.brojZadataka;
   if(brojVjezbi1>15 || brojVjezbi1<=0){
     console.log("Pogresan broj vjezbi");
     return ;
   }

   for(let i=0; i<brojVjezbi1; i++){
    let prazanDiv=document.createElement("div");
    prazanDiv.setAttribute("id", "divVjezbe"+(i+1));
    prazanDiv.hidden = true; 
    let button = document.createElement("input");   
    button.setAttribute("type", "button");  
    button.setAttribute("id","vjezbe"+(i+1));
    button.setAttribute("value", "Vjezba"+(i+1));
      odabirVjezbe.appendChild(button);
    odabirVjezbe.appendChild(prazanDiv);
    vjezbeDivs.push(prazanDiv); 
   button.addEventListener("click",function(){ VjezbeAjax.iscrtajZadatke(prazanDiv,parseInt(brojZadataka1[i]))}); 
   
   }
}

var iscrtajZadatke=function(vjezbe, brojZadataka){ 
  vjezbe.innerHTML="";
  if(brojZadataka>=1 && brojZadataka<=15){
    for(let i = 0; i<vjezbeDivs.length; i++){
        if(vjezbeDivs[i].getAttribute("id") == vjezbe.getAttribute("id")){ //namještam da trenutno kliknutu vjezbu provjerim u nizu
          let currentHiddenValue = vjezbe.hidden; //spasim ttrenutnu vrijednosti 
          if(currentHiddenValue){                // ako je trenutna vrijednost hidden true postavljam je na suprotnu tj otkrivam div
            vjezbeDivs[i].hidden = false; 
          }
          else {
            vjezbeDivs[i].hidden = true; // u suprotnom ako je otkrivena a kliknuli smo na nju opet postavljam je na sakriveno tj hidden false
          } 
        }  
        else
        vjezbeDivs[i].hidden = true; //sve ostale vrijednosti koje nisu iste kao trenutna postavljam na sakriveno tako postizem da mi se klikom jedna otkrije i klikom na drugu sve ostale zatvore
    }

    for(let i=0; i<brojZadataka; i++){
      let button = document.createElement("input");   
      button.setAttribute("type", "button");  
      button.setAttribute("id","z"+(i+1));
      button.setAttribute("value", "Zadatak"+(i+1));  
      vjezbe.appendChild(button);    
    }  
  }
  else {

    vjezbe.innerHTML="";

  }
  
}  

return {
  iscrtajZadatke: iscrtajZadatke,
  iscrtajVjezbe: iscrtajVjezbe,
  dohvatiPodatke: dohvatiPodatke,
  posaljiPodatke: posaljiPodatke,
  dodajInputPolja: dodajInputPolja
}
}());
