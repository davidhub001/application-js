
var drage = false
let x,y;
var depl;

document.addEventListener("mousedown",function(e){
    if(e.button === 0){
        var calc = e.target.closest(".deplacer");
        if(calc){
            drage  = true;
            depl = calc;
            x = e.clientX-calc.offsetLeft;
            y = e.clientY-calc.offsetTop;
        }  
    }
})
document.addEventListener("mousemove",function(e){
    if(drage){
        var _x = e.clientX-x;
        var _y = e.clientY-y;
        depl.style.position = "absolute";
        depl.style.left = _x+'px';
        depl.style.top = _y+'px';
        depl.style.z_index= 10000;
    }
})
document.addEventListener("mouseup",function(e){
    if(e.button === 0 && drage){
        drage =false;
        depl = "";
        x,y =0;
    } 
})