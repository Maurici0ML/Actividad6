$(window).on("load", ()=>{
//Animaciones 
    slimeSquare1=$("#Slime1");
    slimeSquare2=$("#Slime2");
    slimeSquare3=$("#Slime3");
    anim1=$("#animation1");
    anim2=$("#animation2");
    anim3=$("#animation3");

    anim1.on("click", ()=>{
        console.log("Saltar");
        slimeSquare1.toggleClass("move1");
        slimeSquare2.toggleClass("move1");
        slimeSquare3.toggleClass("move1");
    });
    anim2.on("click", ()=>{
        console.log("Inflarse");
        slimeSquare1.toggleClass("move2");
        slimeSquare2.toggleClass("move2");
        slimeSquare3.toggleClass("move2");
    });
    anim3.on("click", ()=>{
        console.log("Acariciar");
        slimeSquare1.toggleClass("move3");
        slimeSquare2.toggleClass("move3");
        slimeSquare3.toggleClass("move3");
    });
});