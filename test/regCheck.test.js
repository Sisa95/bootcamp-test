describe('regCheck' , function(){
    it('should return true if the location string matches with the last characters of the registration number ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });

    it('should return false if the location is an empty string ' , function(){
        assert.equal(regCheck('DV 23 NB GP', ''),false);
    });

    it('should return false if no parameters have been parsed ' , function(){
        assert.equal(regCheck('', ''),false);
    });

    it('should return false if registration number is an empty string and location has been parsed ' , function(){
        assert.equal(regCheck('', 'GP'),false);
    });
});