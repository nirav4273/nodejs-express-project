import { response, debug } from '../../utils/index';
import { user as User, user_token as UserToken } from '../../models';
import bcrypt from 'bcryptjs';
import randomstring from 'randomstring';

const comparePassword = (password, hash) => {
	return bcrypt.compareSync(password, hash);
}

const generateToken = () => randomstring.generate(101);

export const login  = async ({ query, body, params},res) => {
	const { email, password } = body;
	try{
		const find = await User.findOne({
			where:{
				email
			},
			raw: true
		});
		if(find){
			const isMatched = comparePassword(password, find.password);
			if(isMatched){
				const hash = generateToken();
				const obj = {
					userId: find.id,
					token: hash,
				};
				console.log(obj)
				await UserToken.create(obj)
				find.password = undefined;
				find.hash = hash;
				response(res, true, 200, "Login Succes", find);	
			}else{
				response(res, false, 404, "Invalid username / password");	
			}		
		} else {
			response(res, false, 404, "Invalid username / password");
		}
		
	} catch(e) {
		console.log(e);
		response(res, false, 404, e.message);
	}
	
}

const checkUser = async email => {
	return new Promise(async(resolve, reject) => {
		try {
			const find = await User.findOne({
				where: {
					email
				}
			});
			resolve(find);
		}catch(e) {
			reject(e);
		}
	})
}

export const signup  = async ({ body },res) => {
	try{

		const isUserExist = await checkUser(body.email);
		if(isUserExist){
			response(res, false, 409, "User Already exist");
		}else{
			const insert = await User.create(body);
			response(res, true, 200, "Singup Success", insert);	
		}
		
	} catch(e) {
		response(res, false, 404, e);
	}
}