export const checkValidity = ( value, rules ) => {
	let isValid = true;

	if ( rules.isImage ) {
		const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
		isValid = pattern.test( value );
	}

	return isValid;
}