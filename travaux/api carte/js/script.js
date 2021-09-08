function displayMap(){

    let ville = $("#champTexte").val();

    $.ajax ({
        url: "https://geo.api.gouv.fr/communes?nom="+ville+"&fields=centre,departement&boost=population&limit=1",
        statusCode: {
            404: function() {
                alert("page not found");
            },

            401: function () {
                alert("ID or password is not valid");
            },

            200: function (result){
                console.log(result);
           
                let lat = (result["0"]["centre"]["coordinates"]["1"]);
                let lon = (result["0"]["centre"]["coordinates"]["0"]);
                console.log(lat);
                initMap(lat,lon);
            }

        }
    });
}

function initMap(lat,lon) {

    $("#map").html('');
    var macarte = null;

    var container = L.DomUtil.get('map');
         if(container != null){
            container._leaflet_id = null;
        }

    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);

    let marker = new L.marker([lat, lon]).addTo(macarte);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
}
