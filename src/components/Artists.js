import React, { useState, useEffect } from 'react';
import ArtistsList from './ArtistsList';

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

	const addImagesHandler = () => {

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
			{/* <ArtistForm 
				onAddImages={addImagesHandler}
			/> */}
		</div>
	)
}

export default Artists;