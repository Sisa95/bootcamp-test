describe('countRegNumber' , function(){

    it('Expected registration number to be 0' , function(){
        var regCount = countRegNumber('');
        assert.isBelow(regCount,1 )
    });

    it('Expected registration number to be equal to 1' , function(){
        var regCount = countRegNumber('CA 182736');
        assert.equal(regCount,1 )
    });

    it('Expected registration number to be more than 1' , function(){
        var regCount = countRegNumber('CA 182736, CY 523519');
        assert.isAbove(regCount,1)
    });
});