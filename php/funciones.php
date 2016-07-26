<?php

header("Access-Control-Allow-Origin: *");

require_once 'conexion.php';

function proxima_actividad(){
	/* conectamos */	
	$conexion=mysqli_connect(SERVIDOR,USUARIO,CLAVE,BBDD);	
#####################################################################################	
	/* comprobar la conexin */
	if (mysqli_connect_errno()) {
		printf("Conexin fallida: %s\n", mysqli_connect_error());
		exit();
	}
#####################################################################################	
	/* comprobar si el servidor sigue funcionando */
	if (mysqli_ping($conexion)) {

	} else {
		printf ("Error: %s\n", mysqli_error($enlace));
	}
#####################################################################################	
	/* realizar consulta */
	mysqli_set_charset ( $conexion , 'utf8' );
	
	$sql = "SELECT * FROM `actividades` WHERE 1 ORDER BY nombre";
	
	if(!($resultado=mysqli_query($conexion ,$sql))){
		echo "<p>ERROR ".mysqli_errno($conexion).":".mysqli_error($conexion)."</p>";
		return false;
	}
#####################################################################################		
		
	echo "<table class='tabla'>";
	echo "<tr class='tr'>";
	while($menu=mysqli_fetch_array($resultado)){
		echo "<td class=\"td\"><a id=\"".$menu['id']."\" class=\"botones num_".$menu['id']."\" href=\"#\">".$menu['id']."</a></td>";
		echo "<td class=\"td\"><a id=\"".$menu['nombre']."\" class=\"botones num_".$menu['id']."\" href=\"#\">".$menu['nombre']."</a></td>";
	}
	echo "</ul>";
	
#####################################################################################	
	/* cerrar la conexin */
	
	mysqli_free_result($resultado);
	mysqli_close( $conexion);
}

?>	
