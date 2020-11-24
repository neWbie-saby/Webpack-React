import React from 'react';

import classes from './PizzaImage.css';
import image from '../../assets/pizza.jpg';

const pizzaImage = props => (
	<div className={classes.PizzaImage}>
		<img src={image} className={classes.PizzaImg}/>
	</div>
);

export default pizzaImage;