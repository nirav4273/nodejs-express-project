export const response = (res, success, status, msg, data) => {
	setTimeout(() => {
		res.status(status).send({success, msg, data});
	}, 1500);
}