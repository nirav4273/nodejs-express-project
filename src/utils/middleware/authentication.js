import { verifyToken, TOKEN_SECRET, REFRESH_TOKEN_SECRET, generateToken } from '../jwt/index';
import { response } from '../response';

export const authentication = async(req, res, next) => {
	const token = req.headers.authorization;
	const refreshToken = req.headers.refreshtoken;

	if(token && refreshToken) {

		try {
			const flag = await verifyToken(token, TOKEN_SECRET);
			req.meta = flag.data;
			next();
			
		} catch (e) {
			try {
				const refreshFlag = await verifyToken(refreshToken, REFRESH_TOKEN_SECRET);
				req.meta = refreshFlag.data;
				
				const newToken = await generateToken(refreshFlag.data);
				res.header("access-control-expose-headers", "token,refreshtoken");
				res.setHeader('token', newToken.token);
				res.setHeader('refreshToken', newToken.refreshToken)
				next();

			} catch (e) {
				console.log(e);
				response(res, false, 404, "UN_AUTHORIZED");
			}
		}
	} else {
		response(res, false, 404, "UN_AUTHORIZED");
	}
}