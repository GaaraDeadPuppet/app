
function iniciar(){
console.log("inicio");
$("#p_a").click(cargar_proxima_actividad);
}



function cargar_proxima_actividad(){
/*
var url;
url="http://www.ilazkitaldea.com/app/php/cargar_proxima_actividad.php";
url=encodeURI(url);
$('#menu').load(url,asignar_menu);
*/
var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        if ( i === 3 ) {
          return false;
        }
      });
    });
}

function asignar_menu(){
}
