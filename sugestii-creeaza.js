//var parola = document.getElementsByName("parola")[0];
//var parolaBuna = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
//(?=.*[!@#\$%\^&\*])


function CheckPassword() 
{ 
var parola = document.getElementsByName("parola")[0];
var parolaBuna = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
if(parola.value.match(parolaBuna)) 
{ 
//alert('Correct, try another...')
return true;
}
else
{ 
alert('Parola nepotrivita!')
return false;
}
}
var btn = document.getElementById("submit");
btn.addEventListener("click", CheckPassword(document.getElementsByClassName("input")[4]))/*{
	//move;
if(parolaBuna.test(parola)==false)
var atentionare=document.createElement("p");
	par.innerHTML="Parola trebuie sa contina cel putin un caracter mic, unul mare, un numar si sa fie mai lunga de 8 caractere";
	//for normal sau arr.foreach
	document.body.getElementsByClassName("ob2")[0].appendChild(atentionare);

});*/



//bara de incarcare
function move() {
	var elem = document.getElementById("myBar");   
	var width = 0;
	var id = setInterval(frame, 10);
	function frame() {
	  if (width == 100) {
		clearInterval(id);
	  } else {
		width++; 
		elem.style.width = width + '%'; 
	  }
	}
  }
  //asteapta tasta apasata
document.body.addEventListener("keypress",function(event){
	var tasta = event.keyCode;
	if(tasta==76||tasta==108)
	//alert("loading");
	move();
});
//requiest API
var raspuns = null;
var xhr = new XMLHttpRequest();
xhr.onload = function () {
	if (xhr.status >= 200 && xhr.status < 300) {
        // Daca request-ul a fost facut cu succes
        console.log('success!', xhr);
        console.log("raspunsul pe care il primim este sub forma de string",xhr.response);
        console.log("De cele mai multe ori vrem sa convertim raspunsul la obiect JSON ca sa putem utiliza datele",JSON.parse(xhr.response))
		raspuns = JSON.parse(xhr.response);
	} else {
        // Daca avem FAIL (ex: nu exista metoda din backend pe care vrem sa o apelam sau nu avem conexiune la internet etc)
        console.log('The request failed!');
    }
	 console.log('This always runs...');
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
var arr=[1,2,3,4,5,6];

var btn = document.querySelector(".sugestii");
btn.addEventListener("click", function(){
	
	//adauga paragraf
	//seteaza text "ceva"
	//adauga in pagina
	//parcurgem arr
	var i=0;
	function func(){
		
	var par=document.createElement("p");
	par.innerHTML=raspuns[i].title + ": " + raspuns[i].body;
	//for normal sau arr.foreach
	document.getElementsByClassName("ob1")[0].appendChild(par);
    
    i=i+1;
    
	}
	arr.forEach(func);
});

