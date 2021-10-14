import React from 'react';
import Picture from '../UI/Picture/Picture';
import './SingleArtist.css';

import Card from '../UI/Card/Card';

const SingleArtist = props => {
	return (
		<Card>
			<div className="artist-wrapper">
				<h4>{props.artistName}</h4>
				<ul>
					{props.artistImages.map( ( image, ind ) => (
						<li key={ind}>
							<Picture imgLink={image} />
						</li>
					))}
				</ul>
			</div>
		</Card>
	)
}

export default SingleArtist;