// Recuperar el listado del Local Storage
	var listadoJSON4 = localStorage.getItem('mascotas');
	
// Convertir la cadena JSON a un objeto JavaScript
document.writeln('<div class="container-fluid"><div class="row"><div class="col-12">')
	var mascotasRe2= JSON.parse(listadoJSON4);
	for(let i=0;i<mascotasRe2.length;i++){
		
		if(mascotasRe2[i].fechaSalida=="-")
		document.writeln("<br>Nombre:\t"+mascotasRe2[i].nombre+" Numero del propietario:\t"+mascotasRe2[i].numero+" Fecha de Entrada:\t"+mascotasRe2[i].fechaEntrada);
		else
		document.writeln("<br>Nombre:\t"+mascotasRe2[i].nombre+" Numero del propietario:\t"+mascotasRe2[i].numero+" Fecha de Entrada:\t"+mascotasRe2[i].fechaEntrada+" Fecha de Salida:\t"+mascotasRe2[i].fechaSalida);	
	}
	document.writeln("</div></div></div>")