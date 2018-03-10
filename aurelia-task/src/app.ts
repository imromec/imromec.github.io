import {Table} from './table';

export class App {
   
	heading = "Table Component";
	users = [];
	perUsers = [];

	tableHeader = [];

	userInput = '';
	sortingType: string = '';
	searchString: string = '';

	showError = false;

	createTable(){
		if(this.userInput){
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
/*
	createTable(inputObject){
    	var domElement = document.getElementById('userTable');
    	var table = document.createElement('table');
    	
    	table.style.width = '100%';
    	table.style.marginTop = '10px';
   	 	table.setAttribute('border', '1');

    	var header = table.createTHead();
    	var row = header.insertRow(0);

   		var cell = row.insertCell(0);
   		var cell2 = row.insertCell(1);
   		var cell3 = row.insertCell(2);
   		var cell4 = row.insertCell(3);
   		var cell5 = row.insertCell(4);

   		cell.innerHTML = "<b>Id</b>";
   		cell2.innerHTML = "<b>Name</b>";
   		cell3.innerHTML = "<b>DOB</b>";
   		cell4.innerHTML = "<b>Gender</b>";
   		cell5.innerHTML = "<b>Address</b>";

   		console.log(inputObject);


		for (var i = 0; i < inputObject.length; i++) {
		    var tr = document.createElement('tr');

		    tr.appendChild( document.createElement('td') );
		    tr.appendChild( document.createElement('td') );
		    tr.appendChild( document.createElement('td') );
		    tr.appendChild( document.createElement('td') );
		    tr.appendChild( document.createElement('td') );

		    tr.cells[0].appendChild( document.createTextNode(inputObject[i].Id) )
		    tr.cells[1].appendChild( document.createTextNode(inputObject[i].Name) );
		    tr.cells[2].appendChild( document.createTextNode(inputObject[i].DOB) );
		    tr.cells[3].appendChild( document.createTextNode(inputObject[i].Gender) );
		    tr.cells[4].appendChild( document.createTextNode(inputObject[i].Address) );

		    table.appendChild(tr);
		}

		domElement.appendChild(table);
    }*/


	

}