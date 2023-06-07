var selector = document.querySelectorAll('.typewrite');
selector.forEach(e => {
    var content = e.getAttribute("content");
    var length_content = content.length;
    var init = 0;
    function typewrite(){
        if(init < length_content){
            e.innerHTML += content.charAt(init);
            setTimeout(typewrite, 50);
            init++;
        }
    }
    typewrite();
});