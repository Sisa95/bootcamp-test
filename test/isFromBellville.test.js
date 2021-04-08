describe('isFromBellville' , function(){
    it('should return true if registration starts with CY' , function(){
        assert.equal(isFromBellville('CY'),true);
    });

    it('should return fasle if registration starts with anything but CY' , function(){
        assert.equal(isFromBellville(''),false);
    });
});
