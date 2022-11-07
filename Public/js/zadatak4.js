let assert=chai.assert
describe('testoviparser', function(){
    describe('porediRezultate()', function(){
        it('IdenticniNazivi',function(){
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

        var tacnostobjekat=testoviparser.porediRezultate(izvjestaj, izvjestaj)
        assert.equal(tacnostobjekat.promjena,"100%","tacnost mora biti 100%")
        assert.equal(tacnostobjekat.greske.length, 0, "niz ne smije imati elemente")

                
        });
        it('RazlicitiNaziviPoJedanPada',function(){
            var rezultat1=`{
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
            var rezultat2=`{
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
                "title": "proba1",
                "fullTitle": "proba1",
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
                "title": "proba1",
                "fullTitle": "proba1",
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

            var tacnostobjekat=testoviparser.porediRezultate(rezultat1, rezultat2)
            assert.equal(tacnostobjekat.promjena,"33.3%","tacnost mora biti 33.3%")
            assert.equal(tacnostobjekat.greske.length, 2, "niz mora imati 2 elemente")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element niza mora biti test1")
            assert.equal(tacnostobjekat.greske[1], "proba1", "drugi element niza mora biti proba1")

                
        });
        it('RazlicitiNaziviVisePada',function(){
            var rezultat1=`{
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
                }
            ],
            "passes": [
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
            var rezultat2=`{
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
                "title": "proba1",
                "fullTitle": "proba1",
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
                "title": "test",
                "fullTitle": "test",
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
                "title": "test",
                "fullTitle": "test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "proba1",
                "fullTitle": "proba1",
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

            var tacnostobjekat=testoviparser.porediRezultate(rezultat1, rezultat2)
            assert.equal(tacnostobjekat.promjena,"50%","tacnost mora biti 50%")
            assert.equal(tacnostobjekat.greske.length, 3, "niz mora imati 3 elementa")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element niza mora biti test1")
            assert.equal(tacnostobjekat.greske[1], "proba1", "drugi element niza mora biti proba1")
            assert.equal(tacnostobjekat.greske[2], "test", "prvi element niza mora biti test")

                
        });
        it('RazlicitiNaziviPrviProlaze',function(){
            var rezultat1=`{
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
            var rezultat2=`{
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
                "title": "proba1",
                "fullTitle": "proba1",
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
                "title": "test",
                "fullTitle": "test",
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
                "title": "test",
                "fullTitle": "test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "proba1",
                "fullTitle": "proba1",
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

            var tacnostobjekat=testoviparser.porediRezultate(rezultat1, rezultat2)
            assert.equal(tacnostobjekat.promjena,"40%","tacnost mora biti 40%")
            assert.equal(tacnostobjekat.greske.length, 2, "niz mora imati 2 elementa")
            assert.equal(tacnostobjekat.greske[0], "proba1", "prvi element niza mora biti proba1")
            assert.equal(tacnostobjekat.greske[1], "test", "drugi element niza mora biti test")

                
        });
        it('RazlicitiNaziviDrugiProlaze',function(){
            var rezultat1=`{
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
                }
            ],
            "passes": [
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
            var rezultat2=`{
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
                "title": "proba1",
                "fullTitle": "proba1",
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
                "title": "test",
                "fullTitle": "test",
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
                "title": "test",
                "fullTitle": "test",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "proba1",
                "fullTitle": "proba1",
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

            var tacnostobjekat=testoviparser.porediRezultate(rezultat1, rezultat2)
            assert.equal(tacnostobjekat.promjena,"16.7%","tacnost mora biti 16.7%")
            assert.equal(tacnostobjekat.greske.length, 1, "niz mora imati 1 element")
            assert.equal(tacnostobjekat.greske[0], "test1", "prvi element mora biti test1")

                
        });
    });

});