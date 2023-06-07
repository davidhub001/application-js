var robot =document.getElementById("robot");
var _game = document.getElementById("game");
var block= document.getElementById("block");
var w = _game.style.width.match(/\d+/g);
var h = _game.style.height.match(/\d+/g);
// var block = [{
//     top:18,
//     left:0,
//     width:460
// }]

// block.forEach(function(e){
//     var span = document.createElement("span");
//     span.innerHTML = "&nbsp;";
//     span.setAttribute("class", "block")
//     span.setAttribute("style", "top:"+e.top+"px;left:"+e.left+"px;width:"+e.width+"px;")
//     _game.appendChild(span);
// })

var pl_x = Math.floor(Math.random()*w[0])
var pl_y = Math.floor(Math.random()*h[0])

var span = document.createElement("span");
    span.innerHTML = "&nbsp;";
    span.setAttribute("class", "block")
    span.setAttribute("id","esclave");
    span.setAttribute("style", "top:"+pl_y+"px;left:"+pl_x+"px;width:10px")
    _game.appendChild(span);

    var esc= document.getElementById("esclave");
class Game{
    constructor(e){
        if(e.dy > 0 && e.dy < h[0]){
            this.deplace_y(e.dy)
        }
        if(e.dx > 0 && e.dx < w[0]){
            this.deplace_x(e.dx)
        }
    }
    deplace_y(y){
        console.log(esc.offsetTop)
        console.log(y)
        if(y == esc.offsetTop){
            console.log("mitovy")
        }else{
            robot.style.top = y+'px';
        }
        
    }
    deplace_x(x){
        robot.style.left = x+'px';
    }
}


var data = {
    dx:0,
    dy:0,
}

document.addEventListener("keydown",function(e){
    switch (e.key) {
        case "ArrowRight":
            data.dx += 1;
            var game = new Game(data);
            break;
        case "ArrowLeft":
            data.dx -= 1;
            var game = new Game(data);

            break;
        case "ArrowUp":
            data.dy -=1;
            var game = new Game(data);
            break;
        case "ArrowDown":
            data.dy += 1;
            var game = new Game(data);
            break;
    }
})
