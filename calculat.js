    var buttons  = document.querySelectorAll(".button");
    var operation = document.querySelectorAll(".operation");
    var virgule = document.querySelector(".button_virgul");
    var egale = document.querySelector(".button_egale");
    var operation = document.querySelectorAll(".operation");
    var entrer = document.getElementById("entrer");

    var op = "";
    var num1 = "";
    var num2 = 0;
    buttons.forEach(function(button){
        button.onclick =function(){
            num1 += this.innerHTML;
            entrer.value = num1;
            
        }
    })
    operation.forEach(function(operation){
        operation.onclick = function(){
            console.log(this.innerHTML);
        }
    })
    virgule.onclick = ()=>{
        console.log(".")
    }
    egale.onclick = ()=>{
        console.log("=");
    }