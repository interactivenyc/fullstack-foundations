function findObjPropsHasOwn(obj){
	var keys = [];
	for(var key in obj){

		if(obj.hasOwnProperty(key)){
			keys.push(key);	
		}		
	}
	return keys.join(', ');
}


function findObjKeys(obj){
	return Object.keys(obj).join(', ');
}