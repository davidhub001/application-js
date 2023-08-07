
var generate = document.getElementById("generate");
var ajouter_keno = document.getElementById("ajouter_keno");
var flash_keno = document.getElementById("flash_keno");
var mise =document.getElementById("mise");

// Créer les boutons pour l'en-tête
for (let i = 1; i <= 8; i++) {
    let button = document.createElement("button");
    button.textContent = i;
    button.setAttribute("class","button_select");
    document.getElementById("headerRow").appendChild(document.createElement("td").appendChild(button));
}
var button_select = document.querySelectorAll(".button_select");
button_select.forEach(button => {
    button.addEventListener("click", function() {
        button_select.forEach(b=>{
            b.classList.remove('none');
            b.removeAttribute('value');
            b.removeAttribute("selected_number")

        })
        var data_table=document.querySelectorAll(".data_table");
        data_table.forEach(data=>{
            data.classList.remove('none');
            data.classList.remove('ok');
            data.removeAttribute('disabled');
            data.removeAttribute('val_selected');
        })
        
        generate.removeAttribute("class");
        this.classList.add('none');
        this.setAttribute("value",this.textContent)
        this.setAttribute("selected_number",'on')
        setselected_number(this.textContent);
    });
});

// Remplir le tableau de données
let dataTable = document.getElementById("dataTable");
let value = 1;
for (let k = 1; k <= 8; k++) {
    let row = document.createElement("tr");
    for (let i = 1; i <= 10; i++) {
        let cell = document.createElement("td");
        let button = document.createElement("button");
        button.textContent = value;
        button.setAttribute("value",value)
        button.setAttribute("class","data_table")
        button.setAttribute("id",value)
        cell.appendChild(button);
        row.appendChild(cell);
        value++;
    }
    dataTable.appendChild(row);
}
function setselected_number(num){
    var nb_click = 0;
    var data_table=document.querySelectorAll(".data_table");
    data_table.forEach(data => {
        data.addEventListener('click',function(){
            if(nb_click < num){
                this.setAttribute("disabled","true");
                this.setAttribute("val_selected","true");
                generate.setAttribute("class","none");
                this.classList.add("none");
                nb_click++;
            }
        })
    })

}


// Utilisation de la fonction pour générer 5 tirages de Keno, avec des nombres de 1 à 80 et 10 numéros sélectionnés pour chaque tirage
const numDraws = 1;
const minNumber = 1;
const maxNumber = 80;
const numSelected = 20;

var arrayliste_element = "";
ajouter_keno.onclick = function(){
    var data_element = document.querySelectorAll("[val_selected=true]");
    arrayliste_element+= "<div>";
    data_element.forEach(function(chiffre){
        arrayliste_element += "<div class='res_"+chiffre.textContent+"'>"+chiffre.textContent+"</div>";
        chiffre.classList.remove('none');
        chiffre.removeAttribute('disabled');
    })
    arrayliste_element+= "</div>";
    mise.innerHTML = arrayliste_element;
    button_select.forEach(button =>{
        button.classList.remove("none");
    })
}
flash_keno.onclick = function(){
    arrayliste_element+= "<div>";
    var cmpt = 0;
    var i = document.querySelector("[selected_number=on]")
    var flash = 0;
    cmpt = i.textContent;
    if(cmpt>0){
        flash = generateKenoNumbers(1,1,80,cmpt)[0];
    }
    for(var o=0;o<flash.length;o++ ){
        arrayliste_element += "<div class='res_"+flash[o]+"'>"+flash[o]+"</div>";
    }
    arrayliste_element+= "</div>";

    mise.innerHTML = arrayliste_element;
    button_select.forEach(button =>{
        button.classList.remove("none");
    })
}

generate.onclick = function(){
    var kenoDraws = generateKenoNumbers(numDraws, minNumber, maxNumber, numSelected);
        const delay = 500; // Délai entre chaque chiffre (en millisecondes)
        var numbers = kenoDraws[0]
        shuffleArray(numbers);
        const typewriterDiv = document.getElementById('valeur');

        let numberIndex = 0;

        function typeWriter() {
            if (numberIndex < numbers.length) {
                var e = numbers[numberIndex];
                var buttonval = document.getElementById(e);
                buttonval.classList.add("ok");

                var set_col = document.querySelectorAll('.res_'+e);
                set_col.forEach(function(set){
                    set.classList.add('none');
                })

                typewriterDiv.textContent = e;
                numberIndex++;
                setTimeout(typeWriter, delay);
            }
        }

        typeWriter();
    arrayliste_element = "";

}
////ici/////
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function generateKenoNumbers(numDraws, minNumber, maxNumber, numSelected) {
    // Vérifier les valeurs valides
    if (numDraws <= 0 || numSelected <= 0 || minNumber >= maxNumber) {
        return [];
    }
    
    // Générer les numéros pour chaque tirage
    const kenoResults = [];
    for (let i = 0; i < numDraws; i++) {
        const drawnNumbers = [];
        while (drawnNumbers.length < numSelected) {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            if (!drawnNumbers.includes(randomNumber)) {
                drawnNumbers.push(randomNumber);
            }
        }
        drawnNumbers.sort((a, b) => a - b);
        kenoResults.push(drawnNumbers);
    }
    
    return kenoResults;
}

