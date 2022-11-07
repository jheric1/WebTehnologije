const StudentAjax=(function(){

    var dodajStudenta=function(student,fnCallback){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                let jsonRez = JSON.parse(ajax.responseText);
               
                fnCallback(null,jsonRez);
            }
      
            else if (ajax.readyState == 4){
              let jsonRez = JSON.parse(ajax.responseText); 
          
              fnCallback(jsonRez.data,null);
            }
        }
        ajax.open("POST","http://localhost:3000/student",true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(student));
    }
    var postaviGrupu=function(indeks, grupa,fnCallback){
        var ajax = new XMLHttpRequest();
        
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                let jsonRez =JSON.parse(ajax.responseText);
                fnCallback(null,jsonRez);
            }
      
            else if (ajax.readyState == 4){
              let jsonRez = JSON.parse(ajax.responseText); 
          
              fnCallback(jsonRez.data,null);
            }
        }
        ajax.open("PUT","http://localhost:3000/student/"+indeks,true);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(grupa));
    }
    var dodajBatch=function(csvStudenti, fnCallback){
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200){
                let jsonRez =JSON.parse(ajax.responseText);
                fnCallback(null,jsonRez);
            }
      
            else if (ajax.readyState == 4){
              let jsonRez = JSON.parse(ajax.responseText); 
          
              fnCallback(jsonRez.data,null);
            }
        }
        ajax.open("POST","http://localhost:3000/batch/student",true);
        ajax.setRequestHeader("Content-Type", "text/plain");
        ajax.send(csvStudenti);
    }
    return {
        dodajStudenta: dodajStudenta,
        postaviGrupu: postaviGrupu,
        dodajBatch:dodajBatch
      }
      }());