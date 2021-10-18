import React, { useState, useEffect } from 'react';
import ArtistsList from './ArtistsList';
import ArtistForm from './ArtistForm';

const Artists = () => {
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

	const addImageHandler = ({userId, imageUrl}) => {
		const artistsCopy = [];

		// this is the case when the dropdown field is not changed 
		// and the first value is used
		if ( userId === '' ) {
			userId = artists[0].id;
		}

		artists.map( artist => {
			if ( artist.id === userId ) {
				const newImages = artist.images;
				newImages.push(imageUrl);
				artistsCopy.push({
					...artist,
					images: newImages,
				});
				setIsLoading( true );
				fetch(`https://artist-images-2a66a-default-rtdb.firebaseio.com/artists/${userId}.json`, {
					method: 'PATCH',
					body: JSON.stringify({images: newImages}),
					headers: { 'Content-Type': 'application/json' }
				}).then(response => response.json() )
				.then(responseData => {
					setIsLoading( false );
				}).catch( err => {
					setError( err.message );
					setIsLoading( false );
				});
			} else {
				artistsCopy.push({
					...artist,
				})
			}
		});
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
				onAddImages={addImageHandler}
				artists={artists}
			/>
		</div>
	)
}

export default Artists;