
/* The purpose of this prohram is to crrete is a list of cookies with specific properties, and from tyhat list create a new list one of the favarite and amd one of the rest

	 */
		var myCookies = [{
			"name" : "Orio",
			"shape" : "round"
		}, {
			"name" : "Cjips Ahoy",
			"shape" : "round"
		}, {
			"name" : "Lorne Doone",
			"shape" : "square"
		}, {
			"name" : "Fig Newton",
			"shape" : "square"
		}];
		console.log(myCookies)
// tehses are the lists I will sort my cookies inot /

var myFaves = [];
var theRest = [];

/* for evry cookies in my lisr, chesk its shape. If square amd to my Favoy, otherwise add to the rest
 *
 */
for(var i=0; i<4; i++){
	
	console.log(i);
	
	console.log(i);
	
	var currentCookie = myCookies[i];          
	
	console.log(myCookies);
	
	if(currentCookie.shape == "square") {
		
		console.log(currentCookie);
		// becusue shape is square add the currentCookies to myFaves list
	
	myFaves.push(currentCookie);
	} else{
	
	
	
	} // this the end of mu if/false statement and curretCookie to the 
	//this is the end for mu loop
	console.log(myFaves);
	console.log(theRest);
	
	}
	
	




