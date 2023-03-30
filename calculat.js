    var buttons  = document.querySelectorAll(".button");
    var operation = document.querySelectorAll(".operation");
    var virgule = document.querySelector(".button_virgul");
    var egale = document.querySelector(".button_egale");
    var operation = document.querySelectorAll(".operation");
    var entrer = document.getElementById("entrer");
    var op = "";
    var num1 = "";
    var num2 = "";
    var virg = "";
    buttons.forEach(function(button){
        button.onclick =function(){
                num1 += this.innerHTML;
                entrer.value = num1;
        }
    })
    operation.forEach(function(operation){
        operation.onclick = function(){
            entrer.value = "";
            op = this.innerHTML;
            if(op == "C"){
                num1 =num2 =op = "";
            }
            num2 = num1;
            num1 = "";
        }
    })
    virgule.onclick = ()=>{
        var reg = /\./;
        var num = entrer.value;
        if(num.length > 0) {
            if(!reg.test(num)){
                num += ".";
            }
        }
        else num = "0.";
        num1 = num;
        entrer.value = num;
    }
    egale.onclick = ()=>{
        var result = 0;
        switch (op) {
            case "+":
                result = parseFloat(num2)+parseFloat(num1);
                break;
        
            case "-":
                result = parseFloat(num2)-parseFloat(num1);
                break;

            case "*":
                result = parseFloat(num2)*parseFloat(num1);
                break;

            case "/":
                result = parseFloat(num2)/parseFloat(num1);
                break;
            case "C":
                
                break;
        }
        op= num2= "";
        num1 = result;
        entrer.value = result;
    }


var drage = false
let x,y;
var depl;

document.addEventListener("mousedown",function(e){
    if(e.button === 0){
        var calc = e.target.closest("#calculatrice");
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
        depl.style.left = _x+'px';
        depl.style.top = _y+'px';
    }
})
document.addEventListener("mouseup",function(e){
    if(e.button === 0 && drage){
        drage =false;
        depl = "";
    } 
})