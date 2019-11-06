var i=0,text;
text= "Welkom op mijn website!"

function typing() {
    if(i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,120)
    }
}
typing();




function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }
  
