let assert=chai.assert
describe('testoviparser', function(){
    describe('dajTacnost()', function(){
        it('SviProsli',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 5,
                "pending": 0,
                "failures": 0,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [],
            "passes": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
        ]}` 

        var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
        assert.equal(JSON.stringify(tacnostobjekat),'{"tacnost":"100%","greske":[]}');
        assert.equal(tacnostobjekat.tacnost,"100%","tacnost mora biti 100%")
        assert.equal(tacnostobjekat.greske.length, 0, "niz ne smije imati elemente")

                
        });
        it('SviPali',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 0,
                "pending": 0,
                "failures": 5,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [ 
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": []
        }` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(JSON.stringify(tacnostobjekat),'{"tacnost":"0%","greske":["test1","test2","test3","test4","test5"]}');
            assert.equal(tacnostobjekat.tacnost,"0%","tacnost mora biti 0%")
            assert.equal(tacnostobjekat.greske.length,5, "niz mora imati 5 elemenata")
            assert.equal(tacnostobjekat.greske[0], "test1")
            assert.equal(tacnostobjekat.greske[1], "test2")
            assert.equal(tacnostobjekat.greske[2], "test3")
            assert.equal(tacnostobjekat.greske[3], "test4")
            assert.equal(tacnostobjekat.greske[4], "test5")          
    });
        it('JedanProsao',function(){
                var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 1,
                "pending": 0,
                "failures": 4,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
        ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"20%","tacnost mora biti 20%")
            assert.equal(tacnostobjekat.greske.length,4, "niz mora imati 4 elementa")
            assert.equal(tacnostobjekat.greske[0], "test2", "prvi element mora biti test2")
            assert.equal(tacnostobjekat.greske[1], "test3", "drugi element mora biti test3")
            assert.equal(tacnostobjekat.greske[2], "test4", "treci element mora biti test4")
            assert.equal(tacnostobjekat.greske[3], "test5", "cetvrti element mora biti test5")


                
    });
        it('JedanPao',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 4,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"80%","tacnost mora biti 80%")
            assert.equal(tacnostobjekat.greske.length,1, "niz mora imati 1 elemet")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element mora biti test1")

                
    });
        it('DvaPala',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"60%","tacnost mora biti 60%")
            assert.equal(tacnostobjekat.greske.length,2, "niz mora imati 2 elementa")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element mora biti test1")
            assert.equal(tacnostobjekat.greske[1], "test2", "drugi element mora biti test2")
      
    });

        it('DvaProsla',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 2,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"40%","tacnost mora biti 40%")
            assert.equal(tacnostobjekat.greske.length,3, "niz mora imati 3 elementa")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element mora biti test1")
            assert.equal(tacnostobjekat.greske[1], "test2", "drugi element mora biti test2")
            assert.equal(tacnostobjekat.greske[2], "test5", "treci element mora biti test5")

                
        });
        it('DecimalnaTacnost',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 6,
                "passes": 1,
                "pending": 0,
                "failures": 5,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test6",
                "fullTitle": "test6",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test6",
                "fullTitle": "test6",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"16.7%","tacnost mora biti 16.7%")
            assert.equal(tacnostobjekat.greske.length,5, "niz mora imati 5 elementa")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element mora biti test1")
            assert.equal(tacnostobjekat.greske[1], "test2", "drugi element mora biti test2")
            assert.equal(tacnostobjekat.greske[2], "test3", "treci element mora biti test3")
            assert.equal(tacnostobjekat.greske[3], "test5", "cetvrti element mora biti test5")
            assert.equal(tacnostobjekat.greske[4], "test6", "peti element mora biti test6")

                
        });
        it('NeIzvrsavaSe',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 5,
                "passes": 3,
                "pending": 0,
                "failures": 2,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
            "tests": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "pending": [],
            "failures": [
                {
                "title": "test1",
                "fullTitle": "test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test2",
                "fullTitle": "test2",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ],
            "passes": [
                {
                "title": "test3",
                "fullTitle": "test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test4",
                "fullTitle": "test4",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "test5",
                "fullTitle": "test5",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
                ]}` 

            var tacnostobjekat=testoviparser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"0%","tacnost mora biti 0%")
            assert.equal(tacnostobjekat.greske, "Testovi se ne mogu izvrsiti", "Testovi se ne mogu izvrsiti, izuzetak")
          

                
        });

  
    });

});
