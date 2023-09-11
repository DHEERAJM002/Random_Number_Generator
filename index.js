function generate(){
    var n=document.querySelector(".n").valueAsNumber
    var rand=Math.floor(Math.random()*n)+1;
    document.querySelector("h4").innerHTML=rand;
}