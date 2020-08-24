const tabla = document.getElementById('tablaUsuario')

const usuarioGuardadoEnStorage = ()=>{
	const usuarioEnStorage = JSON.parse(localStorage.getItem('user'))
	return usuarioEnStorage;
}

console.log(usuarioGuardadoEnStorage())


const listarUsuarios = ()=>{
	if(localStorage.getItem('user') !== null){

		const contenidoTabla = usuarioGuardadoEnStorage().map((usuario, index)=>
				`
				<tr>
					<th>${index + 1}</th>
					<td>${usuario.name}</td>
					<td>${usuario.cel}</td>
					<td>${usuario.email}</td>
				</tr>`
		)
		tabla.innerHTML = contenidoTabla.join('')

		// for(let i = 0; i<usuarioGuardadoEnStorage().length; i += 1){
		// 	tabla.innerHTML +=`
		// 	<tr>
		// 		<th>${i+1}</th>
		// 		<td>${usuarioGuardadoEnStorage()[i].name}</td>
		// 		<td>${usuarioGuardadoEnStorage()[i].cel}</td>
		// 		<td>${usuarioGuardadoEnStorage()[i].email}</td>
		// 	</tr>`
		// }
	}


}

listarUsuarios()


const btnLimpiar = document.getElementById('limpiar')
btnLimpiar.addEventListener('click', ()=>{
	localStorage.clear()
	location.reload()
})