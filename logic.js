let rock= document.getElementById("rock");
let paper= document.getElementById("paper");
let scissors= document.getElementById("scissors");
let a="";
let b="";
let rockk=() =>{
    a="rock";
    AII();
    if (b==="rock") {
        alert('tie')
    }
    else if (b==="scissors"){
        alert("you won");
    }
    else if (b==="paper"){
        alert("you lost");
    }
};
let paperr=() =>{
    a="paper";
    AII();
    if (b==="rock") {
        alert('you won')
    }
    else if (b==="scissors"){
        alert("you lost");
    }
    else if (b==="paper"){
        alert("tie");
    }

};
let scissorss=()=>{
    a="scissors";
    AII();
    if (b==="rock") {
        alert('you lost')
    }
    else if (b==="scissors"){
        alert("tie");
    }
    else if (b==="paper"){
        alert("you won");
    }
};
let AII=()=>{
    c=Math.random();
    if(c<=1/3){
        b="rock"
    }
    else if(c<=2/3 && c>=1/3){
        b="paper"
    }
    else{
        b="scissors"
    }
};
rock.addEventListener("click",rockk);
scissors.addEventListener("click",scissorss);
paper.addEventListener("click",paperr);