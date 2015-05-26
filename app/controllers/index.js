function doClick(e) {
    alert($.label.text);
}

function openMap(e) {
	Alloy.createController("map").getView().open();
	$.index.close();
}

var cp1 = {name: "Car Park 1", spots: 10};
var cp2 = {name: "Car Park 2", spots: 9};
var cp3 = {name: "Car Park 3", spots: 38};
var cp4 = {name: "Car Park 4", spots: 74};
var cp6 = {name: "Car Park 6", spots: 85};
var cp7 = {name: "Car Park 7", spots: 23};
var cp8 = {name: "Car Park 8", spots: 45};
var cp9 = {name: "Car Park 9", spots: 11};
var cpList = [cp1, cp2, cp3, cp4, cp6, cp7, cp8, cp9];
var dataArray = []; 

function refresh(e) {
	//$.cpTable.removeAllChildren();
	getDatabase();
	for(var i = 0, j = cpList.length; i < j; i++) {
		var cpRow = Ti.UI.createTableViewRow({hasChild: "true", font: {fontSize: 12}});
		cpRow.add(Ti.UI.createLabel({text: cpList[i].name, left: "5%", color: "black", font: {fontSize: "25%"}}));
		cpRow.add(Ti.UI.createLabel({text: dataArray[i], right: "5%", color: "black", font: {fontSize: "25%"}}));
		//$.cpTable.insertRowAfter(i, cpRow);
		$.cpTable.updateRow(i, cpRow);
	};
};

//Array to store the data from the todo list 
       
//We execute the function to show the data for the first view          
function getDatabase () { 
    //function to use HTTP to connect to a web server and transfer the data. 
	var sendit = Ti.Network.createHTTPClient({ 
    	onerror: function(e){ 
		Ti.API.debug(e.error); 
        	alert('There was an error during the connection'); 
         }, 
         timeout:1000, 
    });                      
    //Here you have to change it for your local ip 
    sendit.open('GET', '220.245.142.189:88/new.php');  
    sendit.send(); 
    //Function to be called upon a successful response 
    sendit.onload = function(){ 
    	var json = JSON.parse(this.responseText); 
        var json = json.CarParks; 
        //if the database is empty show an alert 
        //if(json.length == 0){ 
        //$.tableView.headerTitle = "The database row is empty"; 
        //}                      
                     //Emptying the data to refresh the view 
                     dataArray = [];                      
                     //Insert the JSON data to the table view 
                     for(var i = 0; i < json.length; i++){ 
                     //      var row = Ti.UI.createTableViewRow({ 
                     //            title: json[i].todo, 
                     //             hasChild : true, 
                     //     });        
                         dataArray.push(json[i].CarParks);                 
                     };                      
                             
               }; 
       };        
$.index.open();