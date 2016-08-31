
function iniciar(){
console.log("inicio");
$("#p_a").click(cargar_proxima_actividad);
}



function cargar_proxima_actividad(){
var url;
url="http://www.ilazkitaldea.com/app/php/cargar_proxima_actividad.php";
url=encodeURI(url);
$('#menu').load(url,asignar_menu);
}

function asignar_menu(){
}
