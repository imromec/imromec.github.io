export class App {
   
	heading = "Table Component";
	users = [];
	perUsers = [];

	tableHeader = [];

	userInput = '';
	sortingType: string = '';
	searchString: string = '';

	showError = false;

	dummyData: any = [
		    {
		        "Id": 1,
		        "Name": "Manoj",
		        "DOB": "13/02/1973",
		        "Gender": "Male",
		        "Address": "E501, Bengaluru"
		    },
			{
		        "Id": 2,
		        "Name": "Sal",
		        "DOB": "11/02/1973",
		        "Gender": "Male",
		        "Address": "London"
			},
			{
		        "Id": 3,
		        "Name": "Raj",
		        "DOB": "03/02/1994",
		        "Gender": "Male",
		        "Address": "Jaipur"
		    },
		    {
		        "Id": 7,
		        "Name": "Mark",
		        "DOB": "12/03/1972",
		        "Gender": "Male",
		        "Address": "Jaipur"
		    },
		    {
		        "Id": 9,
		        "Name": "Ema",
		        "DOB": "12/03/1972",
		        "Gender": "Female",
		        "Address": "California"
		    },
		    {
		        "Id": 6,
		        "Name": "Meghraj",
		        "DOB": "12/03/1972",
		        "Gender": "Male",
		        "Address": "Jodhpur"
		    },
		    {
		        "Id": 4,
		        "Name": "Meghraj",
		        "DOB": "12/03/1972",
		        "Gender": "Male",
		        "Address": "Jodhpur"
		    },
		    {
		        "Id": 5,
		        "Name": "Ram",
		        "DOB": "12/03/1972",
		        "Gender": "Male",
		        "Address": "Jodhpur"
		    },
		    {
		        "Id": 8,
		        "Name": "Sushil",
		        "DOB": "12/03/1972",
		        "Gender": "Male",
		        "Address": "Jodhpur"
		    }
		];

	createTable(){
		if(this.userInput){
			this.showError = false; //HIDING ERROR

			let inputObject = JSON.parse(this.userInput);
			this.users = inputObject;
			this.perUsers = inputObject; //STORING FOR SEARCHING PURPOSE

			//GET TABLE HEADER
			let firstObject = inputObject[0];
			let headerArray = [];

			for(var i in firstObject){
				headerArray.push(i);
			}

			this.tableHeader = headerArray;
		}
		else
			this.showError = true;
	}

	sortTable(){
	 	let key = this.sortingType;
	 	this.users.sort(function(var1, var2) {
        	var row1 = var1[key], row2 = var2[key];
       
	        return ((row1 < row2) ? -1 : ((row1 > row2) ? 1 : 0));
	    });
	}

	setFilteredItems(){
	    if(this.searchString)
	      this.perUsers = this.search(this.searchString);
	    else
	      this.perUsers = this.users;
	}

	search(keyword){
		return this.users.filter((item) => {
	        return ((item.Name.toLowerCase().indexOf(keyword.toLowerCase()) > -1) || (item.Gender.toLowerCase().indexOf(keyword.toLowerCase()) > -1) || (item.Address.toLowerCase().indexOf(keyword.toLowerCase()) > -1));
	    }); 
	}

	addJSON(){
		this.userInput = JSON.stringify(this.dummyData);
	}
}