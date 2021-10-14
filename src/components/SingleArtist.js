import React from 'react';
import Picture from './Picture';
import './SingleArtist.css';

const SingleArtist = props => {
	return (
		<div className="SingleArtist">
			<h4>{props.artistName}</h4>
			<ul>
				{props.artistImages.map( ( image, ind ) => (
					<li key={ind}>
						<Picture imgLink={image} />
					</li>
				))}
			</ul>
			
		</div>
	)
}

export default SingleArtist;