describe('greet' , function(){
    it('should return greet message with person name' , function(){
        assert.equal(greet('Sisa'),'Hello, Sisa');
    });

    it('should return expecting person name if no arguement is parsed' , function(){
        assert.equal(greet(''),'Expecting person name');
    });
});