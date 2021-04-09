describe('countAllFromTown' , function(){
      it('Expect 3 if the location string starts with characters of the registration number' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.deepEqual(fromStellies, 3)
    });

    it('Expect 0 if registration number is an empty array and location has been passed' , function(){
        var fromStellies = countAllFromTown('','CL');
        assert.deepEqual(fromStellies, 0)
    });

    it('Expect 0 if the location is an empty string and a registration string has been passed' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','');
        assert.deepEqual(fromStellies, 0)
    });

    it('Expect 0 if both registration and location are empty strings' , function(){
        var fromStellies = countAllFromTown('','');
        assert.deepEqual(fromStellies, 0)
    });
});