
describe('findItemsOver' , function(){
    var data = [
        {name : 'apples', qty : 50},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}
    ];

    it('Should return item over' , function(){
        
        assert.deepEqual(findItemsOver(data,[
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ]))
    });
    
    it('Should return empty array if no items are over 20' , function(){
        assert.deepEqual([],
        findItemsOver([
            {name : 'apples', qty : 50},
            {name : 'pears', qty : 27},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3}
        ]))
    });
   
    
});