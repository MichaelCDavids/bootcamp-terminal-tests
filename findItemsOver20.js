module.exports = function(listOfObjects){
  	var newQuantityObjectList = [];
  	for(var i=0;i<listOfObjects.length; i++){
    	var listItem = listOfObjects[i];
      	var itemQty = listItem.qty;
      	if(itemQty>20){
        	newQuantityObjectList.push(listOfObjects[i]);
        }
	}
  	return newQuantityObjectList.length;
}
