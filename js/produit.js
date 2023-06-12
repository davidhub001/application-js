var base_url = window.location.href;
var list_prod = document.querySelector(".produit-liste")
var produit ="";

fetch(base_url+'/js/produit.json')
  .then(response => response.json())
  .then(data => {
    // Traitement des données
    data.forEach(e => {
        produit_(e);
    });
  })
  .catch(error => {
    // Gestion des erreurs
    console.error('Une erreur s\'est produite :', error);
  });

function produit_(params) {
    produit += `<div class="prod1" id="prod1">
                    <span class="image-prod"></span>
                    <span class="nom">Nom: `+params.nom+`</span>
                    <span class="prix">Prix: `+params.prix+`</span>
                    <span class="stock">Stock: `+params.stock+`</span>
                    <span class="add_panier"><button name="add_panier" onclick="add_panier('`+btoa(JSON.stringify(params))+`')" type="button" class="add">Ajouter au panier</button></span>
                </div>`
    list_prod.innerHTML = produit;            
}
var panier = []
var in_data_panier = sessionStorage.getItem("data-panier-dav-dev");
if(in_data_panier){
    panier = in_data_panier.split(',');
}

function add_panier(data){
    var p = JSON.parse(atob(data));
    if(!panier.includes(p.ref)){
        panier.push(p.ref);
        sessionStorage.setItem("data-panier-dav-dev" ,panier)
        total_panier(panier);
    }
}
function total_panier(p){
        var total_panier = p.length;
        var affiche = document.getElementById("total-panier");
        affiche.innerHTML = total_panier;
}
total_panier(panier);

var liste_produit = document.getElementById("liste_produit");
var voir_panier = document.getElementById("total-panier");

var liste = `
<table>
<tr>
    <td>Réf.</td>
    <td>Nom</td>
    <td>Prix unitaire</td>
</tr>
`;
panier.forEach(e => {
    liste += `<tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <tr>`
});
liste += "</table>";

voir_panier.onmouseover = function(){
    liste_produit.innerHTML = liste;
}
voir_panier.onmouseout = function(){
    liste_produit.innerHTML = "";
}
