import React from 'react';
import SingleArtist from './SingleArtist';

import './ArtistList.css';

const ArtistsList = props => {
	let artistList = null;
	if ( props.artists ) {
		artistList = props.artists.map( artist => (
			<SingleArtist 
				key={artist.id} 
				artistId={artist.id}
				artistName={artist.name} 
				artistImages={artist.images} 
			/>
		));
	}
	
	return (
		<section className="artists-list">
			<h2>List of artists</h2>
			{artistList}
		</section>
	)
}

export default ArtistsList;