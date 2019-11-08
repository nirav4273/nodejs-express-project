import { response, debug } from '../../utils/index';

export const login  = async ({ query, body, params},res) => {
	const { email, password } = body;
	response(res, true, 200, "Login Succes", {});
}

export const signup  = async ({ body },res) => {
	const { email, password } = body;
	response(res, true, 200, "Singup Success", { email, password });
}