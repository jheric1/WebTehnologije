const chai=require('chai');
const chaiHttp=require('chai-http');
chai.use(chaiHttp);
chai.should();
let assert=chai.assert;
const Sequelize = require('sequelize');
const sequalize = require('./wt2118780');
const grupa=require('./grupa.js');
const student=require('./student.js');
const vjezba=require('./vjezba.js');
const zadatak=require('./zadatak.js');
const server=require('./index.js');
let grupeIzBaze=[];
let studentiIzBaze=[];
describe('testovi 4.', function(){
    before(function (done) {
        sequalize.sync().then(()=>{
                return grupa.findAll()
            }).then((nadjeneGrupe)=>{
            for(let i=0; i<nadjeneGrupe.length; i++){
                let grupeObj={
                    naziv:''
                }
                grupeObj.naziv=nadjeneGrupe[i].naziv
                grupeIzBaze.push(grupeObj);
            }
            return student.findAll();
        }).then((nadjeniStudenti)=>{
            for(let i=0; i<nadjeniStudenti.length; i++){
                let studentObjekat={
                    ime: '',
                    prezime: '',
                    index: '',
                    grupa: '',
                    grupaId: 1
                }
                studentObjekat.ime=nadjeniStudenti[i].ime;
                studentObjekat.prezime=nadjeniStudenti[i].prezime;
                studentObjekat.index=nadjeniStudenti[i].index;
                studentObjekat.grupa=nadjeniStudenti[i].grupa;
                studentObjekat.grupaId=nadjeniStudenti[i].grupaId;
                studentiIzBaze.push(studentObjekat);
            }
             sequalize.sync({force:true})
        }).then(()=>{
            done();
        })
    });
    after(function (done) {
        sequalize.sync({force:true}).then(()=>{
              return  grupa.bulkCreate(grupeIzBaze);
            }).then(()=>{
            return student.bulkCreate(studentiIzBaze);
        }).then(()=>{
            done();
        })
    });
    afterEach(function(done){

        sequalize.sync({force:true}).then(()=>{
            done();
        })
    })
    beforeEach(function(done){
        sequalize.sync({force:true}).then(()=>{
            done();
        })
    })
    describe('test za POST/student', function(){
        it('postavljanje studenta', async function () {
                let studentObjekat={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18780',
                    grupa: 'grupa1'
                }
            let response=await chai.request(server)
                .post('/student')
                .set('content-type', 'application/json')
                .send(JSON.stringify(studentObjekat))
            JSON.parse(response.text).status.should.be.eql("Kreiran student")
            let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(1);
            izBaze[0].ime.should.be.eql("Jasmina");
            izBaze[0].index.should.be.eql("18780")
            })
            it('postavljanje 2 ista studenta', async function () {
                let studentObjekat={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18780',
                    grupa: 'grupa1'
                }
            let response=await chai.request(server)
                .post('/student')
                .set('content-type', 'application/json')
                .send(JSON.stringify(studentObjekat))

            let response2=await chai.request(server)
                .post('/student')
                .set('content-type', 'application/json')
                .send(JSON.stringify(studentObjekat))


            JSON.parse(response.text).status.should.be.eql("Kreiran student");
            JSON.parse(response2.text).status.should.be.eql("Student sa indexom 18780 već postoji");
            let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(1);
            izBaze[0].ime.should.be.eql("Jasmina");
            izBaze[0].index.should.be.eql("18780")
            let baza=await grupa.findAll();
            baza[0].naziv.should.be.eql("grupa1")
            izBaze[0].grupaId.should.be.eql(baza[0].id);
            })
            it('postavljanje 2 studenta', async function () {
                let studentObjekat={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18780',
                    grupa: 'grupa1'
                }
            let response=await chai.request(server)
                .post('/student')
                .set('content-type', 'application/json')
                .send(JSON.stringify(studentObjekat))
            let studentObjekat2={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18781',
                    grupa: 'grupa2'
                }
            let response2=await chai.request(server)
                .post('/student')
                .set('content-type', 'application/json')
                .send(JSON.stringify(studentObjekat2))


            JSON.parse(response.text).status.should.be.eql("Kreiran student");
            JSON.parse(response2.text).status.should.be.eql("Kreiran student");
            let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(2);
            izBaze[0].index.should.be.eql("18780");
            izBaze[1].index.should.be.eql("18781")
            let baza=await grupa.findAll();
            baza.should.have.lengthOf(2);
            baza[0].naziv.should.be.eql("grupa1")
            baza[1].naziv.should.be.eql("grupa2")
            izBaze[0].grupaId.should.be.eql(baza[0].id);
            izBaze[1].grupaId.should.be.eql(baza[1].id);
            })
    })
    describe('test za PUT/student/:index', function(){
        it('postavljanje grupe za nepostojeceg studenta', async function () {
                let grupaObjekat={
                  naziv:'grupa2'
                }
            let response=await chai.request(server)
                .put('/student/18780')
                .set('content-type', 'application/json')
                .send(JSON.stringify(grupaObjekat))
            JSON.parse(response.text).status.should.be.eql("Student sa indexom 18780 ne postoji")
            let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(0);

            })
            /*
            it('postavljanje grupe za postojeceg studenta', async function () {
                let grupaObjekat={
                    naziv:'grupa1'
                  }
                  let gr=await grupa.create(grupaObjekat)
                 let studentObjekat={
                     ime: 'Jasmina',
                     prezime: 'Herić',
                     index: '18780',
                     grupa: 'grupa1',
                     grupaId: 1
                 }
                 studentObjekat.grupaId=gr.id;
                 await student.create(studentObjekat)
                     let grupaObjekat2={
                       naziv:'grupa2'
                     }
                 let response=await chai.request(server)
                     .put('/student/18780')
                     .set('content-type', 'application/json')
                     .send(JSON.parse(JSON.stringify(grupaObjekat2)))
                     console.log("poslije zahtjeva")
                 JSON.parse(response.text).status.should.be.eql("grupa prom")
     
                 }).timeout(10000)
                 */
                 
        })
        describe('test za POST/batch/student', function(){
            it('vecina slucajeva', async function () {
                let csv='meho,mehic,18780,grupa7'+'\n'+'meho,mehic,18781,grupa3'+'\n'+'meho,mehic,18782,grupa3'+'\n'+'meho,mehic,18783,grupa3'+'\n'+'meho,mehic,18784,grupa5'+'\n'+'meho,mehic,18784,grupa5'
                let response=await chai.request(server)
                     .post('/batch/student')
                     .set('content-type', 'text/plain')
                     .send(csv)
                     JSON.parse(response.text).status.should.be.eql("Dodano 5 studenata!")
                     let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(5);
            izBaze[0].index.should.be.eql("18780");
            izBaze[1].index.should.be.eql("18781");
            izBaze[2].index.should.be.eql("18782");
            izBaze[3].index.should.be.eql("18783");
            izBaze[4].index.should.be.eql("18784");
            let baza=await grupa.findAll();
            baza.should.have.lengthOf(3);
            baza[0].naziv.should.be.eql("grupa7");
            baza[1].naziv.should.be.eql("grupa3");
            baza[2].naziv.should.be.eql("grupa5");
            console.log()

            })
            it('student vec postoji', async function () {
                let grupaObjekat={
                    naziv:'grupa1'
                  }
                  let gr=await grupa.create(grupaObjekat)
                 let studentObjekat={
                     ime: 'Jasmina',
                     prezime: 'Herić',
                     index: '18780',
                     grupa: 'grupa1',
                     grupaId: 1
                 }
                 studentObjekat.grupaId=gr.id;
                 await student.create(studentObjekat)
                 let csv="Jasmina,Herić,18780,grupa1"
                 let response=await chai.request(server)
                     .post('/batch/student')
                     .set('content-type', 'text/plain')
                     .send(csv)
                     JSON.parse(response.text).status.should.be.eql("Dodano 0 studenata, a studenti 18780 već postoje!");
                     let izBaze=await student.findAll();
            izBaze.should.have.lengthOf(1);
            izBaze[0].index.should.be.eql("18780");

            })
            it('dodan jedan dva vec postoje', async function () {
                let grupaObjekat={
                    naziv:'grupa1'
                  }
                  let gr=await grupa.create(grupaObjekat)
                 let studentObjekat={
                     ime: 'Jasmina',
                     prezime: 'Herić',
                     index: '18780',
                     grupa: 'grupa1',
                     grupaId: 1
                 }
                 studentObjekat.grupaId=gr.id;
                 await student.create(studentObjekat)
                 let studentObjekat2={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18781',
                    grupa: 'grupa1',
                    grupaId: 1
                }
                let studentObjeka3={
                    ime: 'Jasmina',
                    prezime: 'Herić',
                    index: '18782',
                    grupa: 'grupa1',
                    grupaId: 1
                }
                await student.create(studentObjekat2);
                await student.create(studentObjeka3)
                 let csv="Jasmina,Herić,18780,grupa1\nJasmina,Herić,18781,grupa1\nJasmina,Herić,18783,grupa7"
                 let response=await chai.request(server)
                     .post('/batch/student')
                     .set('content-type', 'text/plain')
                     .send(csv)
                     JSON.parse(response.text).status.should.be.eql("Dodano 1 studenata, a studenti 18780,18781 već postoje!");

            })
        })

});