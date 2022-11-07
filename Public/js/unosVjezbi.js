var potvrdi;
var brojVjezbe,forma2,forma;

function ispisi(error,data){

    console.log(error, data);
  }
  
window.onload=function(){
    brojVjezbe=document.getElementById("brojVjezbi");
    brojVjezbe.value = 4;  
    potvrdi=document.getElementById("button");
     forma2=document.getElementById("container");
     console.log(brojVjezbe.value)
    document.getElementById("button").addEventListener("click",function(){ VjezbeAjax.dodajInputPolja(forma2,parseInt(brojVjezbe.value))});
}
