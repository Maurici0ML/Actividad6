$(window).on("load", ()=>{
//Animaciones 
    slimeSquare1=$("#Slime1");
    slimeSquare2=$("#Slime2");
    slimeSquare3=$("#Slime3");
    anim1=$("#animation1");
    anim2=$("#animation2");
    anim3=$("#animation3");

    let btnRojo=$("#rojo");
    let btnRosa=$("#rosa");
    let btnVerde=$("#verde");
    let btnNaranja=$("#naranja");
    let slime=$(".bodySlime");

    //Seccion donde se detecta el click para los colores del slime
    btnRojo.click(()=>{
        for(let i=0; i<2; i++){
            slime.css("background-color", "#B5282D")[i]; 
            slime.css("border-color", "#8C0000")[i]; 
        }
    });
    btnRosa.click(()=>{
        for(let i=0; i<2; i++){
            slime.css("background-color", "#CE77BF")[i];
            slime.css("border-color", "#e6a5da")[i];
        }
    });
    btnVerde.click(()=>{
        for(let i=0; i<2; i++){
            slime.css("background-color", "#4DBA30")[i];
            slime.css("border-color", "#3D9126")[i];
        }
    });
    btnNaranja.click(()=>{
        for(let i=0; i<2; i++){
            slime.css("background-color", "#D17E2D")[i];
            slime.css("border-color", "#C45C00")[i];
        }
    });

    //Seccion donde se detecta el click para las animaciones.
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