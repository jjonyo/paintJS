const colors_control=document.querySelector('.controls__colors');
const custom=colors_control.querySelector('.controls__color_custom');


function setColor(pColor){
    ctx.strokeStyle=pColor;
    ctx.fillStyle=pColor;
}

function clickHandler(event){
    const target=event.target;
    const color=target.style.backgroundColor;
    setColor(color);
}


function customHandler(event){
    const customColor=custom.value;
    custom.style.backgroundColor=customColor;
    setColor(customColor);
}

if(colors_control){
    colors_control.addEventListener("click",clickHandler);
}

if(custom){
    custom.addEventListener("change",customHandler);
}