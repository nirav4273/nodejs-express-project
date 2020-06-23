import { response, debug } from '../../utils/index';
import {
	project as Project,
	project_user as ProjectUser,
	users as User
} from '../../models';

export const create = async(req, res) => {
	try {
		const { userId } = req.meta;

		const insert = await Project.create({
			...req.body,
			userId
		});

		response(res, true, 200, "PROJECT_CREATED", insert)
	} catch (e) {
		debug.log(e);
		response(res, false, 400, e.message);
	}
}

export const list = async(req, res) => {
	try {
		const { userId } = req.meta;

		const list = await Project.findAll({
			where: {
				userId
			},
			order: [['id','desc']],
			attributes: ['id', 'userId', 'code', 'name', 'createdAt']
		});

		response(res, true, 200, "PROJECT_LISST", list)
	} catch (e) {
		debug.log(e);
		response(res, false, 400, e.message);
	}	
}

export const inviteUser = async(req, res) => {
	try {
		const { email, projectId } = req.body;

		const info = await Project.findOne({
			where: {
				id: projectId
			},
			raw: true,
			attributes: ['id', 'code']
		});

		if(info) {
			const userInfo = await User.findOne({
				where: {
					email
				},
				attributes: ['id'],
				raw: true
			})

			await ProjectUser.create({
				projectId: info.id,
				projectCode: info.code,
				email,
				userId: userInfo.id
			});

			response(res, true, 200, "USER_INVITE_IN_PROJECT_SUCCESSFULLY");
		} else {
			response(res, false, 400, "PROEJCT_NOT_FOUND");
		}

	} catch (e) {
		debug.log(e);
		response(res, false, 400, e.message);
	}
}