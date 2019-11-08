export const response = (res, success, status, msg, data) => {
	res.status(status).send({success, msg, data});
}