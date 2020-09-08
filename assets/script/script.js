import { Usuario } from './usuario.js';

const formRegistro = document.getElementById('formRegistro');
console.log(formRegistro);

let listaDeUsuario = [];

formRegistro.addEventListener('submit', (e) => {
	e.preventDefault();

	const inputName = document.getElementById('name').value;
	const inputCel = document.getElementById('cel').value;
	const inputEmail = document.getElementById('email').value;

	let usuario = new Usuario({
		name: inputName,
		cel: inputCel,
		email: inputEmail,
	});
    guardarEnStorage(usuario);
	alert('Usuario creado')
	window.location.pathname = 'CRUD_localStorage/assets/pages/lista.html'

});

const guardarEnStorage = (user) => {
	if (localStorage.getItem('user') === null) {
		console.log('entro al if');
		listaDeUsuario.push(user);
		const listaParaGuardar = JSON.stringify(listaDeUsuario);
		localStorage.setItem('user', listaParaGuardar);
	} else {
		console.log('entro al else');
		listaDeUsuario = JSON.parse(localStorage.getItem('user'));
		console.log('esta es la lista', listaDeUsuario);
		listaDeUsuario.push(user);
		const listaParaGuardar = JSON.stringify(listaDeUsuario);
		localStorage.setItem('user', listaParaGuardar);
	}
};
