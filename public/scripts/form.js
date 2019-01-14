
var upload = document.getElementById("submit");
if(upload)
  upload.addEventListener("click",function(){
    var data = {};

    data.destination = document.getElementById("destination").value;
    data.url = document.getElementById("url").value;
    var msg = JSON.stringify(data);
    if ( data.destination != "") {

      var ourRequest = new XMLHttpRequest();
      ourRequest.open("POST",'http://localhost:3000/addToDB',true);
      ourRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
      ourRequest.send(msg);
      alert("Success!");
      location.reload();
    } else {
      alert("Error!");
      return;
    }
  });



var showDestinations = document.getElementById("lista");
//var show = document.getElementById("show");
var destName = [];
var url = [];
var destID = [];
// if(show)
//   show.addEventListener("click",function(){
//     var ourRequest1 = new XMLHttpRequest();
//     ourRequest1.open('GET','http://localhost:3000/addToDB');
//     ourRequest1.onload = function() {
//     var ourData = JSON.parse(ourRequest1.responseText);
//     render(ourData);
//   };
//     ourRequest1.send();
//
//   });

function showDest(){


        var ourRequest1 = new XMLHttpRequest();
        ourRequest1.open('GET','http://localhost:3000/addToDB');
        ourRequest1.onload = function() {
          var ourData = JSON.parse(ourRequest1.response);
          render(ourData);

        }
      ourRequest1.send();
}
  var maxId;
function render(data){
  var htmlString = "";
  destName = [];
  destID = [];

  url = [];
  for ( i = 0; i <data.length; i++){
    htmlString +="<ul><li class='bold'>Destination #"+ data[i].id +"<ul><li> Name: " + data[i].destination + "</li><li><image src='"+data[i].url+ "'>";
    destName[i] = data[i].destination;
    url[i] = data[i].url;
    destID = data[i].id;
    maxId =destID[i];


    }
	while(showDestinations.childElementCount)
	showDestinations.removeChild(showMessages.childNodes[0]);
	showDestinations.insertAdjacentHTML('beforeend',htmlString);
}



var btnDelete = document.getElementById("delete");
if(btnDelete)
  btnDelete.addEventListener("click",function(){

    var value = document.getElementById("delete-val").value;
    var i=0;
    var elNumber = 0;
    var emptyString = "";
	  for(i = 0; i < destID.length; i++)
			if ( destID[i] == value){
        elNumber = i;
        break;
      }
			if(i == destID.length + 1){
        alert("Not a valid ID");
				return;
			}
    if(isNaN(value) || value < 1 || value > maxId)
      alert ("Not a valid ID");
    else {
      var answer = confirm("Delete destination?");
      if ( answer == true) {
        var ourRequest2 = new XMLHttpRequest();
        ourRequest2.open("DELETE", 'http://localhost:3000/addToDB/' + value, true);
        ourRequest2.send(null);
        var descriptions = showMessages.getElementsByTagName('ul');
        descriptions[elNumber].innerHTML = emptyString;
      }
    }
  });
