import React from 'react';
import './ArtistList.css';

import SingleArtist from './SingleArtist';
import Spinner from '../UI/Spinner/Spinner';

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
		<div>
			{props.isLoading && <Spinner />}
			<section className="artists-list">
				<h2>List of artists</h2>
				{artistList}
			</section>
		</div>
	)
}

export default ArtistsList;