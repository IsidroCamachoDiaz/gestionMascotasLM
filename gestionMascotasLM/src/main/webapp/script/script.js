
class mascota{
	constructor(nombre,numero,fechaEntrada,fechaSalida){
		this.nombre=nombre;
		this.numero=numero;
		this.fechaEntrada=fechaEntrada;
		this.fechaSalida=fechaSalida;
	}
}

function mostrar(){
	
// Recuperar el listado del Local Storage
	var listadoJSON4 = localStorage.getItem('mascotas');
	
// Convertir la cadena JSON a un objeto JavaScript
	var mascotasRe2= JSON.parse(listadoJSON4);
	for(let i=0;i<mascotasRe2.length;i++){
		
		if(mascotasRe2[i].fechaSalida=="-")
		document.writeln("<br>Nombre:\t"+mascotasRe2[i].nombre+" Numero del propietario:\t"+mascotasRe2[i].numero+" Fecha de Entrada:\t"+mascotasRe2[i].fechaEntrada);
		else
		document.writeln("<br>Nombre:\t"+mascotasRe2[i].nombre+" Numero del propietario:\t"+mascotasRe2[i].numero+" Fecha de Entrada:\t"+mascotasRe2[i].fechaEntrada+" Fecha de Salida:\t"+mascotasRe2[i].fechaSalida);	
		
		console.log("holaaaaaaaaaaaaaaaa")
	}
	
}

function ingreso(form){
	// Recuperar el listado del Local Storage
	var listadoJSON2 = localStorage.getItem('mascotas');
	
	// Convertir la cadena JSON a un objeto JavaScript
	var mascotasRe= JSON.parse(listadoJSON2);
	
	let nombre=form.nombre.value;
	let numero=form.numero.value;
	let fechaEntrada=form.fechaEntrada.value;
	let fechaSalida=form.fechaSalida.value;
	var caracteres=[];
	caracteres=fechaEntrada.split("-");
	if(!fechaEntrada.includes("-")||caracteres.length>3)
		alert("No introdujo el formato correcto");
	else{
		var m1= new mascota(nombre,numero,fechaEntrada,fechaSalida);
		mascotasRe.push(m1);
		
		// Convertir el listado a formato JSON
		var listadoJSON3 = JSON.stringify(mascotasRe);
		
		// Guardar el listado en el Local Storage
		localStorage.setItem('mascotas', listadoJSON3);
		
		console.log("Nombre:"+nombre+" Numero del propietario:"+numero+" Fecha de Entrada:"+fechaEntrada+" Fecha de Salida:"+fechaSalida);
		}
	
}

function modificar(form){
	let numeroEn = form.numeroEn.value;
	
	// Recuperar el listado del Local Storage
	var listadoJSON4 = localStorage.getItem('mascotas');
	
// Convertir la cadena JSON a un objeto JavaScript
	var mascotasRe2= JSON.parse(listadoJSON4);
	for(let i=0;i<mascotasRe2.length;i++){
		
		if(mascotasRe2[i].numero==numeroEn){
		document.writeln("<br>Nombre:\t"+mascotasRe2[i].nombre+" Numero del propietario:\t"+mascotasRe2[i].numero+" Fecha de Entrada:\t"+mascotasRe2[i].fechaEntrada);
		mascotasRe2[i].nombre=prompt("Nombre:");
		mascotasRe2[i].fechaEntrada=prompt("Fecha de Entrada:");
		mascotasRe2[i].fechaSalida=prompt("Fecha de Salida:");		
	}
	}
	// Convertir el listado a formato JSON
		var listadoJSON3 = JSON.stringify(mascotasRe2);
		
	// Guardar el listado en el Local Storage
		localStorage.setItem('mascotas', listadoJSON3);
}