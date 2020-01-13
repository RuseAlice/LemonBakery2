//alert("buna");
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

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();