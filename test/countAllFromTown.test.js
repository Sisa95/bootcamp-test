describe('countAllFromTown' , function(){
      it('Expect 3 if the location string starts with characters of the registration number' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
    });

    it('Expect 0 if registration number is an empty array and location has been parsed' , function(){
        var fromStellies = countAllFromTown('CJ 456','CL');
        assert.deepEqual(fromStellies, 0)
    });
});