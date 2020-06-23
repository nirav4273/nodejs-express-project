import { response, debug } from '../../utils/index';
import { user as User, user_token as UserToken } from '../../models';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/jwt/index';


const comparePassword = (password, hash) => {
	return bcrypt.compareSync(password, hash);
}

export const login  = async (req ,res) => {
	const { email, password } = req.body;
	try{
		const find = await User.findOne({
			where:{
				email
			}
		});
		if(find){
			const isMatched = comparePassword(password, find.password);
			if(isMatched){
				const hash = generateToken({
					email,
					userId: find.dataValues.id
				});

				find.dataValues.password = undefined;
				response(res, true, 200, "Login Succes", {find, ...hash});	
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
			const hash = generateToken({
				email: body.email,
				userId: insert.dataValues.id
			});
			insert.dataValues.password = undefined;
			response(res, true, 200, "Singup Success", {find: insert, ...hash});	
		}
		
	} catch(e) {
		response(res, false, 404, e.message );
	}
}