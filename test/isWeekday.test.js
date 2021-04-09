describe('isWeekday' , function(){
    it('should return true if function returns day of the week' , function(){
        assert.equal(isWeekday("Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday"),true);
    });

    it('should return false if function returns day of the weekend' , function(){
        assert.notEqual(isWeekday("Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday"),false);
    });
});