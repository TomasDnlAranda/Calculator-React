import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { evaluate } from 'mathjs';

function App() {
	const [input, setInput] = useState('');

	const agregarInput = (val) => {
		setInput(input + val);
	};

	const eliminar = () => {
		setInput('');
	};

	const resultado = () => {
		setInput(!input.trim() ? input : evaluate(input));
	};

	return (
		<>
			<div className="App">
				<div className="contenedor-calculadora">
					<Pantalla input={input} />
					<div className="fila">
						<Boton agregarInput={agregarInput}>1</Boton>
						<Boton agregarInput={agregarInput}>2</Boton>
						<Boton agregarInput={agregarInput}>3</Boton>
						<Boton agregarInput={agregarInput}>+</Boton>
					</div>
					<div className="fila">
						<Boton agregarInput={agregarInput}>4</Boton>
						<Boton agregarInput={agregarInput}>5</Boton>
						<Boton agregarInput={agregarInput}>6</Boton>
						<Boton agregarInput={agregarInput}>-</Boton>
					</div>
					<div className="fila">
						<Boton agregarInput={agregarInput}>7</Boton>
						<Boton agregarInput={agregarInput}>8</Boton>
						<Boton agregarInput={agregarInput}>9</Boton>
						<Boton agregarInput={agregarInput}>*</Boton>
					</div>
					<div className="fila">
						<Boton agregarInput={resultado}>=</Boton>
						<Boton agregarInput={agregarInput}>0</Boton>
						<Boton agregarInput={agregarInput}>.</Boton>
						<Boton agregarInput={agregarInput}>/</Boton>
					</div>
					<div className="fila">
						<BotonClear eliminar={eliminar}>Clear</BotonClear>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
