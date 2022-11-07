const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
let http = require('http');
const fs = require('fs');
const app = express();
const sequelize = require('./wt2118780');
const grupa=require('./grupa.js');
const student=require('./student.js');
const vjezba=require('./vjezba.js');
const zadatak=require('./zadatak.js');
grupa.hasMany(student, {as:'grupaStudenti'})
vjezba.hasMany(zadatak, {as:'vjezbaZadaci'})
sequelize.sync().then(result=>{
console.log(result);
}).catch(err=>{
    console.log(err);
});
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('Public'))
app.use(express.static('Public/html'))
app.use(express.static('Public/js'))
app.use(express.static('Public/css'))
app.use(express.static('Public/images'))



app.get('/vjezbe',function(req,res){
    vjezba.findAll().then((vjezbeIzBaze)=>{
        let vjezbe=vjezbeIzBaze.length;
        let ids=[];
        let zadaci=[];
        for(let i=0; i<vjezbe; i++){
            ids.push(vjezbeIzBaze[i].id)
            zadaci.push(0);
        }
        return zadatak.findAll().then((zadaciIzBaze)=>{
            for(let i=0; i<zadaciIzBaze.length; i++){
                zadaci[parseInt(zadaciIzBaze[i].vjezbaId)-1]++;
            }
            let obj={
                brojVjezbi : vjezbe,
                brojZadataka : zadaci
            }
            res.end(JSON.stringify(obj));
        })
    })
});

app.post('/vjezbe', function(req,res){
   let tijelo = req.body;
   let brojVjezbi=tijelo['brojVjezbi'];
   let zadaci=tijelo['brojZadataka'];
   let pogresni=[];
   if(brojVjezbi<1 || brojVjezbi>15){
       pogresni.push("brojVjezbi");
   }
   

   for(var i=0; i<zadaci.length; i++){
       if(zadaci[i]<0 || zadaci[i]>10){
           pogresni.push("z"+(i));
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
       res.status(400);
       res.send(JSON.stringify(objekat));
       return;
   }
   let vjezbe=[]
   let zadaciRez=[]
   let ids=[]
   for(var i=1; i<=brojVjezbi; i++){
    let objekatVjezbe={
        naziv: ''
    }
    objekatVjezbe.naziv='Vjezba'+i
    vjezbe.push(objekatVjezbe);
   }
   zadatak.destroy({
    truncate: true,
    where : {}
}).then(()=>{
    return vjezba.destroy({
        truncate: true,
        where : {}
    })
}).then(()=>{
  return vjezba.bulkCreate(vjezbe).then(()=>{
    return vjezba.findAll().then((rez)=>{
           for(let k=0; k<rez.length; k++){
               ids.push(rez[k].id)
           }
       }).then(()=>{
        for(var i=1; i<=brojVjezbi; i++){
            for(var j=1; j<=zadaci[i-1]; j++){
                let objekatZadaci=new Object();
            objekatZadaci.naziv="Zadatak"+j;
            objekatZadaci.vjezbaId=ids[i-1];
            zadaciRez.push(objekatZadaci);
       }
    }
       return zadatak.bulkCreate(zadaciRez).then(()=>{
           let obj={
               brojVjezbi1 : brojVjezbi,
               brojZadataka : zadaci
           }
        res.send(JSON.stringify(obj));
       })
    })
})
})
 });
 app.post('/student', function(req,res1){
let body=req.body;
let ime1=body['ime'];
let prezime1=body['prezime'];
let indeks=body['index'];
let grupa1=body['grupa'];
let obj={
    status:''
}
student.findAll({
    where : {index:indeks}
}).then((rez)=>{
    if(rez.length!=0) {
        obj.status="Student sa indexom " +indeks+" već postoji"
        res1.send(JSON.stringify(obj));
    } else {
        return grupa.findOrCreate({where:{naziv:grupa1}}).then((trazenaGrupa)=>{
            student.create({ime:ime1, prezime:prezime1, index: indeks, grupa:trazenaGrupa[0].naziv, grupaId:trazenaGrupa[0].id})
            obj.status="Kreiran student";
            res1.send(JSON.stringify(obj));
        })
    }
})
});
app.put('/student/:index', function(req, res){

    let body=req.body;
    let nazivGrupe=body['grupa'];
    let indeks=req.params.index;
    let obj={
        status: ''
    }
    student.findOne({
        where : {index:indeks}
}).then((rez1)=>{
    if(rez1===null){
        obj.status="Student sa indexom " +indeks +" ne postoji"
        res.send(JSON.stringify(obj));
    }else {
        return grupa.findOrCreate({where:{naziv:nazivGrupe}}).then((trazenaGrupa)=>{
            rez1.grupa=trazenaGrupa[0].naziv;
            rez1.grupaId=trazenaGrupa[0].id;
            rez1.save();
            obj.status="Promjenjena grupa studentu "+ indeks;
            res.send(JSON.stringify(obj));
    })
}
})
});
app.post('/batch/student', function(req, res){
    let csv=req.body;
    let postoje=[];
    let nePostoje=[];
    let studentiNiz=[];
    let grupeIzCsv=[];
    let grupeBezDuplikata=[];
    let nizGrupaObjekata=[];
    let nizIndexa=[];
    let nizIndexaBezDuplikata=[];
    let bool=0;
    let nizZaBulkStudent=[];
    let obj={
        status: ''
    }
    let promises=[];
        let lines = csv.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0});
        for(let i=0; i<lines.length; i++){
            let spisakParametara=lines[i].split(',');
            let studentiObjekat={
                ime: '',
                prezime: '',
                index: '',
                grupa: '', 
                grupaId:1
            }
            studentiObjekat.ime=spisakParametara[0];
            studentiObjekat.prezime=spisakParametara[1];
            studentiObjekat.index=spisakParametara[2];
            studentiObjekat.grupa=spisakParametara[3];
            //grupeIzCsv.push(spisakParametara[3]);
            studentiNiz.push(studentiObjekat);
        }
            studentiNiz =studentiNiz.filter((value, index, self) =>
            index === self.findIndex((t) => (
            t.index === value.index
            ))
            )
        student.findAll().then((nadjeniStudenti)=>{
            for(let i=0; i<studentiNiz.length; i++){
                for(let j=0; j<nadjeniStudenti.length; j++){
                    if(studentiNiz[i].index===nadjeniStudenti[j].index){
                        postoje.push(studentiNiz[i])
                    }
                }
            }
            nePostoje=studentiNiz.filter( ( el ) => !postoje.includes( el ) );
            studentiNiz = studentiNiz.filter( ( el ) => !postoje.includes( el ) );
                for(let i=0; i<studentiNiz.length; i++){
                    grupeIzCsv.push(studentiNiz[i].grupa);
                }
                grupeBezDuplikata = grupeIzCsv.filter((c, index) => {
                    return grupeIzCsv.indexOf(c) === index;
                });
                    for(let i=0; i<grupeBezDuplikata.length; i++){
                        let grupeObjekat={
                            naziv: ''
                        }
                    grupeObjekat.naziv=grupeBezDuplikata[i];
                    nizGrupaObjekata.push(grupeObjekat);
                    }
        }).then(()=>{
         return grupa.findAll();
        }).then((nadjeneGrupe)=>{
            for(let i=0; i<nizGrupaObjekata.length; i++){
                for(let j=0; j<nadjeneGrupe.length; j++){
                    if(nizGrupaObjekata[i].naziv===nadjeneGrupe[j].naziv){
                         nizGrupaObjekata.splice(i, 1);
                         bool=1;
                         break;
                    }
                }
                if(bool===1) i--;
                bool=0;
            }
        }).then(()=>{
           return grupa.bulkCreate(nizGrupaObjekata);
        }).then(()=>{
            return grupa.findAll();
        }).then((nadjeneGrupe)=>{
            for(let i=0; i<studentiNiz.length; i++){
                let obj = nadjeneGrupe.find(o => o.naziv === studentiNiz[i].grupa);
                studentiNiz[i].grupaId=obj.id;
                nizZaBulkStudent.push(studentiNiz[i]);
            }
            return student.bulkCreate(nizZaBulkStudent);
        }).then(()=>{
            if(postoje.length===0) obj.status="Dodano " +nePostoje.length.toString()+ " studenata!";
            else {
                for(let i=0; i<postoje.length; i++){
                    nizIndexa.push(postoje[i].index);
                }
                nizIndexaBezDuplikata = nizIndexa.filter((c, index) => {
                    return nizIndexa.indexOf(c) === index;
                });
                obj.status="Dodano " +nePostoje.length.toString()+" studenata, a studenti "+ nizIndexaBezDuplikata.toString() +" već postoje!";
            }
            res.send(JSON.stringify(obj));
        })
});

const server = app.listen(3000, () => {
    console.log("Uspjesno otvoren port 3000");
});
 
module.exports = server;
