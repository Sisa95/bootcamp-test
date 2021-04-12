describe('totalPhoneBill' , function(){
    it('Should return R3.40' , function(){
        assert.equal(totalPhoneBill('call, sms'),"R3.40");
    });

    it('Should return R0.00 if no argument is parsed' , function(){
        assert.equal(totalPhoneBill(''),"R0.00");
    });
});