$("#zona_click").mousedown(clicar_puntos);
$("#zona_click").mouseup(restore_puntos);

for(var i=0;i<$(".imagenes").length;i++){
	$(".imagenes:eq("+i+")").attr("id","i_"+i);
	$("#i_"+i).click(clicar_imagen);
};

var god_points=0;
var valor_god_points=10;
var compra=[0];
var max_compra=[25];
var tiempo=[100];
var carga=0;

function clicar_puntos(){
	god_points++;
	$("#zona_click").css("background-color","yellow");
	mostrar_puntos();
}

function restore_puntos(){
	$("#zona_click").css("background-color","lightblue");
}

function mostrar_puntos(){
	$("#Mgod_points").html(god_points);
	$("#Mcompra[0]").html(compra[0]);
}

function aumentar(){
	$("#c_1").val(carga);
	carga++;
	if(carga==101){
		carga=0;
		god_points++;
		mostrar_puntos();
	}
}

function clicar_imagen(){
	alert(max_compra[0]+","+compra[0])
	if(god_points>=valor_god_points){
		god_points=god_points-valor_god_points;
		compra[0]++;
		if(compra[0]>=max_compra[0]){
			tiempo[0]=tiempo[0]/2;
		}
		mostrar_puntos();
	}
	if(compra[0]>0){
		clearInterval(Int_i1);
		Int_i1=setInterval(aumentar,tiempo[0]);		
	}
}

window.onload=function(){
	Int_i1=setInterval(aumentar,tiempo[0]);
	clearInterval(Int_i1);
}
