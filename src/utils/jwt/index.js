import jwt from 'jsonwebtoken'

export const TOKEN_SECRET = 'NIKKS@NIKKS';
export const REFRESH_TOKEN_SECRET = 'NIRAV@NIKKS';

///
/// Vertify JWT token.
///
export const verifyToken = (token, secret) => {
	return jwt.verify(token, secret, function(err, decoded) {
	 	if(err) {
	 		throw err;
	 	} else{ 
	 		return decoded;
	 	}
	});
}


/// Generate token
export const generateToken = (data) => {
	const token =  jwt.sign({
		data,
	}, TOKEN_SECRET, { expiresIn: '1m' });
	const refreshToken = jwt.sign({
		data,
	}, REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

	return {
		token,
		refreshToken
	}
}

