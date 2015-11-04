//console.log("sanity check!");

var firstParagraph = document.getElementById('main');
//console.log(firstParagraph);

var ulElements = document.getElementsByTagName('ul');
//console.log(ulElements);

var ulElement = ulElements[0];
//console.log(ulElement);

var allListItems = document.getElementsByTagName('li');
//console.log(allListItems);

//for (var i = 0 ; i < allListItems.length ; i++) {
//	console.log(allListItems[i]);
//}

var evens = document.getElementsByClassName('even');
//console.log(evens);

var odds = document.getElementsByClassName('odd');
//console.log(odds);

//console.log(odds[0]);



//returns the first element in the document that matches the specified group of selctors
var main = document.querySelector('#main');
//console.log(main);

//returns a list(NodeList) of elements that match
var oddsAndEvens = document.querySelectorAll('.odd , .even');
//console.log(oddsAndEvens);



//difference between innerText and innerHTML
// for (var i = 0 ; i < allListItems.length; i++) {
// 	console.log(allListItems[i].innerText);
// }

// for (var i = 0 ; i < allListItems.length; i++) {
// 	console.log(allListItems[i].innerHTML);
// }


document.getElementById('main').style.backgroundColor = "goldenrod";

var li = document.createElement('li');
var newElement = li.innerText = "another list item";
document.getElementsByTagName('ul')[0].appendChild(li);
document.getElementsByTagName('ul')[0].insertBefore
