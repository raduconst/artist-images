import React, { useState, useEffect } from 'react';
import ArtistsList from './ArtistsList';
import ArtistForm from './ArtistForm';

const Artists = props => {
	const [artists, setArtists] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

	useEffect(() => {
		setIsLoading( true );
		fetch('https://artist-images-2a66a-default-rtdb.firebaseio.com/artists.json')
			.then( response => response.json() )
			.then( responseData => {
				setIsLoading( false );
				const loadedArtists = [];
				for ( const key in responseData ) {
					loadedArtists.push({
						id: key,
						name: responseData[key].name,
						images: responseData[key].images,
					});
				}
				setArtists( loadedArtists );
			})
			.catch( err => {
				setError( err.message );
				setIsLoading( false );
			});
	}, []);

	const addImagesHandler = ( newItem ) => {
		const artistsCopy = [];
		artists.map( artist => {
			if ( artist.id === newItem.userId ) {
				const newImages = artist.images;
				newImages.push(newItem.imageUrl);
				console.log(newImages);
				artistsCopy.push({
					...artist,
					images: newImages,
				})
			} else {
				artistsCopy.push({
					...artist,
				})
			}
		});
		console.log(artistsCopy);
		setArtists(artistsCopy);
	}

	return (
		<div>
			{error && <div>Can't load data from server: {error}</div>}

			<ArtistsList
				artists={artists}
				isLoading={isLoading}
			/>
			<ArtistForm 
				onAddImages={addImagesHandler}
				artists={artists}
			/>
		</div>
	)
}

export default Artists;