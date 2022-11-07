var potvrdi;
var ime,forma2,forma;

function ispisi(error,data){
    ajaxstatus=document.getElementById("ajaxstatus")
  let labela = document.createElement("label");
  labela.innerHTML=data.status;
  ajaxstatus.appendChild(labela);
    console.log(error, data);
  }
window.onload=function(){
    document.getElementById("button").addEventListener("click",function(){
        student={
            ime: '',
            prezime: '',
            index: '',
            grupa:''
        }
        student.ime=document.getElementById("ime").value;
        student.prezime=document.getElementById("prezime").value;
        student.index=document.getElementById("index").value;
        student.grupa=document.getElementById("nazivGrupe").value;
        StudentAjax.dodajStudenta(student, ispisi)});
}
