import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import SingleArtist from './SingleArtist';

const ArtistsList = props => {
	// console.log(props.artists);
	// console.log(typeof(props.artists));
	
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