var radaugate=[];
catchSubmit= function(){
	
	var titlu = document.getElementsByTagName("input")[0].value;
  var reteta=document.getElementsByTagName("textarea")[0].value;
  var par=document.createElement("p");
  radaugate.push(par);//tinem minte retetele adaugate de utilizatorul curent
  par.innerHTML=titlu + ": " + reteta;
  

  document.body.getElementsByClassName("retete")[0].appendChild(par);
  var mesaj="Ai adaugat " + radaugate.length +" retete";//cate retete am adaugat
  alert(mesaj);
 
}
//retetele adaugate de utilizatorul curent
var btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click", catchSubmit);

//stergerea retetelor de le utilizatorul anterior:
window.onload=function(){

  if(this.radaugate.length > 0)
  {
    for(i=0;i<this.radaugate.length;i++)
    {
      this.radaugate.pop;
    }
  }
}


//customizare pagina:

getRandomColor=function(){
    
   
  var culoare='#' + parseInt(Math.random() * 0xffffff).toString(16);
  return culoare;
}
var time;
schimbareCuloare = function(){

   document.getElementById("titlu").style.color=getRandomColor();
   //clearTimeout(time);
   time=setTimeout(schimbareCuloare,1000);
}
schimbareCuloare();


var btn = document.getElementById("culoare");
btn.addEventListener("click", function(){

   clearTimeout(time);
});




//document.getElementsByTagName("input")[1].onchange
schimbareRange=function(dim)
{
  //var dim=document.getElementsByTagName("input")[1].value;
  document.getElementById("titlu").style.fontSize=10;
}





  