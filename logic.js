let rock= document.getElementById("rock");
let paper= document.getElementById("paper");
let scissors= document.getElementById("scissors");
let playerscore=document.getElementById("plscr");
let aiscore=document.getElementById("aiscr");
let reset=document.getElementById("reset");
let a="";
let b="";
let player=0;
let ai=0;
playerscore.innerText=0;
aiscore.innerText=0;




let updatescores=()=>{
    playerscore.innerText=`${player}`;
    aiscore.innerText=`${ai}`;
};



let rockk=() =>{
    a="rock";
    AII();
    if (b==="rock") {
        alert('tie')

    }
    else if (b==="scissors"){
        alert("you won");
        player+=1;
    }
    else if (b==="paper"){
        alert("you lost");
        ai+=1;
    }
    updatescores();
};
let paperr=() =>{
    a="paper";
    AII();
    if (b==="rock") {
        alert('you won')
        player+=1;
    }
    else if (b==="scissors"){
        alert("you lost");
        ai+=1;
    }
    else if (b==="paper"){
        alert("tie");
    }
    updatescores();

};
let scissorss=()=>{
    a="scissors";
    AII();
    if (b==="rock") {
        alert('you lost')
        ai+=1;
    }
    else if (b==="scissors"){
        alert("tie");
    }
    else if (b==="paper"){
        alert("you won");
        player+=1;
    }
    updatescores();
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



let addreset=()=>{
    player=0;
    ai=0;
    updatescores();
};


reset.addEventListener("click",addreset);
rock.addEventListener("click",rockk);
scissors.addEventListener("click",scissorss);
paper.addEventListener("click",paperr);