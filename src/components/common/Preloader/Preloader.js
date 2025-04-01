import React from 'react';
import preloader from '../../../assets/images/fade-stagger-circles.svg';

let Preloader = (props) => {
	return <div>
		<img src={preloader} style={{ width: "70px", height: "70px" }} />
	</div>
}

export default Preloader;