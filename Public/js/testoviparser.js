var testoviparser=(function(){

    var dajTacnost = function(report) {
  
    try {
  
        var izvjestaj = JSON.parse(report);
        var paliTestovi = izvjestaj.stats.failures;
    
                var objekat = {
                "tacnost": "",
                "greske": []
            }
  
            if (paliTestovi.length===0) {
  
                objekat.tacnost = "100%";
              
            }else{
  
        var sviTestovi= izvjestaj.stats.tests;
        var prosliTestovi = izvjestaj.stats.passes;
        var tacnost=(prosliTestovi/sviTestovi)*100;
        var tacnostZaokruzena = Math.round(tacnost);
        var greske=izvjestaj.stats.failures;

            if (tacnostZaokruzena != tacnost) {
                objekat.tacnost = tacnost.toFixed(1) + "%";
            }else{
                objekat.tacnost = tacnostZaokruzena + "%";
              }
        var i=0;
  
            while(i<greske){
                objekat.greske.push(izvjestaj.failures[i].fullTitle);
                i++;
            }
            }
  
        return objekat;
            
    } 
    catch (error) {
  
        var NoviObjekat={
            "tacnost": "0%",
            "greske": ["Testovi se ne mogu izvrsiti"]
       }

        return NoviObjekat;
  
    }
    }
    var porediRezultate=function(rezultat1, rezultat2){
            var rez1 = JSON.parse(rezultat1);
            var rez2 = JSON.parse(rezultat2);
            var testoviIzRezultat1 = rez1.tests;
            var testoviIzRezultat2 = rez2.tests;
            const nizNaziva1=[];
            for(let i=0; i<rez1.tests.length; i++){
                nizNaziva1.push(rez1.tests[i].fullTitle);
            }
            const nizNaziva2=[]
            for(let j=0; j<testoviIzRezultat2.length; j++){
                nizNaziva2.push(testoviIzRezultat2[j].fullTitle);
            }
            var brojac=0;
            nizNaziva1.sort();
            nizNaziva2.sort();
            if(nizNaziva1.length==nizNaziva2.length){
            for(let i=0; i<nizNaziva1.length; i++){
                if(nizNaziva1[i]===nizNaziva2[i]) brojac++
            }
        }
        var greskeIz1=[]
        var objekat = {
            "promjena" : "",
            "greske": []
        }

        if(brojac==nizNaziva1.length && brojac!=0){
            objekat.promjena=dajTacnost(JSON.stringify(rez2)).tacnost;
            objekat.greske=dajTacnost(JSON.stringify(rez2)).greske
        } else {
            var kojiNisuU2=0;
            var nizPali1=rez1.failures
            var nizPali2=rez2.failures
            var br=0;
            for(let i=0; i<nizPali1.length; i++){
                for(let j=0; j<rez2.tests.length; j++){
                    if(nizPali1[i].fullTitle===rez2.tests[j].fullTitle) br++;
                }
                if(br==0){ kojiNisuU2++; greskeIz1.push(nizPali1[i].fullTitle)}
                br=0;
            }
            var x=((kojiNisuU2+nizPali2.length)/(kojiNisuU2+rez2.tests.length))*100
            //x=kojiNisuU2
            var xZaokruzen = Math.round(x);
            if (xZaokruzen != x) {
                objekat.promjena = x.toFixed(1) + "%";
            }else{
                objekat.promjena = xZaokruzen + "%";
              }
              if(greskeIz1.length!=0)
              objekat.greske.push(greskeIz1.sort())
              var greskeIz2=[]
              for(let i=0; i<rez2.failures.length; i++){
                  greskeIz2.push(rez2.failures[i].fullTitle)
              }
              greskeIz2.sort()
              for(let i=0; i<greskeIz2.length; i++){
              objekat.greske.push(greskeIz2[i])
              }
              
      
            }
      
            return objekat;  
        } 
        return {
            dajTacnost:dajTacnost, porediRezultate:porediRezultate
        }
    }());
