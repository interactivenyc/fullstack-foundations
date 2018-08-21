function rightTriangle(rows) {
    var finalString = "";
    for(rows; rows > 0; rows--){
        for(myRows = rows; myRows > 0; myRows--){
            finalString += "*";
        }
        if(rows !== 1){
        	finalString += "\n";	
        }
        
    }    
    return finalString;    
} 