import React from 'react';
import '../css/boton.css';

const Boton = ({ children, agregarInput }) => {
	const esOperador = (valor) => {
		return isNaN(valor) && valor !== '.' && valor !== '=';
	};
	return (
		<div
			onClick={() => agregarInput(children)}
			className={`boton-contenedor ${esOperador(children) ? 'operador' : ''}`.trim()}
		>
			{children}
		</div>
	);
};

export default Boton;
