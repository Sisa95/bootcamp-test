function findItemsOver(itemList, over){
    console.log(over);
    if(itemList == ""){
        return [];
    }
    var result = itemList.filter( itemList => itemList.qty > over);
    return result
  }