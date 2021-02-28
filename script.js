var nodeElement = document.getElementsByTagName('LI'); //create the variable for close btn into li part
var i;

var input = document.getElementById("myInput"); 

input.addEventListener("keyup", function(event) { // add the element into any element without overwriting
  if (event.keyCode === 13) {
    event.preventDefault(); 
    document.getElementById("myBtn").click(); //when click the enter, then mybtn is called 
  }
});

for (i = 0; i < nodeElement.length; i++) { //add the close(multipication) btn
    var span = document.createElement('SPAN'); //create the span element using the createelement keyword
    var Txt = document.createTextNode('\u00D7'); // create the close(*) text using the createtext keyword

    span.className = 'close'; // create the class of close

    span.appendChild(Txt); //add the txt into the span using appendchild method
    nodeElement[i].appendChild(span); //every nodeelement add into LI part
}

var close = document.getElementsByClassName('close'); //create the close var for every Li element

for (i = 0; i < close.length; i++) { //write the for loop for close element
    close[i].onclick = function (){
        var div = this.parentElement; //usethe parentelement for : close parent is all LI part, so parent part are remove using parentelement
        div.style.display = 'none'; //style is none, if you click the close element
    }
}

function addLi() {
    var li = document.createElement('LI'); //create the Li element for add function into html document
    var inputValue = document.getElementById('myInput').value; //create the inputvalue variable for catch the value of input part

    var t = document.createTextNode(inputValue); //create the textnode for the li part with inputvalue para, why i use the t var ? - bcoz, i convert the input part into the textnode of the li part
    li.appendChild(t); //app the t into li

    if (inputValue === '') { // if the inputvalue is empty 
        alert('You must write something.'); // then u see the alert box
    }
    else { //if the inputvalue is not empty
        document.getElementById('myUL').appendChild(li); //add the li into the whole UL part
        li.className = 'list-group-item'; //add class to li variable for right way of the html-css structure
    }
    document.getElementById('myInput').value = ''; //if you click the addli btn then input field is empty 

    // for the close span element into add function, if you add some item
    var span = document.createElement('SPAN'); 
    var Txt = document.createTextNode('\u00D7');

    span.className='close';

    span.appendChild(Txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            if(confirm('Are you sure, you want to delete this item ?')){
                div.style.display = 'none';
            }
            else{
                div.style.display = '';
            }
        }
    }
}


