var potvrdi;
var csv,forma2,ajaxstatus;

function ispisi(error,data){
  ajaxstatus=document.getElementById("ajaxstatus")
  let labela = document.createElement("label");
  labela.innerHTML=data.status;
  ajaxstatus.appendChild(labela);
/*
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
*/
    console.log(error, data);
  }
window.onload=function(){
    document.getElementById("button").addEventListener("click",function(){
        csv=document.getElementById("csv").value;
        console.log(csv);
        StudentAjax.dodajBatch(csv, ispisi)});
}
