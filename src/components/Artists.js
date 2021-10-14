import React, { useState, useEffect } from 'react';
import ArtistsList from './ArtistsList';
import ArtistForm from './ArtistForm';

const Artists = props => {
	const [artists, setArtists] = useState([]);

	useEffect(() => {
		fetch('https://artist-images-2a66a-default-rtdb.firebaseio.com/artists.json')
			.then( response => response.json() )
			.then( responseData => {
				const loadedArtists = [];
				for ( const key in responseData ) {
					loadedArtists.push({
						id: key,
						name: responseData[key].name,
						images: responseData[key].images,
					});
				}
				setArtists( loadedArtists );
			});
	}, []);

	const addImagesHandler = ( newItem ) => {
		console.log( newItem );
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

	// const removeIngredientHandler = ingredientId => {
    //     setIsLoading(true);
    //     fetch(`https://artist-images-2a66a-default-rtdb.firebaseio.com/artists/${artisttId}.json`, {
    //         method: 'POST',
    //     }).then(response => {
    //         setIsLoading(false);
    //         setIngredients(prevIngredients =>
    //             prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
    //         );
    //     }).catch(error => {
    //         setError(error.message);
    //         setIsLoading(false);
    //     });
    // };

	return (
		<div>
			<ArtistsList
				artists={artists}
			/>
			<ArtistForm 
				onAddImages={addImagesHandler}
				artists={artists}
			/>
		</div>
	)
}

export default Artists;