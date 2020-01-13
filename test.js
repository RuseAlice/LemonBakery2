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

var btn = document.querySelector("button");
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
	document.body.appendChild(par);
    
    i=i+1;
    
	}
	arr.forEach(func);
});