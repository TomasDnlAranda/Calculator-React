import React from 'react';
import '../css/botonClear.css';

const BotonClear = ({ children, eliminar }) => (
	<button onClick={() => eliminar()} className="boton-clear">
		{children}
	</button>
);

export default BotonClear;
