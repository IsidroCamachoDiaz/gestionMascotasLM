class mascota{
	constructor(nombre,numero,fechaEntrada,fechaSalida){
		this.nombre=nombre;
		this.numero=numero;
		this.fechaEntrada=fechaEntrada;
		this.fechaSalida=fechaSalida;
	}
}
var m2=new mascota("Prueba1","7546583625","20-3-2016","-");
var mascotas=[m2];

// Convertir el listado a formato JSON
var listadoJSON = JSON.stringify(mascotas);

// Guardar el listado en el Local Storage
localStorage.setItem('mascotas', listadoJSON);