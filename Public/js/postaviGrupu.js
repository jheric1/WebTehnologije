var potvrdi;
var index,grupa,forma;

function ispisi(error,data){
    console.log(error, data);
    ajaxstatus=document.getElementById("ajaxstatus")
    let labela = document.createElement("label");
    labela.innerHTML=data.status;
    ajaxstatus.appendChild(labela);
  }
window.onload=function(){
    console.log("ovdje")
    document.getElementById("button").addEventListener("click",function(){
        index=document.getElementById("index").value;
        console.log(index+" script")
        obj={
            grupa:''
        }
        obj.grupa=document.getElementById("grupa").value;
        StudentAjax.postaviGrupu(index,obj,ispisi)});
}
