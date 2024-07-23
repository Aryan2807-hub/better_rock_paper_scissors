let rock= document.getElementById("rock");
let paper= document.getElementById("paper");
let scissors= document.getElementById("scissors");
let playerscore=document.getElementById("plscr");
let aiscore=document.getElementById("aiscr");
let reset=document.getElementById("reset");
let you = document.getElementById("you").querySelector("img");
let comp = document.getElementById("comp").querySelector("img");
let animation=document.getElementsByClassName("emoji");
let nxtround=document.getElementById("next round");



let a="";
let b="";
let player=0;
let ai=0;
playerscore.innerText=0;
aiscore.innerText=0;
const choices = {
    "rock": "/emoji/rock-emoji.png",
    "paper": "/emoji/paper-emoji.png",
    "scissors": "/emoji/scissors-emoji.png"
};




let updatescores=()=>{
    playerscore.innerText=`${player}`;
    aiscore.innerText=`${ai}`;
};



let rockk=() =>{
    a="rock";
    AII();
    animate();

    if (b==="rock") {


    }
    else if (b==="scissors"){
        
        player+=1;
        
    }
    else if (b==="paper"){
    
        ai+=1;
       
    }
    whowon();
    
};
let paperr=() =>{
    a="paper";
    AII();
    animate();

    
    
    if (b==="rock") {
       
        player+=1;
        
        
    }
    else if (b==="scissors"){
       
        ai+=1;
        
    }
    else if (b==="paper"){
     
        
    }
    whowon();
    
    

};
let scissorss=()=>{
    a="scissors";
    AII();
    animate();

    

    if (b==="rock") {
       
        ai+=1;
        
    }
    else if (b==="scissors"){
     
       
    }
    else if (b==="paper"){

        player+=1;
       
    }
    whowon();
    
    
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

let whowon=()=>{
    if (player+=1){
        console.log("player won")
    }
    else if (ai+=1){
        console.log("computer won")
    }
    else{
        console.log("tie")
    }
};

let addreset=()=>{
    player=0;
    ai=0;
    updatescores();
};

let nextround=()=>{ 
    you.classList.remove("rotate-clockwise");
    comp.classList.remove("rotate-anticlockwise");
    updatescores();

    resetImages();
}
let resetImages = () => {
    you.src = choices["rock"];
    comp.src = choices["rock"];
};
let animate = () => {
    you.classList.add("rotate-clockwise");
    comp.classList.add("rotate-anticlockwise");
    setTimeout(() => {
        you.src = choices[a];
        comp.src = choices[b];
       
    }, 720);
};
nxtround.addEventListener("click",nextround);

reset.addEventListener("click",addreset);
rock.addEventListener("click",rockk);
scissors.addEventListener("click",scissorss);
paper.addEventListener("click",paperr);