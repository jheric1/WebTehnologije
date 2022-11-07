let odabirVjezbe,zajednicki;
var vjezbeDivs = [];
function ispisi(error,data){
 if(error==null){
     VjezbeAjax.iscrtajVjezbe(odabirVjezbe,data);
     //console.log(data);
 }
    else {
       
      console.log(error, data);
    }
  }

window.onload=function(){
    odabirVjezbe=document.getElementById("odabirVjezbe");
    VjezbeAjax.dohvatiPodatke(ispisi);
  
}