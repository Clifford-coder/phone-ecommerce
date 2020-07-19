import styled from 'styled-components';

export const CusButton = styled.button`
	text-transform: capitalized;
	font-size: 1.2rem;
	font-weight: bold !important;
	border: 0.1rem solid var(--primaryLight);
	border-radius: 0.5rem;
	border-color: ${(props) => (props.cart ? '	var(--primaryBlue)' : 'var(--primaryLight)')};
	transition: all 0.2s ease-in-out;

	&:hover {
		background-image: ${(props) =>
			props.cart
				? ' linear-gradient(to left bottom, var(--primaryBlue), var(--secondaryBlue))'
				: ' linear-gradient(to left bottom, var(--primaryDeep), var(--primaryLight))'};
		transform: translateY(-0.15rem);
		// Set shadow under the button mouse cursor is placed on it
		box-shadow: 0 1rem 1.5rem ${(props) => (props.cart ? 'var(--primaryBlue)' : 'var(--primaryDeep)')};
		color: var(--primaryWhite);

		&::after {
			transform: scale(1.5);
			/* Set the opacity to 0 for it to fade out after it has been scaled to 1.5 of the original */
			opacity: 0;
		}
	}
`;

export const ProductCardWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 0.6s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			transition: all 0.6s linear;
			background-image: linear-gradient(to left bottom, var(--primaryWhite), rgb(200, 180, 230));
		}
	}
	.cusImg-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 0.5s linear;
	}
	.cusImg-container:hover .card-img-top {
		transform: scale(1.22) !important;
	}
	// the cart btn at the top of the product card.
	.cus-cart-btn {
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.2rem 0.4rem;
		background-image: linear-gradient(to left top, var(--primaryDeep), var(--primaryLight));
		border: none;
		color: var(--primaryWhite);
		font-size: 1.4rem;
		border-radius: 0 0 0.6rem 0;
		transform: translate(-100%, -100%);
	}
	.card:hover .cus-cart-btn {
		transform: translate(0, 0);
		transition: all 0.3s linear;
	}
	.cus-cart-btn:hover {
		background-image: linear-gradient(to left, var(--primaryDeep), var(--primaryLight));
		transform: translateY(-0.15rem);
		// Set shadow under the button mouse cursor is placed on it
		box-shadow: 0 1rem 1.5rem var(--primaryDeep);

		&::after {
			transform: scale(1.3);
			/* Set the opacity to 0 for it to fade out after it has been scaled to 1.5 of the original */
			opacity: 0;
		}
	}
	.cus-cart-btn:active {
		box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.2);
		transform: translateY(-0.15rem);
		border: none;
	}

	//show text when the button in the corner of the card is hovered
`;

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 3, 4, 0.35);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		background-color: var(--primaryWhite);
	}
`;
