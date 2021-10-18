import * as constants from '../shared/constants';

export const checkValidity = ( value, rules ) => {
	if ( rules.isImage ) {
		const pattern = constants.IMAGE_FILE_PATTERN;
		return pattern.test( value );
	}

	return true;
}