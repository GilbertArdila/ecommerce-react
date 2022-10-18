import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import { handleTotalAmount } from '../../Helpers/handleTotalAmount';
import Swal from 'sweetalert2';


const Order = () => {
	const { state, addToCategorySearch } = useContext(AppContext);
	const { cart } = state;
	const date = new Date();
	const history = useHistory();

	const handleClick = () => {
		Swal.fire({
			title: 'Gracias por utilizar nuestros servicios :)',
			showClass: {
				popup: 'animate__animated animate__fadeInDown'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
			}
		})
		addToCategorySearch('');
		cart.length = 0;
		history.push('/')
	}
	return (
		<>

			<div className="Order">
				{cart.length > 0 ?
					<>
						<p>
							<span>{date.toISOString().split('T')[0]}</span>
							<span>{cart.length} articles</span>
						</p>
						<p>${handleTotalAmount()}</p>
						<img src="flechita.svg" alt="arrow" /></>:<h2>Aún no hay ningun producto en el carrito</h2>
					
				}
			</div>
			{cart.length > 0 &&
				<button className='Order-button' onClick={handleClick}>Pagar</button>}
		</>
	)
}

export { Order }