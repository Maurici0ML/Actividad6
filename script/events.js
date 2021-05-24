$(window).load(()=>{
    anim1=$("#animation1");
    anim2=$("#animation2");
    anim3=$("#animation3");

    anim1.on("click", ()=>{
        console.log("animacion1");
        anim1.addClass("move1");
    });
    anim2.on("click", ()=>{
        console.log("animacion2");
        anim1.addClass("move2");
    });
    anim3.on("click", ()=>{
        console.log("animacion3");
        anim1.addClass("move3");
    });
});