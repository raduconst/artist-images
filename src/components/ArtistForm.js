import React, { useState } from 'react';
import { Card } from '../UI';

import { checkValidity } from '../shared/utility';

const ArtistForm = props => {
	const [userId, setUserId] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [formIsvalid, setFormIsValid] = useState(false);

	const submitHandler = ( event ) => {
		event.preventDefault();
		props.onAddImages({ userId: userId, imageUrl: imageUrl });
		setUserId('');
		setImageUrl('');
		setFormIsValid(false);
	}

	const onHandleInputChange = event => {
		setImageUrl( event.target.value );
		if ( checkValidity( event.target.value, {isImage: true}) ) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}

	let artistOptions = [];
	artistOptions = props.artists.map( ({id, name}) => (<option key={id} value={id}>{name}</option>) );

	return (
		<section className="artist-image-form">
		<Card>
			<form onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="userId">Name</label>
				<select value={userId} onChange={ event => setUserId( event.target.value )}>
					{artistOptions}
				</select>
			</div>
			<div className="form-control">
				<label htmlFor="imageUrl">Image URL</label>
				<input 
					type="text" 
					id="imageUrl"
					value={imageUrl} 
					onChange={onHandleInputChange} 
				/>
			</div>
			<div className="artist-form__actions">
				<button type="submit" disabled={!formIsvalid}>Add Image</button>
			</div>
			</form>
		</Card>
    </section>
	);
}

export default ArtistForm;