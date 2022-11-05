keisan(); 

function keisan() {
	var a = ["あ","い","う"];

	// for(i=0;i<2;i++){
	// 	for(j=0;j<2;j++){
	// 		if(i!==j){
	// 			console.log(i,j);
	// 		}
	// 	}
	// } 
	for(a=0;a<3;a++){
		for(i=0;i<3;i++){
			for(j=0;j<3;j++){
				if(i!==j && a!==j && a!==i){
					console.log(a,i,j);
				}
				
			}
		}
	}
	 
}
