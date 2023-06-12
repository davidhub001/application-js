var selector = document.querySelectorAll('.typewrite');
selector.forEach(e => {
    var content = e.innerHTML;
    e.innerHTML = "";
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

var save = document.querySelectorAll(".form");
var data_storage = [];
var data_storage_ = JSON.parse(localStorage.getItem("data-registre-dav-dev"))
if(data_storage_){
    data_storage = data_storage_;
}
save.forEach(e => {
    var input = e.getAttribute("input");
    var data = input.split(",")
    var save = document.querySelector(".enregistrer")
    var data_liste = [];
    save.onclick = function(){
        data.forEach(element => {
            var data_input = document.getElementById(element);
            if(data_input.value.length > 0){
                data_liste.push(data_input.value);
            }else{
                data_liste.push("-");
            }
        });
        data_storage.push(data_liste);
        data_liste = [];
        e.reset();
        localStorage.setItem("data-registre-dav-dev", JSON.stringify(data_storage))
        get_storage();
    }
})
function get_storage(){
    var liste = document.querySelector("tbody.liste-registre");
    liste.innerHTML = "";
    var data_storage = JSON.parse(localStorage.getItem("data-registre-dav-dev"))
    var tr = "";
    if(data_storage){
        data_storage.forEach( e =>{
            tr += "<tr>";
                for(var i=0; i<e.length;i++){
                    tr += "<td>"+e[i]+"</td>";
                }
                tr+="<td><button>x</button></td>"
            tr += "</tr>"
        })
    }
    liste.innerHTML = tr;
}
get_storage();