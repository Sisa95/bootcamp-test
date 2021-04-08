describe('countAllPaarl' , function(){
    it('Should output 3 from Paarl' , function(){
        var countPaarl = countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123');
        assert.equal(countPaarl,3 )
    });

    it('Should outpu 0 from Paarl' , function(){
        var countPaarl = countAllPaarl('Ck 345 123, CC 2345, CL 123-546, CK 345, CL 123');
        assert.equal(countPaarl, 0 )
    });
});