var robot =document.getElementById("robot");
var _game = document.getElementById("game");
var block= document.getElementById("block");
var w = _game.style.width.match(/\d+/g);
var h = _game.style.height.match(/\d+/g);
var block = [{
    top:18,
    left:0,
    width:460
},{
    top:60,
    left: 100,
    width:400
},{
    top:80,
    left:0,
    width:50
},]

block.forEach(function(e){
    var span = document.createElement("span");
    span.innerHTML = "&nbsp;";
    span.setAttribute("class", "block")
    span.setAttribute("style", "top:"+e.top+"px;left:"+e.left+"px;width:"+e.width+"px;")
    _game.appendChild(span);
})

class Game{
    constructor(e){
        if(e.dy > 0 && e.dy < h[0]){
            robot.style.top = e.dy+'px';
        }
        if(e.dx > 0 && e.dx < w[0]){
            robot.style.left = e.dx+'px';
        }
    }
}


var data = {
    dx:0,
    dy:0,
}
var _x = 0;
var _y = 0;
document.addEventListener("keydown",function(e){
    switch (e.key) {
        case "ArrowRight":
            data.dx = _x++;
            var game = new Game(data);
            break;
        case "ArrowLeft":
            data.dx = _x--;
            var game = new Game(data);

            break;
        case "ArrowUp":
            data.dy =_y--;
            var game = new Game(data);
            break;
        case "ArrowDown":
            data.dy = _y++;
            var game = new Game(data);
            break;
    }
})
